import React from 'react'

// https://docs.coingecko.com/v3.0.1/reference/coins-markets 

function HeroSection() {
  return (
    <div className='border-b  border-neutral-600'>
        <div className='flex sm:w-screen  bg-gradient-to-r from-black to-blue-950'>
        <img className='h-1/3 w-1/3' src="https://assets-global.website-files.com/6364b6fd26e298b11fb9391f/6364b6fd26e2984b0db93dbb_Tb_drawkit_3D_Cryptocurrency_Illustrations_Kit.png" alt="cryptoimg" />

        <div className='flex items-center justify-center'>
        <span className='text-3xl sm:text-5xl font-bold lg:text-7xl text-center tracking-wide bg-gradient-to-r from-yellow-800 to-yellow-400 text-transparent bg-clip-text'>
            WELCOME TO CRYPTOVERSE</span>
        </div>
        
    </div>
    </div>
    
  )
}

export default HeroSection