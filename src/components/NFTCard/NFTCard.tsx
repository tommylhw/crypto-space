import React from 'react'

const NFTCard = (props: any) => {
  return (
    <div className="card card-compact bg-base-100  w-[30%] min-w-[300px] max-w-[500px] m-[10px] shadow-xl hover:shadow-2xl transition-all	">
      <figure className='flex justify-center items-center hidden h-[250px]'>
        <img src={props.nftImage} alt="nft-image"  className='object-cover min-h-[100%]' />
      </figure>
      <div className="card-body flex flex-col justify-between">
        <h2 className="card-title">{props.nftName}</h2>
        {/* <p>{props.nftDescription}</p> */}

        <div className="card-actions justify-start">
          {
            props.nftAttributes.map((attribute: any, index: number) => (
              <div className="badge badge-outline" key={index}>{attribute.value}</div>
            ))
          }
          {/* <div className="badge badge-outline">Fashion</div> 
          <div className="badge badge-outline">Products</div> */}
        </div>
        <div className="card-actions justify-end">
          
          <button className="btn">Details</button>
        </div>
      </div>
    </div>
  )
}

export default NFTCard;