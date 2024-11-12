import { createWeb3ReactRoot } from '@web3-react/core';
import { NetworkContextName } from 'swapConstants';

declare global {
  // eslint-disable-next-line no-var
  var __WEB3_PROVIDER_NETWORK__: ReturnType<typeof createWeb3ReactRoot> | undefined;
}

// Initialize the Web3ProviderNetwork only once
const getOrCreateWeb3ProviderNetwork = () => {
  if (!global.__WEB3_PROVIDER_NETWORK__) {
    global.__WEB3_PROVIDER_NETWORK__ = createWeb3ReactRoot(NetworkContextName);
  }
  return global.__WEB3_PROVIDER_NETWORK__;
};

const Web3ProviderNetwork = getOrCreateWeb3ProviderNetwork();

export default Web3ProviderNetwork;