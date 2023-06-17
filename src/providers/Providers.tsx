'use client';
import React from "react";
import { ThirdwebProvider, metamaskWallet, walletConnect } from "@thirdweb-dev/react";
import { Ethereum, Polygon } from "@thirdweb-dev/chains";


const metamaskConfig = metamaskWallet();
const walletConnectConfig = walletConnect();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider activeChain={Ethereum} supportedChains={[Ethereum, Polygon]} supportedWallets={[metamaskWallet(), walletConnect()]}>
      {children}
    </ThirdwebProvider>
  )
}