import React from 'react'

const NearbyCafes = () => {
  return (
    <div className='bg-white p-10 rounded-xl'>
        <h1 className='text-3xl font-medium'>Nearby Cafés</h1>
        <div className='text-xl mt-7 flex flex-col gap-3'>
            {[1,2,3].map(item=>(
                <div className='flex flex-col'>
                    <span className='font-medium'>ChaHaus Manila</span>
                    <span className='text-gray-500'>Minimalist Japanese-inspired café</span>
                </div>  
            ))}
                
        </div>
        <button className='mt-5 text-xl text-matcha-green'>
            Show more
        </button>
    </div>
  )
}

export default NearbyCafes
