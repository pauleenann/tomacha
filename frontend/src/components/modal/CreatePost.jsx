import React from 'react'
import icon from '../../assets/images/icon.png'
import { useAuth } from '../../context/AuthContext';

const CreatePost = () => {
    const {isCreatePostModalOpen, setIsCreatePostModalOpen} = useAuth();

  return (
    <div className='h-screen fixed inset-0 bg-gray-500/20 backdrop-blur-xs flex items-center justify-center'>
      <div className='w-1/3 h-auto bg-white rounded-xl p-6 shadow'>
        <header className='flex justify-between items-center mb-4'>
            <span className='text-2xl font-frank-ruhl-libre'>Create new post</span>
            <button 
            className='hover:bg-gray-200 p-2 rounded-full transition duration-200 ease-in-out'
            onClick={()=>setIsCreatePostModalOpen(!isCreatePostModalOpen)}>
                <i className="fa-solid fa-xmark text-gray-400"></i>
            </button>
        </header>

        {/* user info */}
        <div className='w-full flex items-center gap-2'>
            <img src={icon} alt="" className='' />
            <div>
               <p className='font-medium'>@matcha.mika</p> 
               <select id="" name=""  class="text-xs font-medium focus:outline-none appearance-none bg-gray-200 p-1 px-2 rounded text-gray-500">
                    <option>Public</option>
                    <option>Private</option>
                </select>
            </div>
        </div>

        {/* text area */}
        <textarea 
        placeholder="What's brewing today?"
        className='w-full h-40 mt-4 focus:outline-none border border-gray-300 rounded-lg p-3 resize-none'
        name="" 
        id=""/>

        {/* other options */}
        <div className='w-full flex justify-between items-center mt-4'>
            <div>
                <label htmlFor="image" className='cursor-pointer'>
                    <i className="fa-solid fa-image text-2xl text-gray-500"></i>
                </label>
                <input 
                type="file" 
                name="image" 
                id="image" 
                className='hidden'/>
            </div> 
            <button
            className='bg-matcha-light-green text-white px-8 py-2 rounded-full font-medium hover:bg-matcha-green/90 transition duration-200 ease-in-out'>
                Post
            </button>
        </div>
        
      </div>
    </div>
  )
}

export default CreatePost
