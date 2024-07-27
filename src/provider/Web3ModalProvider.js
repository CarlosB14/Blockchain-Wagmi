import { createWeb3Modal } from '@web3modal/wagmi/react';
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { WagmiProvider } from 'wagmi';
import { polygon, mainnet, polygonMumbai } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Your WalletConnect Cloud project ID
const projectId = process.env.REACT_APP_PROJECT_ID;

// 2. Create wagmiConfig
const metadata = {
  name: 'web3modal',
  description: 'AppKit Example',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

const chains = [mainnet, polygon, polygonMumbai];
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
});

export function Web3ModalProvider({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
