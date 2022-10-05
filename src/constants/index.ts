import {ChainId, JSBI, Percent, Token, WETH} from '@uniswap/sdk';
import { AbstractConnector } from '@web3-react/abstract-connector';
import {
  // fortmatic,
  injected,
  // portis,
  walletconnect,
  walletlink,
} from '../connectors';

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
export const FACTORY_ADDRESS = '0x9E6d21E759A7A288b80eef94E4737D313D31c13f';
export const ROUTER_ADDRESS = '0xBb5e1777A331ED93E07cF043363e48d320eb96c4';

export const LP_TOKEN_NAME = 'icecreamswap.com LP';
export const LP_TOKEN_SYMBOL = 'ICELP';

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[];
};

// ETH tokens
export const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin');
export const USDC = new Token(ChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD//C');
export const USDT = new Token(ChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD');
export const COMP = new Token(ChainId.MAINNET, '0xc00e94Cb662C3520282E6f5717214004A7f26888', 18, 'COMP', 'Compound');
export const MKR = new Token(ChainId.MAINNET, '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2', 18, 'MKR', 'Maker');
export const AMPL = new Token(ChainId.MAINNET, '0xD46bA6D942050d489DBd938a2C909A5d5039A161', 9, 'AMPL', 'Ampleforth');
export const WBTC = new Token(ChainId.MAINNET, '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', 8, 'WBTC', 'Wrapped BTC');

// custom tokens
export const SPHYNX = new Token(ChainId.BITGERT, '0x0e11DCE06eF2FeD6f78CEF5144F970E1184b4298', 18, 'SPHYNX', 'Sphynx BRISE');
export const BPAD = new Token(ChainId.BITGERT, '0x71946a5C9dA7C95ee804a9BE561EC15A3F286A7D', 8, 'BPAD', 'Brisepad');
export const BROGE = new Token(ChainId.BITGERT, '0x41c5ae56681Fb19334eCF7d914919805DaE2Ec8f', 18, 'BROGE', 'BROGE');
export const BRZILLA = new Token(ChainId.BITGERT, '0x9b8535Dd9281e48484725bC9Eb6Ed2f66CEA2a36', 18, 'BRZILLA', 'BriseZilla');
export const BTXT = new Token(ChainId.BITGERT, '0x1A8a039007186d7640C1D7Cd7c2606e333D04e03', 18, 'BTXT', 'BitsXT');
export const ELTG = new Token(ChainId.BITGERT, '0xb860eCD8400600c13342a751408737235E177077', 9, 'ELTG', 'Graphen');
export const EVO = new Token(ChainId.BITGERT, '0x267Ae4bA9CE5ef3c87629812596b0D89EcBD81dD', 18, 'EVO', 'EVO');
export const MAP = new Token(ChainId.BITGERT, '0x6D347fdCb302a5879545E01EceE7A176db23dCDa', 2, 'MAP', '4D Twin Maps');
export const Miidas = new Token(ChainId.BITGERT, '0x5B534A2Df329195Fd7e5c9AcA1D9ffbdA14A4963', 6, 'Miidas', 'Miidas NFT');
export const MIR = new Token(ChainId.BITGERT, '0x2468dad471fA7E03d8029F057cc41742F017D53d', 18, 'MIR', 'Mix Reality');
export const NUMI = new Token(ChainId.BITGERT, '0x6718e47e74497d1564EE76d832309144b83Ef8E8', 18, 'NUMI', 'Numitor');
export const OMNIA = new Token(ChainId.BITGERT, '0x5d4685c2C75581C67b9D6292A065a767bC214681', 8, 'OMNIA', 'OmniaVerse');
export const PRDS = new Token(ChainId.BITGERT, '0x31226B28add9062c5064a9Bd35eA155F323C6ca6', 9, 'PRDS', 'Brise Paradise');
export const RLUNA = new Token(ChainId.BITGERT, '0x6660A7AF57fAE695D4a10D645088aBA9fb547728', 18, 'RLUNA', 'Rise Luna');
export const VEF = new Token(ChainId.BITGERT, '0xD6447d2fA919811c41a064bDbdaB1E281F8de9B2', 18, 'VEF', 'Vefi Ecosystem Token');
export const WMF = new Token(ChainId.BITGERT, '0xc89fcd3E1CF5A355fc41E160d18BAC5f624610D4', 18, 'WMF', 'Whale Maker Fund');
export const YOGO = new Token(ChainId.BITGERT, '0xB361D5953e21Cfde5CD62B89FDf40bc21903A6bb', 18, 'YOGO', 'YOGO Token');
export const YPC = new Token(ChainId.BITGERT, '0x11203a00a9134Db8586381C4B2fca0816476b3FD', 18, 'YPC', 'Young Parrot');
export const ICE = new Token(ChainId.BITGERT, '0xB999Ea90607a826A3E6E6646B404c3C7d11fa39D', 18, 'ICE', 'IceCream');
export const TOKYO = new Token(ChainId.BITGERT, '0x38EA4741d100cAe9700f66B194777F31919142Ee', 9, '$Tokyo', 'Metaverse City Tokyo');
export const BITGERT_USDC = new Token(ChainId.BITGERT, '0xcf2DF9377A4e3C10e9EA29fDB8879d74C27FCDE7', 18, 'USDC', 'USD Coin');
export const BITGERT_USDT = new Token(ChainId.BITGERT, '0xDe14b85cf78F2ADd2E867FEE40575437D5f10c06', 18, 'USDT', 'Tether USD');
export const WOLF = new Token(ChainId.BITGERT, '0x4Fb3DBF9111169ff60fFB8a7be1c6Fd3D4E417bC', 19, 'WOLF', 'Alpha Trades');
export const BITGERT_ABR = new Token(ChainId.BITGERT, '0x9F7Bb6E8386ac9ad5e944d66fBa80F3F7231FA94', 9, 'ABR', 'AIBRA');
export const BITGERT_BASKOM = new Token(ChainId.BITGERT, '0x6cd08bE8Aa9B705Ca86B4923B1784C0eE06E5220', 9, 'BASKOM', 'Brisecom');
export const BITGERT_LUNG = new Token(ChainId.BITGERT, '0xc3b730dD10A7e9A69204bDf6cb5A426e4f1F09E3', 18, 'LUNG', 'LunaGens');
export const BITGERT_USDTI = new Token(ChainId.BITGERT, '0xC7E6d7E08A89209F02af47965337714153c529F0', 18, 'USDTi', 'Tether USD IceCream');
export const BITGERT_3DC = new Token(ChainId.BITGERT, '0x5feDA75eaB27814Cba0694C9711F7d4abEa5b0b5', 8, '$3DC', '3D City');
export const DARRIVAL = new Token(ChainId.BITGERT, '0xeB18A16A08530b811523fA49310319809ac4c979', 9, 'DRV', 'Darrival');
export const BITGERT_ETHERI = new Token(ChainId.BITGERT, '0xeA61Dc96F105469522d39cBF7bD59b42393678F7', 18, 'ETHi', 'Ether');
export const BITGERT_DOGECOINI = new Token(ChainId.BITGERT, '0x46a8E16dB8Bb241618873bCA21Ef02F120EA4125', 18, 'DOGEi', 'Dogecoin');
export const BITGERT_BNBI = new Token(ChainId.BITGERT, '0x74446a7418BFbFCDe3F1f6bCaFFA097d050a6dD8', 18, 'BNBi', 'BNB');
export const BITGERT_SHIBAI = new Token(ChainId.BITGERT, '0xADF3051f6fbC1f42ee20B2eDb47EA7f6CcaBe978', 18, 'SHIBi', 'Shiba Inu');
export const BITGERT_DAII = new Token(ChainId.BITGERT, '0x71Ef0A490E53Cc177F640169b0347Be4d0f23cc9', 18, 'DAIi', 'DAI');
export const BITGERT_USDCI = new Token(ChainId.BITGERT, '0xaEdD3Ff7b9Fc5fc4e44d140b80f0B1C7FdB6102c', 18, 'USDCi', 'USD Coin');
export const BITGERT_BUSDI = new Token(ChainId.BITGERT, '0xd0CE781960c6356A7175988751bfC8d7cd28EA60', 18, 'BUSDi', 'BUSD');

export const DOGE_ICE = new Token(ChainId.DOGE, '0x81bCEa03678D1CEF4830942227720D542Aa15817', 18, 'ICE', 'IceCream');

export const DOKEN_ICE = new Token(ChainId.DOKEN, '0x54051D9DbE99687867090d95fe15C3D3E35512Ba', 18, 'ICE', 'IceCream');
export const DOKEN_USDT = new Token(ChainId.DOKEN, '0x8e6dAa037b7F130020b30562f1E2a5D02233E6c5', 18, 'USDT', 'Tether USD');


// Block time here is slightly higher (~1s) than average in order to avoid ongoing proposals past the displayed time
export const AVERAGE_BLOCK_TIME_IN_SECS = 13;
export const PROPOSAL_LENGTH_IN_BLOCKS = 40_320;
export const PROPOSAL_LENGTH_IN_SECS = AVERAGE_BLOCK_TIME_IN_SECS * PROPOSAL_LENGTH_IN_BLOCKS;
export const TIMELOCK_ADDRESS = '0x1a9C8182C09F50C8318d769245beA52c32BE35BC';

export const COMMON_CONTRACT_NAMES: { [address: string]: string } = {
  [TIMELOCK_ADDRESS]: 'Timelock',
};

const WETH_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WETH[ChainId.MAINNET]],
  [ChainId.ROPSTEN]: [WETH[ChainId.ROPSTEN]],
  [ChainId.RINKEBY]: [WETH[ChainId.RINKEBY]],
  [ChainId.GÖRLI]: [WETH[ChainId.GÖRLI]],
  [ChainId.KOVAN]: [WETH[ChainId.KOVAN]],
  [ChainId.BITGERT]: [WETH[ChainId.BITGERT]],
  [ChainId.DOGE]: [WETH[ChainId.DOGE]],
  [ChainId.DOKEN]: [WETH[ChainId.DOKEN]],
};

