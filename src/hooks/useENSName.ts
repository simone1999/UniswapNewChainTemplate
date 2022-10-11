import { namehash } from 'ethers/lib/utils';
import { useMemo } from 'react';
import { useSingleCallResult } from '../state/multicall/hooks';
import { isAddress } from '../utils';
import isZero from '../utils/isZero';
import { useENSRegistrarContract, useENSResolverContract } from './useContract';
import useDebounce from './useDebounce';
import Resolution from '@unstoppabledomains/resolution';


const resolution = new Resolution();


function reverseTokenId(address: string): string {
  resolution
      .reverseTokenId(address)
      .then((tokenId) => {
        console.log(address, 'reversed to', tokenId);
        return tokenId;
      })
      // tokenId consists the namehash of the domain with reverse resolution to that address
      .catch(console.error);
  return address;
}


/**
 * Does a reverse lookup for an address to find its ENS name.
 * Note this is not the same as looking up an ENS name to find an address.
 */
export default function useENSName(address?: string): { ENSName: string | null; loading: boolean } {
  let unstoppableUrl = address;
  if(address){
    unstoppableUrl = reverseTokenId(address)
  }

  const debouncedAddress = useDebounce(address, 200);
  const ensNodeArgument = useMemo(() => {
    if (!debouncedAddress || !isAddress(debouncedAddress)) return [undefined];
    try {
      return debouncedAddress ? [namehash(`${debouncedAddress.toLowerCase().substr(2)}.addr.reverse`)] : [undefined];
    } catch (error) {
      return [undefined];
    }
  }, [debouncedAddress]);
  const registrarContract = useENSRegistrarContract(false);
  const resolverAddress = useSingleCallResult(registrarContract, 'resolver', ensNodeArgument);
  const resolverAddressResult = resolverAddress.result?.[0];
  const resolverContract = useENSResolverContract(
    resolverAddressResult && !isZero(resolverAddressResult) ? resolverAddressResult : undefined,
    false
  );
  const name = useSingleCallResult(resolverContract, 'name', ensNodeArgument);

  const changed = debouncedAddress !== address;
  const isUnstoppable = unstoppableUrl != address;
  return {
    ENSName: isUnstoppable? unstoppableUrl: changed ? null : name.result?.[0] ?? null,
    loading: !isUnstoppable && (changed || resolverAddress.loading || name.loading),
  };
}
