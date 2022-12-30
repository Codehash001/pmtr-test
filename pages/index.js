import { Rerousel } from 'rerousel';
import { useState, useEffect, useRef } from "react";
import Autoplay from '../components/Carousel';


function home () {



  return (
    <div className="min-h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      <img src="/background.png" className="object-over w-full h-full absolute"/>

      <div className='relative flex flex-col items-center justify-center'>
      <div className=" bg-black/75 filter py-4 rounded-md px-2 md:px-10 flex flex-col items-center
    bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-2 border-gray-100 backdrop-saturate-150">
        <div className="flex flex-col items-center">
          <h1 className="font-Kanit text-[35px] text-white uppercase">Minting is Live!</h1>
          <h1 className='font-Kanit text-[25px] text-gray-400 mt-0'>Not Connected</h1>
          <div className="flex flex-col items-center w-full px-4 mt-16 md:mt-5">
            {/* Increment decrement buttons */}
                <div className="font-Kanit flex items-center justify-between w-full">
                  <button
                    className="w-12 h-8 md:w-14 md:h-10 flex items-center justify-center text-black hover:shadow-lg bg-gray-300 font-bold rounded-md"
                    onClick=''>
                   
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 md:h-8 md:w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                  <p className="flex items-center justify-center flex-1 grow text-center font-bold text-brand-02 text-3xl md:text-4xl">
                  {/* {mintAmount} */}
                  </p>
                  <button
                    className="w-12 h-8 md:w-14 md:h-10 flex items-center justify-center text-black hover:shadow-lg bg-gray-300 font-bold rounded-md"
                    onClick='' >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 md:h-8 md:w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 12H6"
                      />
                    </svg>
                  </button> 
                </div>  
                <p className="text-sm text-gray-100 tracking-widest mt-5">
                  Max Mint Amount Per Wallet: 10
                  {/* {paused ? '0' : isWlMint ? config.WlMaxMintAmount : config.maxMintAmount} */}
                </p>

                <div className="border-t border-b py-4 mt-5 w-full">
                  <div className="w-full text-xl font-Kanit flex items-center justify-between text-yellow-300">
                    <p>Total</p>

                    <div className="flex items-center space-x-3">
                    <p>
                        {/* {Number.parseFloat(paused ? '0.00' : isWlMint && EligbleForFreeMint ? config.wlcost*(mintAmount-1) : isWlMint ? config.wlcost*mintAmount : config.publicSalePrice*mintAmount).toFixed(
                          2
                        )}{' '} */}
                        0.001{' '}ETH
                      </p>{' '}
                      <span className="text-yellow-300">+ GAS</span>
                    </div>


                  </div>
                </div>

                
                    {/* mint button */}

                    <a href="/" class="relative mt-5 px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group font-Kanit">
<span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
<span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
<span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
<span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
<span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
<span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Connect Wallet</span>
</a>

{/* social media icons */}
<div className="flex w-full items-center justify-between mt-5">
  <div className="bg-white rounded-full mx-2">
    <img src='discord.svg' className='h-8 w-8 m-1'/>
  </div>
  <div className="bg-white rounded-full mx-2">
    <img src='facebook.svg' className='h-8 w-8 m-1'/>
  </div>
  <div className="bg-white rounded-full mx-2">
    <img src='twitter.svg' className='h-8 w-8 m-1'/>
  </div>
</div>

<h1 className="font-Kanit font-semibold text-white text-[20px]">Contract address :{' '}<span className="text-blue-400 cursor-pointer">Ox12345678ABCDE123 </span></h1>

                </div>
        </div>
      </div>

      <div className='flex w-full items-center justify-between mt-4'>
          <div className="mx-2">
            <img src='1.png' className="w-[100px] h-[100px] rounded-md"/>
          </div>
          <div className="mx-2">
            <img src='2.png' className="w-[100px] h-[100px] rounded-md"/>
          </div>
          <div className="mx-2">
            <img src='3.png' className="w-[100px] h-[100px] rounded-md"/>
          </div>
          <div className="mx-2">
            <img src='4.png' className="w-[100px] h-[100px] rounded-md"/>
          </div>
          <div className="mx-2">
            <img src='5.png' className="w-[100px] h-[100px] rounded-md"/>
          </div>
          <div className="mx-2">
            <img src='1.png' className="w-[100px] h-[100px] rounded-md"/>
          </div>
          <div className="mx-2">
            <img src='2.png' className="w-[100px] h-[100px] rounded-md"/>
          </div>
          <div className="mx-2">
            <img src='3.png' className="w-[100px] h-[100px] rounded-md"/>
          </div>
          <div className="mx-2">
            <img src='4.png' className="w-[100px] h-[100px] rounded-md"/>
          </div>
          <div className="mx-2">
            <img src='5.png' className="w-[100px] h-[100px] rounded-md"/>
          </div>
      </div>
      </div>

    </div>
  )
}

export default home

//<div className='min-h-screen h-full w-full overflow-hidden flex flex-col items-center justify-center bg-brand-background'>

//<div className="md:max-w-3xl w-full bg-black/75 filter  py-4 rounded-md px-2 md:px-10 flex flex-col items-center
//bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-2 border-gray-100 backdrop-saturate-150">