export const ETH_NAME_AND_SYMBOL = {
  [ChainId.MAINNET]: {"name": "Ether", "symbol": "ETH"},
  [ChainId.ROPSTEN]: {"name": "Ether", "symbol": "ETH"},
  [ChainId.RINKEBY]: {"name": "Ether", "symbol": "ETH"},
  [ChainId.GÖRLI]: {"name": "Ether", "symbol": "ETH"},
  [ChainId.KOVAN]: {"name": "Ether", "symbol": "ETH"},
  [ChainId.BITGERT]: {"name": "Brise", "symbol": "BRISE"},
  [ChainId.DOGE]: {"name": "Dogecoin", "symbol": "DOGE"},
  [ChainId.DOKEN]: {"name": "DoKEN", "symbol": "DKN"},
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, USDC, USDT, COMP, MKR, WBTC],
  [ChainId.BITGERT]: [...WETH_ONLY[ChainId.BITGERT], BITGERT_USDC, BITGERT_USDCI, BITGERT_USDT, BITGERT_USDTI, ICE, BITGERT_DAII],
  [ChainId.DOGE]: [...WETH_ONLY[ChainId.DOGE], DOGE_ICE],
  [ChainId.DOKEN]: [...WETH_ONLY[ChainId.DOKEN], DOKEN_ICE, DOKEN_USDT],
};

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {
    [AMPL.address]: [DAI, WETH[ChainId.MAINNET]],
  },
};

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, USDC, USDT, WBTC],
  [ChainId.BITGERT]: [...WETH_ONLY[ChainId.BITGERT], ICE, BITGERT_USDTI],
  [ChainId.DOGE]: [...WETH_ONLY[ChainId.DOGE], DOGE_ICE],
  [ChainId.DOKEN]: [...WETH_ONLY[ChainId.DOKEN], DOKEN_ICE]
};

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, USDC, USDT, WBTC],
  [ChainId.ROPSTEN]: [...WETH_ONLY[ChainId.ROPSTEN]],
  [ChainId.RINKEBY]: [...WETH_ONLY[ChainId.RINKEBY]],
  [ChainId.GÖRLI]: [...WETH_ONLY[ChainId.GÖRLI]],
  [ChainId.KOVAN]: [...WETH_ONLY[ChainId.KOVAN]],
  [ChainId.BITGERT]: [...WETH_ONLY[ChainId.BITGERT], SPHYNX, BPAD, BROGE, BRZILLA, BTXT, ELTG, EVO, MAP, Miidas, MIR, NUMI, OMNIA, PRDS, RLUNA, VEF, WMF, YOGO, YPC, ICE, TOKYO, BITGERT_USDC, BITGERT_USDT, WOLF, BITGERT_USDTI, BITGERT_3DC, DARRIVAL, BITGERT_ETHERI, BITGERT_DOGECOINI, BITGERT_BNBI, BITGERT_SHIBAI, BITGERT_DAII, BITGERT_USDCI, BITGERT_BUSDI, BITGERT_BASKOM, BITGERT_ABR, BITGERT_LUNG],
  [ChainId.DOGE]: [...WETH_ONLY[ChainId.DOGE], DOGE_ICE],
  [ChainId.DOKEN]: [...WETH_ONLY[ChainId.DOKEN], DOKEN_ICE, DOKEN_USDT],
};

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [
      new Token(ChainId.MAINNET, '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643', 8, 'cDAI', 'Compound Dai'),
      new Token(ChainId.MAINNET, '0x39AA39c021dfbaE8faC545936693aC917d5E7563', 8, 'cUSDC', 'Compound USD Coin'),
    ],
    [USDC, USDT],
    [DAI, USDT],
  ],
  [ChainId.BITGERT]: [
      [WETH[ChainId.BITGERT], ICE],
  ],
  [ChainId.DOGE]: [
    [WETH[ChainId.DOGE], DOGE_ICE],
  ],
  [ChainId.DOKEN]: [
    [WETH[ChainId.DOKEN], DOKEN_ICE],
  ]
};

