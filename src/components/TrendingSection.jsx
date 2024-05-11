import React from 'react'
import useAxios from '../hooks/useAxios'

function TrendingSection() {
    const {response} = useAxios('search/trending');
    // console.log(response.coins);
  return (
    <div className='text-white'>TrendingSection</div>
  )
}

export default TrendingSection