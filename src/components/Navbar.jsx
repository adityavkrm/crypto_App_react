import React from 'react'
import {CircleDollarSign} from 'lucide-react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <nav className='sticky top-0 py-3 border-b border-neutral-700 backdrop-blur-lg z-50'>

        <div className='container px-4 mx-auto relative text-sm'>

            <div className="flex justify-between items-center">

                <Link to={'/'}>
                <div className='flex items-center gap-3'>
                    <CircleDollarSign color="#f2be31" />
                    <span className='text-xl font-bold tracking-widest'>CRYPTOVERSE</span>
                </div>
                </Link>
                <ul className='hidden  md:flex justify-center text-lg gap-10 px-5 items-center'>
                    <Link to={'/'}>
                        <li className='font-semibold hover:text-yellow-300'>
                            <p className='cursor-pointer'>Home</p>
                        </li>
                    </Link>
                        <li className='font-semibold hover:text-yellow-300'>
                            <a href="#">About</a>
                        </li>
                </ul>

                <a href="#" className="hidden md:inline py-2 px-5 border rounded-full hover:bg-yellow-300 hover:text-black">
                        Get Started
                    </a>

            </div>

        </div>

    </nav>
  )
}

export default Navbar