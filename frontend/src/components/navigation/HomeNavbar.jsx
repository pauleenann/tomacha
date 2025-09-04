import React, { useState } from 'react'
import { userOptions } from '../../utils/constants';
import { useNavigate } from 'react-router';
import { signOut } from '../../firebase/auth';

const HomeNavbar = () => {
    const [isOpen, setIsOpen] = useState();
    const navigate = useNavigate();

    const handleOnClick = async (item)=>{
        if(item.action==='signout'){
            await signOut();
            navigate('/login'); //redirect to login
        }else if(item.path){
            // navigate to path
            navigate(item.path)
        }
    }

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
                <i className="fa-solid fa-magnifying-glass"></i>
            </div> 
        </div>
        

        {/* bell and user icon */}
        <div className='flex items-center gap-2 justify-end text-default relative'>
            <button
            className='font-medium border border-default py-1 px-4 rounded-full transition duration-100 ease-in-out hover:bg-matcha-green hover:border-matcha-green hover:text-white'>
                Create post
            </button>
            <button 
            className='flex items-center justify-center'>
                <i class="fa-solid fa-bell text-2xl"></i>
            </button>
            <button 
            className='flex items-center justify-center'
            onClick={()=>setIsOpen(!isOpen)}>
                <i class="fa-solid fa-circle-user text-2xl"></i>
            </button>

            {/* user menu\ */}
            {isOpen&&
            <div
            className='bg-white absolute rounded shadow w-45 top-12 z-10 py-1'>
                <ul>
                {userOptions.map((item, index)=>(
                    <li 
                    key={index}
                    >
                        <button
                        className='ps-5 py-1 cursor-pointer hover:bg-gray-100 w-full text-start'
                        onClick={()=>handleOnClick(item)}>
                            {item.name}
                        </button>
                    </li>
                ))}
                </ul>
            </div>}
            
        </div>
    </nav>
  )
}

export default HomeNavbar
