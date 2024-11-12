import {BrowserProvider} from 'ethers';

export default function getLibrary(provider: any): BrowserProvider {
  // library.pollingInterval = 15000;
  return new BrowserProvider(provider, 'any');
}
