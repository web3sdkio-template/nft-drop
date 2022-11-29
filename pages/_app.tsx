import type { AppProps } from "next/app";
import { ChainId, Web3sdkioProvider } from "@web3sdkio/react";
import "../styles/globals.css";
import Head from "next/head";
import Web3sdkioGuideFooter from "../components/GitHubLink";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3sdkioProvider desiredChainId={activeChainId}>
      <Head>
        <title>web3sdkio NFT Drop Minting Customizable Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn How To Use Web3sdkio's NFT Drop contract and create a customizable NFT Drop minting page"
        />
        <meta
          name="keywords"
          content="Web3sdkio, web3sdkio NFT drop, how to make web3sdkio nft drop, how to make nft collection web3sdkio"
        />
      </Head>
      <Component {...pageProps} />
      <Web3sdkioGuideFooter />
    </Web3sdkioProvider>
  );
}

export default MyApp;
