import React from 'react'
import { Link } from 'react-router-dom'

const Coin = ({name, id,price,market_cap_rank, image, symbol, price_change,volume, market_cap}) => {
    
      return (

        <Link to={`CoinItem/${id}`}>

      <div className=' flex justify-between items-center bg-[#26272b] m-3 rounded-md p-3 box-border transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer'>
      <p>{market_cap_rank}</p>

     <div className='flex items-center'>
      <img className='h-10 w-10 mr-3' src={image} alt ={name} />
      <p>{symbol}</p>
     </div>

      <p>${price}</p>
      <p>${price_change.toFixed(2)}%</p>
      <p className='hidden md:inline'>${volume.toLocaleString()}</p>
      <p className='hidden md:inline'>${market_cap}</p>

    </div>

    </Link>
      )
     
  
  
}

export default Coin