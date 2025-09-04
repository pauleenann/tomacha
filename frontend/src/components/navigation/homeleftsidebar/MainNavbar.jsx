import React from 'react'
import { mainNavbarLinks } from '../../../utils/constants'

const MainNavbar = () => {
  return (
    <div className='w-full rounded-xl bg-white p-10 flex flex-col gap-5'>
        <h1 className='text-2xl font-medium'>Main Navigation</h1>
        <div className='flex flex-col gap-3 text-lg'>
            {mainNavbarLinks.map(item=>(
              <button className='text-left hover:text-matcha-light-green transition-all grid grid-cols-[20px_1fr] items-center gap-3' key={item.name}>
                <i className={item.icon}></i>
                <span>{item.name}</span>
              </button>
            ))}
            
        </div>
    </div>
  )
}

export default MainNavbar
