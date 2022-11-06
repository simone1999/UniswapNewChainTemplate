import {Web3Provider} from '@ethersproject/providers';
import {InjectedConnector} from '@web3-react/injected-connector';
import {WalletConnectConnector} from '@web3-react/walletconnect-connector';
import {WalletLinkConnector} from '@web3-react/walletlink-connector';
// import { PortisConnector } from '@web3-react/portis-connector';
// import { FortmaticConnector } from './Fortmatic';
import {NetworkConnector} from './NetworkConnector';
import {ChainId} from "@uniswap/sdk";
import {RPC_URLS} from "../constants/rpc";

// const FORMATIC_KEY = process.env.REACT_APP_FORTMATIC_KEY
// const PORTIS_ID = process.env.REACT_APP_PORTIS_ID

export const DEFAULT_CHAIN_ID: ChainId = parseInt(process.env.REACT_APP_DEFAULT_CHAIN_ID ?? '1');

if (RPC_URLS[DEFAULT_CHAIN_ID] === "") {
  throw new Error(`RPC must be defined for DEFAULT_CHAIN_ID=` + DEFAULT_CHAIN_ID);
}

export const network = new NetworkConnector({
  urls: RPC_URLS,
  defaultChainId: DEFAULT_CHAIN_ID
});

let networkLibrary: Web3Provider | undefined;
export function getNetworkLibrary(): Web3Provider {
  return (networkLibrary = networkLibrary ?? new Web3Provider(network.provider as any));
}

export const injected = new InjectedConnector({
  supportedChainIds: [ChainId.BITGERT, ChainId.DOGE, ChainId.DOKEN, ChainId.FUSE],
});

// Bitgert only
export const walletconnect = new WalletConnectConnector({
  rpc: {[ChainId.BITGERT]: RPC_URLS[ChainId.BITGERT]},
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: 15000,
});

// mainnet only
// export const fortmatic = new FortmaticConnector({
//   apiKey: FORMATIC_KEY ?? '',
//   chainId: 1
// })

// mainnet only
// export const portis = new PortisConnector({
//   dAppId: PORTIS_ID ?? '',
//   networks: [1]
// })

// mainnet only
export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[DEFAULT_CHAIN_ID],
  appName: 'IcecreamSwap',
  // appLogoUrl: '',
});
