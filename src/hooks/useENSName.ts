/*
import { namehash } from 'ethers/lib/utils';
import {useMemo, useState} from 'react';
import { useSingleCallResult } from '../state/multicall/hooks';
import { isAddress } from '../utils';
import isZero from '../utils/isZero';
import { useENSRegistrarContract, useENSResolverContract } from './useContract';
import useDebounce from './useDebounce';
import { Resolution, UnsLocation} from '@unstoppabledomains/resolution';


const resolution = new Resolution();


async function reverseUrl(address: string): Promise<string> {
  try{
    const domain = await resolution.reverse(address, {location: UnsLocation.Layer2}) || address
    return domain;
  } catch (error) {
    console.error(error)
    return address
  }
}


export default function useENSName(address?: string): { ENSName: string | null; loading: boolean } {
  const debouncedAddress = useDebounce(address, 200);

  const [unstoppableUrl, setUnstoppableUrl] = useState(address)

  useMemo(() => {
    if (!debouncedAddress) return;
    reverseUrl(debouncedAddress).then((result) => {
      setUnstoppableUrl(result);
    })
  }, [debouncedAddress])

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
  const isUnstoppable = unstoppableUrl !== address;
  return {
    ENSName: isUnstoppable? unstoppableUrl: changed ? null : name.result?.[0] ?? null,
    loading: !isUnstoppable && (changed || resolverAddress.loading || name.loading),
  };
}
*/

export default function useENSName(address?: string): { ENSName: string | null; loading: boolean } {
  return {
    ENSName: null,
    loading: false,
  };
}