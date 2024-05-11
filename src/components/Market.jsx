import React from 'react'
import useAxios from '../hooks/useAxios'

function Market() {
    const {response} = useAxios('coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    console.log(response);
    
  return (
    <div className='bg-gradient-to-r from-blue-950 to-black h-96 flex flex-col'>
        
    </div>
  )
}

export default Market