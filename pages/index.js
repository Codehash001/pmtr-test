import Carousel from "../components/Carousel";

function home () {


  return (
    <div className='min-h-screen h-full w-full overflow-hidden flex flex-col items-center justify-center bg-brand-background'>
      <div className="relative w-full h-full flex flex-col items-center justify-center py-2">
        <img
	        src="/background.png"
          className="absolute inset-auto block w-full min-h-screen object-cover"
        />

        <div>
          {/* minting section */}
          <div className="flex flex-col items-center justify-center h-full w-full px-2 md:px-10">
            <div className="md:max-w-3xl w-full bg-black/75 filter  py-4 rounded-md px-2 md:px-10 flex flex-col items-center
            bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border-2 border-gray-100 backdrop-saturate-150">

                <div className="flex flex-col md:mx-4 mx-2 font-Kanit">
                  <h1 className=" md:text-[60px] text-40px md:my-4 my-2">Minting is Live !</h1>
                  <h1 className="md:text-[30px] text-[20px]">Wallet isnot connected</h1>

                  {/* increment buttons here*/}

                  <div className=" border-y-white my-4">
                    <div className=" flex flex-row py-2">
                    <h1 className="uppercase text-white md:font-[40px] font-[30px] mx-2">Price</h1>
                    <h1 className="uppercase text-white md:font-[40px] font-[30px] mx-2">=</h1>
                    <h1 className="uppercase text-white md:font-[40px] font-[30px] mx-2">0.001 ETH</h1>
                    <h1 className="uppercase text-yellow-400 md:font-[40px] font-[30px] mx-2">+GAS</h1>
                  </div>

                  <div className="my-4">
                    <button className="bg-black rounded-lg">
                      <h1 className="font-Kanit text-[25px] py-2 px-4 font-semibold">Connect Wallet</h1>
                    </button>
                  </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <div>
          {/* carousel */}
          <div className=" h-full mx-4 flex flex-row justify-between items-center">
            <img src="/1.png" className="h-[250px] w-[250px] rounded-lg border border-white"/>
            <img src="/2.png" className="h-[250px] w-[250px] rounded-lg border border-white"/>
            <img src="/3.png" className="h-[250px] w-[250px] rounded-lg border border-white"/>
            <img src="/4.png" className="h-[250px] w-[250px] rounded-lg border border-white"/>
            <img src="/5.png" className="h-[250px] w-[250px] rounded-lg border border-white"/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default home