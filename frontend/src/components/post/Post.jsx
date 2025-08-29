import React from 'react'
import icon from '../../assets/images/icon.png'
import img from '../../assets/images/matcha.jpg'

const Post = () => {
  return (
    <article
    className='bg-white w-full h-auto p-10 text-default font-dm-sans rounded-xl text-xl'>
      <header>
        <div className='flex items-center gap-3'>
            <img 
            src={icon} 
            alt="Profile Picture of ()" />
            <div className='flex flex-col'>
                <span className='font-semibold'>@matcha.mika</span>
                <span className='text-gray-500'>2h ago</span>
            </div>
        </div>
      </header>

      {/* post content */}
      <div
      className='mt-8'>
        {/* place */}
        <p>📍 Nihon Café, Tokyo</p>

        {/* caption */}
        <p>Finally tried making my own Matcha Tiramisu 🍵🍰 — so creamy and just the right amount of bittersweet! Sharing the recipe with my Tomochá friends 💚</p>

        {/* img */}
        <div
        className='w-full h-150 rounded-xl overflow-hidden mt-3'>
            <img 
            src={img} 
            alt="Image Posted" 
            className='w-full h-full object-cover'/>
        </div>
      </div>

      {/* footer */}
      <footer className='mt-4'>
        {/* like, comment, share */}
        <div className='flex items-center gap-4'>
            {/* like */}
            <div className='flex items-center gap-2'>
                <button>
                    <i class="fa-solid fa-heart text-gray-300"></i>
                </button>
                <span>245</span>
            </div>

            {/* comment */}
            <div className='flex items-center gap-2'>
                <button>
                    <i class="fa-solid fa-comment text-gray-300"></i>
                </button>
                <span>245</span>
            </div>

            {/* share */}
            <div className='flex items-center gap-2'>
                <button>
                    <i class="fa-solid fa-share text-gray-300"></i>
                </button>
                <span>245</span>
            </div>
        </div>

        {/* comments */}
        <div className='mt-3'>
            <p>
                <span className='font-semibold'>@greenteadream:</span> 
                “Omg this looks so good 😍 Can’t wait to try it this weekend!”
            </p>
        </div>
      </footer>
    </article>
  )
}

export default Post