export interface WalletInfo {
  connector?: AbstractConnector;
  name: string;
  iconName: string;
  description: string;
  href: string | null;
  color: string;
  primary?: true;
  mobile?: true;
  mobileOnly?: true;
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'arrow-right.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true,
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D',
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: 'WalletConnect',
    iconName: 'walletConnectIcon.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true,
  },
  WALLET_LINK: {
    connector: walletlink,
    name: 'Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Use Coinbase Wallet app on mobile device',
    href: null,
    color: '#315CF5',
  },
  // COINBASE_LINK: {
  //   name: 'Open in Coinbase Wallet',
  //   iconName: 'coinbaseWalletIcon.svg',
  //   description: 'Open in Coinbase Wallet app.',
  //   href: 'https://go.cb-w.com/mtUDhEZPy1',
  //   color: '#315CF5',
  //   mobile: true,
  //   mobileOnly: true
  // },
  // FORTMATIC: {
  //   connector: fortmatic,
  //   name: 'Fortmatic',
  //   iconName: 'fortmaticIcon.png',
  //   description: 'Login using Fortmatic hosted wallet',
  //   href: null,
  //   color: '#6748FF',
  //   mobile: true,
  // },
  // Portis: {
  //   connector: portis,
  //   name: 'Portis',
  //   iconName: 'portisIcon.png',
  //   description: 'Login using Portis hosted wallet',
  //   href: null,
  //   color: '#4A6C9B',
  //   mobile: true,
  // },
};

export const NetworkContextName = 'NETWORK';
// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50;
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20;
// used for rewards deadlines
export const BIG_INT_SECONDS_IN_WEEK = JSBI.BigInt(60 * 60 * 24 * 7);
export const BIG_INT_ZERO = JSBI.BigInt(0);
// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000));
export const BIPS_BASE = JSBI.BigInt(10000);
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE); // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE); // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE); // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE); // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE); // 15%
// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)); // .01 ETH
export const BETTER_TRADE_LESS_HOPS_THRESHOLD = new Percent(JSBI.BigInt(50), JSBI.BigInt(10000));
export const ZERO_PERCENT = new Percent('0');
export const ONE_HUNDRED_PERCENT = new Percent('1');
