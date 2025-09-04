import React from 'react'
import Trending from './Trending'
import UpcomingEvents from './UpcomingEvents'
import NearbyCafes from './NearbyCafes'

const HomeSidebar = () => {
  return (
    <div className='w-100 h-auto text-default font-dm-sans flex flex-col gap-5'>
        <Trending/>
        <UpcomingEvents/>
        <NearbyCafes/>
    </div>
  )
}

export default HomeSidebar
