import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import DOMPurify from 'dompurify'

function CoinItem() {

    const params = useParams();
    const [coin, setCoin] = useState({});
    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

    useEffect(() => {
        axios.get(url)
        .then((res) => setCoin(res.data))
        .catch((err)=> console.log(err))
    },[])
  return (
    
    <div className='bg-[#26272b] h-screen'>
        {/* container */}
        <div className='items-start flex flex-col bg-[#26272b] rounded-md p-4'>
            {/* content */}
            <div className='items-center  mt-4 mb-4 ml-auto mr-auto flex flex-col border-b border-yellow-500 bg-[#26272b] p-4'>
                <h1 className='font-bold  text-2xl'>{coin.name}</h1>
            </div>

            <div className='mt-4 mb-4 items-start justify-start  flex flex-col bg-[#26272b] rounded-md p-4'>
                <span className='text-lg text-yellow-500 font-bold flex items-start '>Rank #{coin.market_cap_rank}</span>
            </div>

        
                <div className='flex w-full mr-7 ml-7  justify-between'>

                    <div className='flex items-center'>
                    {coin.image ? <img className='mr-6 content-center' src={coin.image.small} alt='' /> : null}
                    <p className='mr-3 font-bold text-xl'>{coin.name}</p>
                    <p className='font-bold text-xl'>({coin.symbol})</p>
                    </div>
                    
                    <div className='mr-16 flex items-center'>
                    {coin.market_data?.current_price ? <h1 className='text-2xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent'>${coin.market_data.current_price.usd} </h1> : null}
                    </div>
                    
                </div>
             
           {/* table   */}
           <div className='mt-6 w-full overflow-x-auto'>
            <table className='w-full text-center'>
                <thead className=''>
                    <tr >
                        <th className='border bg-[#333] space-x-2 p-4 border-neutral-400 rounded-md'>1h</th>
                        <th className='border bg-[#333] space-x-2 p-4 border-neutral-400 rounded-md'>24h</th>
                        <th className='border bg-[#333] space-x-2 p-4 border-neutral-400 rounded-md'>7d</th>
                        <th className='border bg-[#333] space-x-2 p-4 border-neutral-400 rounded-md'>14d</th>
                        <th className='border bg-[#333] space-x-2 p-4 border-neutral-400 rounded-md'>30d</th>
                        <th className='border bg-[#333] space-x-2 p-4 border-neutral-400 rounded-md'>1yr</th>
                    </tr>
                </thead>


                <tbody>
                    <tr >
                        <td className='border text-center space-x-2 p-4 border-neutral-400 rounded-md' >{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd}</p> : null}</td>
                        <td className='border space-x-2 text-center p-4 border-neutral-400 rounded-md'>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd}</p> : null}</td>
                        <td className='border space-x-2 text-center p-4 border-neutral-400 rounded-md'>{coin.market_data?.price_change_percentage_7d_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd}</p> : null}</td>
                        <td className='border space-x-2 text-center p-4 border-neutral-400 rounded-md'>{coin.market_data?.price_change_percentage_14d_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd}</p> : null}</td>
                        <td className='border space-x-2 text-center p-4 border-neutral-400 rounded-md'>{coin.market_data?.price_change_percentage_30d_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd}</p> : null}</td>
                        <td className='border space-x-2 text-center p-4 border-neutral-400 rounded-md'>{coin.market_data?.price_change_percentage_1y_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd}</p> : null}</td>
                        
                    </tr> 
                </tbody>
            </table>
           </div>

          
        {/* content  */}
        <div className='bg-neutral-700 p-5 mt-6 w-full rounded-md'>
            <h3 className='font-bold text-xl border-b border-yellow-500 inline'>About</h3>
            <p className='mt-4' dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),
            }}>


            </p>
        </div>

        </div>
    </div>
  )
}

export default CoinItem