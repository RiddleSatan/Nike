import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full h-[60vh] border-t-2 bg-[#111827] flex justify-evenly items-center'>
        <div className='w-80 h-80 bg-[#111827] text-white flex-col  justify-self-start color   leading-6 '>
            <img className='w-56 h-24 invert  ' src="https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png" alt="" />
            <h1>Get shoes ready for the new term at your</h1>
            <h1>nearest Nike store. Find Your perfect Size In</h1>
            <h1>Store. Get Rewards </h1>
            <div className='w-full h-10 bg-[#111827] mt-7 flex justify-self-start gap-4'>
                <FaFacebook className='text-xl'/>
                <FaTwitter  className='text-xl'/>
                <FaInstagram className='text-xl'/>
            </div>
            <h1 className='mt-20'><span>&copy;</span>Copyright. All rights reserved.</h1>
        </div>
        <div className='w-60 h-80 bg-[#111827] flex flex-col  gap-3 text-white '>
            <h1 className='mb-5 font-semibold text-4xl tracking-wider'>Poducts</h1>
            <h2 className='text-xl  font-medium tracking-wider hover:text-gray-500 transition-all'>Air Force 1</h2>
            <h2 className='text-xl  font-medium tracking-wider hover:text-gray-500 transition-all'>Air Max 1</h2>
            <h2 className='text-xl  font-medium tracking-wider hover:text-gray-500 transition-all'>Air Jordan 1</h2>
            <h2 className='text-xl  font-medium tracking-wider hover:text-gray-500 transition-all'>Air Force 2</h2>
            <h2 className='text-xl  font-medium tracking-wider hover:text-gray-500 transition-all'>Nike Waffle Racer</h2>
            <h2 className='text-xl  font-medium tracking-wider hover:text-gray-500 transition-all'>Nike Cortez</h2>
        </div>
        <div className='w-60 h-80 bg-[#111827] flex flex-col  gap-3 text-white '>
            <h1 className='mb-5 font-semibold text-4xl tracking-wider'>Help</h1>
            <h2 className='text-xl  font-medium tracking-wider hover:text-gray-500 transition-all'>About us</h2>
            <h2 className='text-xl  font-medium tracking-wider hover:text-gray-500 transition-all'>FAQs </h2>
            <h2 className='text-xl  font-medium tracking-wider hover:text-gray-500 transition-all'>How it works </h2>
            <h2 className='text-xl  font-medium tracking-wider hover:text-gray-500 transition-all'>Privacy policy</h2>
            <h2 className='text-xl  font-medium tracking-wider hover:text-gray-500 transition-all'>Payment policy</h2>
        </div>
        <div className='w-60 h-80 bg-[#111827] flex flex-col  gap-3 text-white '>
            <h1 className='mb-5 font-semibold text-4xl tracking-wider'>Get in touch</h1>
            <h2 className='text-xl  font-medium tracking-wider hover:text-gray-500 transition-all'>customer@nike.com</h2>
            <h2 className='text-xl  font-medium tracking-wider hover:text-gray-500 transition-all'>+92554862354</h2>
            <h1 className='mt-40'>
Terms & Conditions</h1>
        </div>
        

    </div>
  )
}


export default Footer