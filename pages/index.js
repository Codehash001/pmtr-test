import Carousel from "../components/Carousel";

function home () {


  return (
    <div className="min-h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      <img src="/background.png" className="object-over w-full h-full absolute"/>
    
      <div className="relative bg-black/75 filter py-4 rounded-md px-2 md:px-10 flex flex-col items-center
    bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-2 border-gray-100 backdrop-saturate-150">
        <div className="flex flex-col items-center">
          <h1 className="font-Kanit text-[35px] text-white uppercase">Minting is Live!</h1>
          <h1 className='font-Kanit text-[25px] text-gray-400 mt-2'>Not Connected</h1>
        </div>
      </div>

    </div>
  )
}

export default home

//<div className='min-h-screen h-full w-full overflow-hidden flex flex-col items-center justify-center bg-brand-background'>

//<div className="md:max-w-3xl w-full bg-black/75 filter  py-4 rounded-md px-2 md:px-10 flex flex-col items-center
//bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-2 border-gray-100 backdrop-saturate-150">