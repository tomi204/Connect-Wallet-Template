import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return;
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider
      modalSize="compact"
      theme={darkTheme({
        ...darkTheme.accentColors.green,
      })}
      chains={chains}
    ></RainbowKitProvider>
  </WagmiConfig>;
}

export default MyApp;
