import React from "react";
import styles from "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";

export const index = () => {
  const { chains, provider } = configureChains(
    [chain.mainnet, chain.polygon, chain.goerli, chain.arbitrum],
    [
      infuraProvider({
        apiKey: process.env.REACT_APP_WEB3APIKEY,
        stallTimeout: 1_000,
      }),

      publicProvider(),
    ]
  );
  const { connectors } = getDefaultWallets({
    appName: "Web3 Ecommerce",
    chains,
  });
  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });
  return (
    <div>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          modalSize="compact"
          theme={darkTheme({
            ...darkTheme.accentColors.green,
          })}
          chains={chains}
        ></RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
};
