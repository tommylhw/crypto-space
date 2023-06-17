'use client'
import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import styles from './Home.module.css'
import { useMediaQuery } from 'react-responsive'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';


import MetaMaskSDK from '@metamask/sdk';
import { useConnectionStatus, useAddress } from "@thirdweb-dev/react";

// Components
import ConnectWalletBtn from '@/components/ConnectWalletBtn/ConnectWalletBtn';
import NFTCard from '@/components/NFTCard/NFTCard';
import LoadingSkeleton from '@/components/LoadingSkeleton/LoadingSkeleton';


const MMSDK = new MetaMaskSDK();
const ethereum: any = MMSDK.getProvider(); // You can also access via window.ethereum

interface NFTData {
  items: any[];
}

// export const getServerSideProps: GetServerSideProps<{nftData: NFTData}> = async () => {
//   const connectionStatus = useConnectionStatus();
//   const walletAddress = useAddress();

//   const account = await ethereum.request({ method: 'eth_requestAccounts' });

//   const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner?owner=ETHEREUM:${account[0]}`);

//   const data = await response.json();

//   return { props: { nftData: data } }


// }

// const getNFTData = async () => {

//   const account = await ethereum.request({ method: 'eth_requestAccounts' });

//   const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner?owner=ETHEREUM:${account[0]}`);

//   const data = await response.json();
//   console.log(data);

//   return { props: { nftData: data } }
// }

const Home = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 520px)' });

  const connectionStatus = useConnectionStatus();
  const walletAddress = useAddress();

  const [itemsList, setItemsList] = useState([]);
  const [nftData, setNftData] = useState();

  const [isLoading, setIsLoading] = useState(true);

  // const fetchNFTData = async () => {
  //   return await getNFTData();
  // }

  // const getData = await getNFTData();

  const getItemsByOwner = async () => {
    setIsLoading(true);
    if (connectionStatus == "connected") {
      console.log('connected');
      const account = await ethereum.request({ method: 'eth_requestAccounts' });

      const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner?owner=ETHEREUM:${account[0]}`).then((res) => res.json()).then((data) => {
        console.log(data);
        setNftData(data);
        setItemsList(data.items);

      });
      await new Promise(resolve => setTimeout(resolve, 2000)); // wait for seconds
      setIsLoading(false);

      // const data = await response.json();

      // console.log(data);
      // setNftData(data);

      // setItemsList(data.items);
      // return data;

    } else {
      console.log('Please connect wallet first');
    }
  }

  useEffect(() => {
    getItemsByOwner();
  }, [connectionStatus]);

  return (
    <main className={styles.mainContainer}>
      <div className='flex items-center'>
        <ConnectWalletBtn />
        <button className='btn flex-1 mx-3' onClick={getItemsByOwner}>
          Fetch Data
        </button>
      </div>

      {/* {
        getData.props.nftData.items.map((item: any, id: number) => (
          <div>{item.meta.name}</div>
        ))
      } */}

      {isLoading ? <div>Loading...</div> : (
        <div className={styles.cardContainer}>
          {
            itemsList.map((item: any, index) => (

              // <div className={styles.card}>
              <NFTCard
                key={index}
                nftName={item.meta.name}
                nftDescription={item.meta.description}
                nftAttributes={item.meta.attributes}
                nftImage={item.meta.content[0].url}
              />
              // </div>
            ))
          }
        </div>
      )}


      {/* {JSON.stringify(nftData)} */}


      {/* <NFTCard /> */}

      <LoadingSkeleton />

    </main>
  )
}

export default Home;


{/* <div>{JSON.stringify(item.meta.content)}</div> */ }


{/* {item.meta.attributes.map((attribute: any, id: number) => (
                <table className="table" key={id}>
                  <tr>
                    <td>{id}</td>
                    <td>{attribute.key}</td>
                  </tr>
                </table>

              ))}

              {
                JSON.stringify(item.meta.attributes)
              } */}