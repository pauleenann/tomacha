import React from 'react'
import icon from '../../assets/images/icon.png'

const CreatePost = () => {
  return (
    <div className='w-full rounded-xl bg-white p-5'>
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
        className='w-full h-20 mt-4 focus:outline-none border border-gray-300 rounded-lg p-3 resize-none'
        name="" 
        id=""/>

        {/* other options */}
        <div className='w-full flex justify-between items-center mt-1'>
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
  )
}

export default CreatePost
