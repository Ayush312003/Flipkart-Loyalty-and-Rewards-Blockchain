import type { NextPage } from 'next';
import Head from 'next/head';

let  nfts = [
    {},{},{}
];


const Home: NextPage = () => {
	return (
    <div className="flex justify-center">



      <div className="px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {
            nfts.map((nft, i) => (
              <div key={i} className="border shadow rounded-xl overflow-hidden">
                <div className="p-4">
                  <p style={{ height: '0px' }} className="text-2xl font-semibold">{nft.description}</p>
                  <div style={{ height: '20px', overflow: 'hidden' }}>
                  </div>
                </div>
                <div className="p-4">
                  <p style={{ height: '0px' }} className="text-2xl font-semibold">{nft.eventType}</p>
                  <div style={{ height: '20px', overflow: 'hidden' }}>
                  </div>
                </div>
                <div className="p-4">
                  <p style={{ height: '0px' }} className="text-2xl font-semibold">{nft.stadium}</p>
                  <div style={{ height: '20px', overflow: 'hidden' }}>
                  </div>
                </div>
                <div className="p-4 bg-black">
                  <p className="text-2xl mb-4 font-bold text-white">{nft.price} ETH</p>
                  <button className="w-full bg-green-500 text-white font-bold py-2 px-12 rounded" onClick={() => buyNft(nft)}>Buy</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      
    </div>
	);
};

export default Home;
