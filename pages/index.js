import { useState, useEffect, } from "react";
import { initOnboard } from "../ulits/onboard";
import { config } from "../dapp.config";
import {  getTotalMinted,
          getMaxSupply,
          getNumberMinted,
          isAirdropState,
          isPausedState,
          isPublicSaleState,
          isWlMintState,
          wlMint,
          publicMint,
          airdrop, 
          getMaxperWallet
                          } from "../ulits/interact";


export default function Home () {

  const [maxSupply, setMaxSupply] = useState(0)
  const [totalMinted, setTotalMinted] = useState(0)
  const [NumberMinted, setNumberMinted] = useState(0)
  const [maxMintAmount, setMaxMintAmount] = useState(0)

  const [paused, setPaused] = useState(false)
  const [isPublicSale, setIsPublicSale] = useState(false)
  const [isWLMint, setIsWlMint] = useState(false)
  const [isAirdroping, setIsAirdroping] = useState(false)

  const [status, setStatus] = useState(null)
  const [mintAmount, setMintAmount] = useState(1)
  const [isMinting, setIsMinting] = useState(false)
  const [onboard, setOnboard] = useState(null)
  const [walletAddress, setWalletAddress] = useState('')

  const [cost, setCost] = useState(0)


  useEffect(() => {
    const init = async () => {
      setMaxSupply(await getMaxSupply())

      setTotalMinted(await getTotalMinted())
      setNumberMinted (await getNumberMinted())

      setPaused(await isPausedState())
      setIsPublicSale(await isPublicSaleState())
      const isWlMint = await isWlMintState()
      setIsWlMint(isWlMint)
      setIsAirdroping(await isAirdropState())

      // Global BigInt
  
      setMaxMintAmount(
        isAirdroping? config.maxPerWalletAirdrop : isWLMint ? config.maxPerWalletWL : config.maxPerWallet
      )
      
      
    }

    init()
  }, [])
  
  useEffect( () => {
    const onboardData = initOnboard( {
      address: (address) => setWalletAddress(address ? address : ''),
      wallet: (wallet) => {
        if (wallet.provider) {
          window.localStorage.setItem('selectedWallet', wallet.name)
        } else {
          window.localStorage.removeItem('selectedWallet') }}
    }
    )
  setOnboard(onboardData)
  }, [])

  const previouslySelectedWallet = typeof window !== 'undefined' &&
  window.localStorage.getItem('selectedWallet')

useEffect(() => {
  if (previouslySelectedWallet !== null && onboard) {
    onboard.walletSelect(previouslySelectedWallet)
  }
}, [onboard, previouslySelectedWallet])

  const connectWalletHandler = async () => {
    const walletSelected = await onboard.walletSelect()
    if (walletSelected) {
      await onboard.walletCheck()
      window.location.reload(false)

    }
  }
  const incrementMintAmount = () => {
    if (mintAmount < maxMintAmount) {
      setMintAmount(mintAmount + 1)
     
    }

    console.log(maxMintAmount)
    console.log(cost)
  }

  const decrementMintAmount = () => {
    if (mintAmount > 1) {
      setMintAmount(mintAmount - 1)
    }
  }

  const wlMintHandler = async () => {
    setIsMinting(true)

    const { success, status } = await wlMint(mintAmount)

    setStatus({
      success,
      message: status
    })

    setIsMinting(false)
  }
  const publicMintHandler = async () => {
    setIsMinting(true)

    const { success, status } = await publicMint(mintAmount)

    setStatus({
      success,
      message: status
    })

    setIsMinting(false)
  }

  const airdropHandler = async () => {
    setIsMinting(true)

    const {success, status} = await airdrop(mintAmount)

    setStatus({
      success,
      message:status
    })

    setIsMinting(false)
  } 

  return (
    <div className="min-h-screen w-full md:overflow-hidden overflow-auto flex flex-col items-center justify-center">
      <img src="/bg.png" className="hidden md:flex w-full h-full absolute"/>
      <img src="/bgmobile.png" className="md:hidden object-cover w-full h-full absolute"/>

      <div className='relative flex flex-col items-center md:flex-row md:justify-between justify-between md:py-12 w-full h-screen'>
      
      <div className='hidden md:flex w-full items-center justify-between'>
          <div className="mx-auto"> 
            <img src='gif1.gif' className="w-[125px] h-[125px] rounded-md border border-gray-100 shadow-lg shadow-black/60"/>
          </div>
          <div className="mx-auto">
            <img src='gif2.gif' className="w-[175px] h-[175px] rounded-md border border-gray-100 shadow-lg shadow-black/60"/>
          </div>
      </div>

      <div className=" bg-black/75 filter rounded-md flex flex-col items-center
    bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-2 border-gray-100 backdrop-saturate-150 w-full shadow-lg shadow-black/60">
        <div className="flex flex-col items-center w-full"> 
          <div className="flex flex-col items-center w-full py-4 mt-6 md:mt-0 md:px-16 px-4">
          
          <div className='pb-4  flex flex-col items-center'>
            <h1 className="font-Kanit uppercase font-bold text-3xl md:text-4xl text-brand-02 bg-clip-text mt-0 tracking-wider text-center">
            {paused ? 'Will live soon..': isAirdroping? 'Airdrop is Live!': isWLMint ? 'Whitelisted sale' : isPublicSale?'Public Sale' :'Will live soon..' }
            </h1>

            <h3 className="text-sm text-gray-100 tracking-widest">
               {walletAddress
                ? walletAddress.slice(0, 8) + '...' + walletAddress.slice(-4)
                : 'Not connected'} 
            </h3>
          </div>
          <div className='hidden md:flex flex-col'>
            <p className="text-2xl text-white font-medium font-Kanit mt-5 tracking-wide">
                  <span className="text-yellow-300">{totalMinted} {'  '} </span>/<span className="text-yellow-300">{'  '} {maxSupply} {'  '}</span>Minted
            </p>
          </div>

            <div className="md:hidden relative w-full">
                <div className="font-Righteous z-10 absolute top-2 left-2 opacity-80 filter backdrop-blur-lg text-base px-4 py-2 bg-black border border-brand-purple rounded-md flex items-center justify-center text-white font-semibold">
                  <p>
                    <span className="text-brand-05">{totalMinted}</span> /{' '} {maxSupply}
                   
                  </p>
                </div>

                <img
                src="/gif1.gif"
                  className="object-cover w-full mt-auto mb-0 h-auto rounded-md border border-gray-100"
                />
                </div>
          
                  
            {/* Increment decrement buttons */}
            <div className="font-Kanit flex items-center justify-between w-full mt-5">
                  <button
                    className="w-12 h-8 md:w-14 md:h-10 flex items-center justify-center text-black hover:shadow-lg bg-gray-300 font-bold rounded-md"
                    onClick={decrementMintAmount}>
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
                  <p className="flex items-center justify-center flex-1 grow text-center font-bold text-brand-02 text-3xl md:text-4xl">
                  {mintAmount} 
                  </p>
                  <button
                    className="w-12 h-8 md:w-14 md:h-10 flex items-center justify-center text-black hover:shadow-lg bg-gray-300 font-bold rounded-md"
                    onClick={incrementMintAmount} >
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
                </div> 

                <div className="border-t border-b py-4 mt-5 w-full font-semibold">
                  <div className="w-full text-xl font-Kanit flex items-center justify-between text-yellow-300">
                    <p>Total</p>

                    <div className="flex items-center space-x-3">
                    <p>
                         {Number.parseFloat((isAirdroping? 0 : isWLMint? config.wlcost : totalMinted > 7700 ? config.thirdCost : totalMinted > 4000 ? config.secondCost : isPublicSale && totalMinted > 0 ? config.firstCost : 0)*mintAmount).toFixed(
                          4
                        )} {' '} 
                       
                        ETH
                      </p>{' '}
                      <span className="text-yellow-300">+ GAS</span>
                    </div>


                  </div>
                </div>

                
                    {/* mint button */}
                    {walletAddress ? (
                  <button
                    className={` ${
                      paused || isMinting 
                        ? 'bg-gray-900 cursor-not-allowed'
                        : 'bg-gradient-to-br from-gray-900 to-black shadow-lg border border-transparent hover:shadow-black/60'
                    } font-Kanit mt-5 mb-0 font-medium w-full px-6 py-3 rounded-md text-2xl text-white  mx-4 tracking-wide uppercase border-violet-50`}
                    disabled={paused || isMinting}
                    onClick={ isAirdroping? airdropHandler : isWLMint ? wlMintHandler : publicMintHandler}
                  >
                    {isMinting ? 'Busy...' : 'Mint Now'}
                  </button>
                ) : (
                  <button
                    className='bg-gradient-to-br from-gray-900 to-black shadow-lg border border-transparent hover:shadow-black/60
                     font-Kanit mt-5 mb-0 font-medium w-full px-6 py-3 rounded-md text-2xl text-white  mx-4 tracking-wide uppercase border-violet-50'
                     onClick={connectWalletHandler}
                     >
                    Connect wallet
                  </button> )}

{/* social media icons paste correct links down beow */}
<div className="flex w-full items-center justify-evenly mt-5 px-10">
  <a className="bg-white rounded-full mx-2 shadow-lg hove:shadow-black/60 hover:rotate-12" href='http://discrord.com'>
    <img src='discord.svg' className='h-8 w-8 m-1'/>
  </a>
  <a className="bg-white rounded-full mx-2 shadow-lg hove:shadow-black/60 hover:rotate-12" href='http://facebook.com'>
    <img src='facebook.svg' className='h-8 w-8 m-1'/>
  </a>
  <a className="bg-white rounded-full mx-2 shadow-lg hove:shadow-black/60 hover:rotate-12" href='http://twitter.com'>
    <img src='twitter.svg' className='h-8 w-8 m-1'/>
  </a>
  <a className="bg-white rounded-full mx-2 shadow-lg hove:shadow-black/60 hover:rotate-12" href='http://etherscan.io'>
    <img src='etherscansvg.svg' className='h-8 w-8 m-1'/>
  </a>
</div>

            <div className="font-Kanit">
              {status && (
              <div
                className={`border ${
                  status.success ? 'border-green-500 text-white' : 'border-red-600 text-white'
                } rounded-md text-start h-full px-4 py-4 w-full mx-auto mt-8 md:mt-5"`}
              >
                <p className="flex flex-col space-y-2 text-sm md:text-base break-words ...">
                  {status.message}
                </p>
              </div>
            )}
            </div>


                </div>
        </div>
      </div>

      <div className='hidden md:flex w-full items-center justify-between'>
          <div className="mx-auto">
            <img src='gif3.gif' className="w-[175px] h-[175px] rounded-md border border-gray-100 shadow-lg shadow-black/60"/>
          </div>
          <div className="mx-auto">
            <img src='gif4.gif' className="w-[125px] h-[125px] rounded-md border border-gray-100 shadow-lg shadow-black/60"/>
          </div>
      </div>
      </div>

    </div>
  )
}


//<div className='min-h-screen h-full w-full overflow-hidden flex flex-col items-center justify-center bg-brand-background'>

//<div className="md:max-w-3xl w-full bg-black/75 filter  py-4 rounded-md px-2 md:px-10 flex flex-col items-center
//bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-2 border-gray-100 backdrop-saturate-150">

//conic-gradient(at left bottom, rgb(153, 27, 27), rgb(202, 138, 4), rgb(234, 179, 8))