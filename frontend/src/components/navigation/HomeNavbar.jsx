import React from 'react'

const HomeNavbar = () => {
  return (
    <nav className='py-10 grid grid-cols-3 items-center'>
        {/* logo */}
        <p className='font-frank-ruhl-libre text-3xl text-default'>Tomochá</p>

        {/* search bar */}
        <div
        className='flex justify-center'>
           <div className='bg-white text-black flex items-center justify-center w-full h-13 px-5 rounded-4xl'>
                <input 
                type="text" 
                className=' focus:outline-0 w-full'
                placeholder='Search the Tomochá community'
                />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div> 
        </div>
        

        {/* bell and user icon */}
        <div className='flex items-center justify-end text-default'>
            <button 
            className='flex items-center justify-center'>
                <i class="fa-solid fa-bell text-2xl"></i>
            </button>
            <button 
            className='flex items-center justify-center'>
                <i class="fa-solid fa-circle-user text-2xl"></i>
            </button>
        </div>
    </nav>
  )
}

export default HomeNavbar
