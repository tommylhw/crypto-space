'use client';
import React, { useState, useEffect } from 'react';
import { ConnectWallet } from "@thirdweb-dev/react";
import { useConnect, metamaskWallet } from '@thirdweb-dev/react';
import { useConnectionStatus } from "@thirdweb-dev/react";


const metamaskConfig = metamaskWallet();

const ConnectWalletBtn = () => {

  const connectionStatus = useConnectionStatus();

  const connect = useConnect();

  const handleConnect = async () => {
    console.log('handleConnect');
    await connect(metamaskConfig);
  }

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // const connected = await sdk.wallet.IsConnected();
    if (connectionStatus == "connected") {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }

    console.log(connectionStatus);
    // console.log(isConnected);
  }, [connectionStatus]);

  return (
    <ConnectWallet
        btnTitle="Connect Wallet"
        modalTitle="Choose your wallet"
        theme='light'
        // style={{
        //   // backgroundColor: connectionStatus == "connected" ? '' : '#5D87FF',
        //   borderRadius: '5px',
        //   // height: connectionStatus == "connected" ? '' : '40px',
        //   // width: '100%',
        //   padding: '5px 20px',
        //   fontSize: '13px',
        // }}
        style={{
          backgroundColor: '#ebebeb',
          color: '#1F2937',
        }}
      />
  )
}

export default ConnectWalletBtn;