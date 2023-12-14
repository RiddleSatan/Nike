import React from 'react'

const Home = () => {
  return (
    <><div class="content pl-6 bg-black ">
      <div class="container flex bg-black flex-col md:flex-row items-center justify-between gap-8 md:gap-0 min-h-screen md:min-h-auto">
        <div class="info text-center bg-black md:text-left mb-8 md:mb-0">
          <h1 class="text-white text-4xl md:text-6xl">Looking For Inspiration</h1>
          <p class="text-white text-base md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit nihil ullam nesciunt quidem iste, Repellendus odit nihil</p>
          <button class="btn mt-8 px-6 py-3 rounded-lg text-white bg-purple-600 cursor-pointer">Button name</button>
        </div>
        <div class="image pr-6 ">
          <img  src="https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/m/m/v/-original-imagg7szgcmfgauh.jpeg?q=90" alt="Image" class="max-w-md rounded-md "/>
        </div>
      </div>
    </div></>
  )
}

export default Home