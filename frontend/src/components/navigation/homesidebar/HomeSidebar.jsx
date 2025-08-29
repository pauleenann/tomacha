import React from 'react'
import Trending from './Trending'
import UpcomingEvents from './UpcomingEvents'
import NearbyCafes from './NearbyCafes'

const HomeSidebar = () => {
  return (
    <div className='w-full h-auto py-10 text-default font-dm-sans flex flex-col gap-6'>
        <Trending/>
        <UpcomingEvents/>
        <NearbyCafes/>
    </div>
  )
}

export default HomeSidebar
