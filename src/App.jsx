import { useState, useEffect } from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Coin from './components/Coin'
import axios from 'axios'
import {Routes , Route} from 'react-router-dom'
import CoinItem from './routes/CoinItem'
import { Link } from 'lucide-react'
function App() {
  
  const [search, setSearch] = useState('')
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=40&page=1&sparkline=false'
      )
      .then(res => {
        setLoading(false);
        setCoins(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  ;
  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element = {
           <><HeroSection />
           <div className='bg-gradient-to-r from-black to-blue-950'>
            <div className=' max-w-[1240px] m-auto'>
              <div className='flex flex-col'>

                <div className='mt-10 flex justify-center items-center'>
                  <form>
                    <input className='w-[400px] p-3 mb-8 rounded-lg bg-[#26272b]' type="text"
                      onChange={handleChange}
                      placeholder='Search for a coin..' />
                  </form>
                </div>

                {/* for coin chart */}
                <div>
                  <div className='flex justify-between items-center bg-[#26272b]  rounded-md m-3 pt-3 pb-3 pl-4 pr-4 font-bold '>
                    <p>#</p>
                    <p className='-ml-1'>Coin</p>
                    <p className='-ml-9'>Price</p>
                    <p className='-ml-1'>24h</p>
                    <p className='hidden md:inline'>Volume</p>
                    <p className='hidden md:inline'>Mkt Cap</p>
                  </div>

              {filteredCoins.map((coin) => 
              <Coin
              name = {coin.name}
              id={coin.id}
              price={coin.current_price}
              market_cap_rank=  {coin.market_cap_rank}
              image = {coin.image}
              symbol = {coin.symbol}
              price_change = {coin.price_change_percentage_24h}
              volume = {coin.total_volume}
              market_cap = {coin.market_cap}
              /> )}
                  
                               
                </div>

              </div>
            </div>

          </div>
          </>
        } />

        <Route path='/CoinItem' element = { <CoinItem />}>
          <Route path=':coinId' element = {<CoinItem />} />
        </Route>
        
      </Routes>
    </>
  )
}

export default App
