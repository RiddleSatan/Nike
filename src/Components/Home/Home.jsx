import React from 'react'

const Home = () => {
  return (
    <><div class="content pl-6 bg-black ">
      <div class="container flex bg-black flex-col md:flex-row items-center justify-between gap-8 md:gap-0 min-h-screen md:min-h-auto">
        <div class="info text-center bg-black md:text-left mb-8 md:mb-0">
          <h1 class="text-white mb-2 text-4xl md:text-6xl">Step into Style with Nike's Finest!</h1>
          <p class="text-white text-base md:text-lg">Embark on a Journey of Unparalleled Comfort & Performance with Nike's Signature Shoe Collection.</p>
          <button class="btn mt-8 px-6 py-3 rounded-lg text-black bg-white cursor-pointer">Get Yours</button>
        </div>
        <div class="image pr-6 ">
          <img  src="https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/m/m/v/-original-imagg7szgcmfgauh.jpeg?q=90" alt="Image" class="max-w-md rounded-md "/>
        </div>
      </div>
    </div></>
  )
}

export default Home