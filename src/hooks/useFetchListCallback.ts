import { nanoid } from '@reduxjs/toolkit';
import { TokenList } from '@uniswap/token-lists';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../state';
import { fetchTokenList } from '../state/lists/actions';
import getTokenList from '../utils/getTokenList';

export function useFetchListCallback(): (listUrl: string, sendDispatch?: boolean) => Promise<TokenList> {
  const dispatch = useDispatch<AppDispatch>();

  const ensResolver = useCallback(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (ensName: string) => {
          throw new Error('Could not construct mainnet ENS resolver');
      }, []
  )
  /*
  const { chainId, library } = useActiveWeb3React();

  const ensResolver = useCallback(
    (ensName: string) => {
      if (!library || chainId !== ChainId.MAINNET) {
        if (NETWORK_CHAIN_ID === ChainId.MAINNET) {
          const networkLibrary = getNetworkLibrary();
          if (networkLibrary) {
            return resolveENSContentHash(ensName, networkLibrary);
          }
        }
        throw new Error('Could not construct mainnet ENS resolver');
      }
      return resolveENSContentHash(ensName, library);
    },
    [chainId, library]
  );
  */

  // note: prevent dispatch if using for list search or unsupported list
  return useCallback(
    async (listUrl: string, sendDispatch = true) => {
      const requestId = nanoid();
      sendDispatch && dispatch(fetchTokenList.pending({ requestId, url: listUrl }));
      return getTokenList(listUrl, ensResolver)
        .then((tokenList) => {
          sendDispatch && dispatch(fetchTokenList.fulfilled({ url: listUrl, tokenList, requestId }));
          return tokenList;
        })
        .catch((error) => {
          console.debug(`Failed to get list at url ${listUrl}`, error);
          sendDispatch && dispatch(fetchTokenList.rejected({ url: listUrl, requestId, errorMessage: error.message }));
          throw error;
        });
    },
    [dispatch, ensResolver]
  );
}
