import { Contract } from 'ethers';
import { getAddress } from 'ethers';
import { ZeroAddress } from 'ethers';
import { JsonRpcSigner, BrowserProvider } from 'ethers';
import { ChainId, JSBI, Percent, Token, CurrencyAmount, Currency, ETHER } from '@uniswap/sdk';
import { TokenAddressMap } from '../state/lists/hooks';

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value: any): string | false {
  try {
    return getAddress(value);
  } catch {
    return false;
  }
}

const ETHERSCAN_PREFIXES: { [chainId in ChainId]: string } = {
  1: 'etherscan.io',
  3: 'ropsten.etherscan.io',
  4: 'rinkeby.etherscan.io',
  5: 'goerli.etherscan.io',
  42: 'kovan.etherscan.io',
  32520: 'brisescan.com',
  2000: "explorer.dogechain.dog",
  61916: "explorer.doken.dev",
  122: "explorer.fuse.io",
  9000: "quaiscan.io"
};

export function getEtherscanLink(
  chainId: ChainId,
  data: string,
  type: 'transaction' | 'token' | 'address' | 'block'
): string {
  const prefix = `https://${ETHERSCAN_PREFIXES[chainId] || ETHERSCAN_PREFIXES[1]}`;

  switch (type) {
    case 'transaction': {
      return `${prefix}/tx/${data}`;
    }
    case 'token': {
      return `${prefix}/token/${data}`;
    }
    case 'block': {
      return `${prefix}/block/${data}`;
    }
    case 'address':
    default: {
      return `${prefix}/address/${data}`;
    }
  }
}

// shorten the checksummed version of the input address to have 0x + 4 characters at start and end
export function shortenAddress(address: string, chars = 4): string {
  const parsed = isAddress(address);
  if (!parsed) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
  return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`;
}

// add 10%
export function calculateGasMargin(value: bigint): bigint {
  return value * (10000n + 1000n) / 10000n;
}

// converts a basis points value to a sdk percent
export function basisPointsToPercent(num: number): Percent {
  return new Percent(JSBI.BigInt(num), JSBI.BigInt(10000));
}

export function calculateSlippageAmount(value: CurrencyAmount, slippage: number): [JSBI, JSBI] {
  if (slippage < 0 || slippage > 10000) {
    throw Error(`Unexpected slippage value: ${slippage}`);
  }
  return [
    JSBI.divide(JSBI.multiply(value.raw, JSBI.BigInt(10000 - slippage)), JSBI.BigInt(10000)),
    JSBI.divide(JSBI.multiply(value.raw, JSBI.BigInt(10000 + slippage)), JSBI.BigInt(10000)),
  ];
}

// account is not optional
export function getSigner(library: BrowserProvider, account: string): Promise<JsonRpcSigner> {
  // Wrap the asynchronous call inside a synchronous function
  return library.getSigner(account);
}

// account is optional
export function getProviderOrSigner(library: BrowserProvider, account?: string): Promise<BrowserProvider | JsonRpcSigner> {
  return account ? getSigner(library, account) : Promise.resolve(library);
}

// account is optional
export async function getContract(address: string, ABI: any, library: BrowserProvider, account?: string): Promise<Contract> {
  if (!isAddress(address) || address === ZeroAddress) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }

  return new Contract(address, ABI, await getProviderOrSigner(library, account));
}

export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

export function isTokenOnList(defaultTokens: TokenAddressMap, currency?: Currency): boolean {
  if (currency === ETHER) return true;
  return Boolean(currency instanceof Token && defaultTokens[currency.chainId]?.[currency.address]);
}
