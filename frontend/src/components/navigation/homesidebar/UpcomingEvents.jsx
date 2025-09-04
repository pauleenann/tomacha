import React from 'react'

const UpcomingEvents = () => {
  return (
    <div className='bg-white p-10 rounded-xl'>
        <h1 className='text-2xl font-medium'>Upcoming Events</h1>
        <div className='text-lg mt-7 flex flex-col gap-3'>
            {[1,2,3].map(item=>(
                <div className='flex flex-col'>
                    <span className='font-medium'>Virtual Tea Party – “Brew Together”</span>
                    <span className='text-gray-500'>Sunday, Aug 25, 7PM</span>
                </div>  
            ))}
                
        </div>
        <button className='mt-5 text-matcha-green'>
            Show more
        </button>
    </div>
  )
}

export default UpcomingEvents
