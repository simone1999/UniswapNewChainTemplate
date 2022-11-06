import {ChainId} from "@uniswap/sdk";


export const RPC_URLS: { [chainId in ChainId]: string } = {
    [ChainId.MAINNET]: "https://rpc.ankr.com/eth",
    [ChainId.ROPSTEN]: "https://rpc.ankr.com/eth_ropsten",
    [ChainId.RINKEBY]: "https://rpc.ankr.com/eth_rinkeby",
    [ChainId.GÖRLI]: "https://rpc.ankr.com/eth_goerli",
    [ChainId.KOVAN]: "http://kovan.poa.network:8545",
    [ChainId.BITGERT]: "https://rpc.icecreamswap.com",
    [ChainId.DOGE]: "https://rpc.dogechain.dog",
    [ChainId.DOKEN]: "https://nyrpc.doken.dev ",
    [ChainId.FUSE]: "https://rpc.fuse.io",
}