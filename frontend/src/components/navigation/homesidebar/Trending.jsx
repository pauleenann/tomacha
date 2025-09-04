import React from 'react'

const Trending = () => {
  return (
    <div className='bg-white p-10 rounded-xl'>
        <h1 className='text-2xl font-medium'>What’s happening today</h1>
        <div className='text-lg mt-5 flex flex-col gap-3'>
            {[1,2,3,4,5,6].map(item=>(
                <div className='flex flex-col'>
                    <span className='font-medium'>#MatchaMood</span>
                    <span className='text-gray-500'>100k posts</span>
                </div>  
            ))}
                
        </div>
        <button className='mt-5  text-matcha-green'>
            Show more
        </button>
    </div>
  )
}

export default Trending
