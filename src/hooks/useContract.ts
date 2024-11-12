import { Contract } from 'ethers';
import STAKING_REWARDS from '@uniswap/liquidity-staker/build/StakingRewards.json';
import IUniswapV2Router02 from '@uniswap/v2-periphery/build/IUniswapV2Router02.json';
import { ChainId, WETH } from '@uniswap/sdk';
import IUniswapV2Pair from '@uniswap/v2-core/build/IUniswapV2Pair.json';
import {useEffect, useState} from 'react';
import {
  ARGENT_WALLET_DETECTOR_ABI,
  ARGENT_WALLET_DETECTOR_MAINNET_ADDRESS,
} from '../swapConstants/abis/argent-wallet-detector';
import ENS_PUBLIC_RESOLVER_ABI from '../swapConstants/abis/ens-public-resolver.json';
import ENS_ABI from '../swapConstants/abis/ens-registrar.json';
import { ERC20_BYTES32_ABI } from '../swapConstants/abis/erc20';
import ERC20_ABI from '../swapConstants/abis/erc20.json';
import WETH_ABI from '../swapConstants/abis/weth.json';
import { MULTICALL_ABI, MULTICALL_NETWORKS } from '../swapConstants/multicall';
import { getContract } from '../utils';
import { useActiveWeb3React } from './index';
import {ROUTER_ADDRESS} from "../swapConstants";

// returns null on errors
function useContract(address: string | undefined, ABI: any, withSignerIfPossible = true): Contract | null {
  const { library, account } = useActiveWeb3React();
  const [contract, setContract] = useState<Contract | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchContract = async () => {
      if (!address || !ABI || !library) {
        setContract(null);
        return;
      }

      try {
        const signerOrProvider = withSignerIfPossible && account ? account : undefined;
        const fetchedContract = await getContract(address, ABI, library, signerOrProvider);
        if (isMounted) {
          setContract(fetchedContract);
        }
      } catch (error) {
        console.error('Failed to get contract', error);
        if (isMounted) {
          setContract(null);
        }
      }
    };

    fetchContract();

    return () => {
      isMounted = false;
    };

  }, [address, ABI, library, withSignerIfPossible, account]);

  return contract;
}


export function useRouterContract(withSignerIfPossible: boolean = true): Contract | null {
  return useContract(ROUTER_ADDRESS, IUniswapV2Router02.abi, withSignerIfPossible);
}

export function useTokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(tokenAddress, ERC20_ABI, withSignerIfPossible);
}

export function useWETHContract(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React();
  return useContract(chainId ? WETH[chainId].address : undefined, WETH_ABI, withSignerIfPossible);
}

export function useArgentWalletDetectorContract(): Contract | null {
  const { chainId } = useActiveWeb3React();
  return useContract(
    chainId === ChainId.MAINNET ? ARGENT_WALLET_DETECTOR_MAINNET_ADDRESS : undefined,
    ARGENT_WALLET_DETECTOR_ABI,
    false
  );
}

export function useENSRegistrarContract(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React();
  let address: string | undefined;
  if (chainId) {
    switch (chainId) {
      case ChainId.MAINNET:
      case ChainId.GÖRLI:
      case ChainId.ROPSTEN:
      case ChainId.RINKEBY:
        address = '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e';
        break;
    }
  }
  return useContract(address, ENS_ABI, withSignerIfPossible);
}

export function useENSResolverContract(address: string | undefined, withSignerIfPossible?: boolean): Contract | null {
  return useContract(address, ENS_PUBLIC_RESOLVER_ABI, withSignerIfPossible);
}

export function useBytes32TokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(tokenAddress, ERC20_BYTES32_ABI, withSignerIfPossible);
}

export function usePairContract(pairAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(pairAddress, IUniswapV2Pair.abi, withSignerIfPossible);
}

export function useMulticallContract(): Contract | null {
  const { chainId } = useActiveWeb3React();
  return useContract(chainId && MULTICALL_NETWORKS[chainId], MULTICALL_ABI, false);
}

export function useStakingContract(stakingAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(stakingAddress, STAKING_REWARDS.abi, withSignerIfPossible);
}
