import React from 'react'
import HomeNavbar from '../../components/navigation/HomeNavbar'
import Post from '../../components/post/Post'
import HomeSidebar from '../../components/navigation/homesidebar/HomeSidebar'

const Home = () => {
  return (
    <div className='w-screen min-h-screen bg-home'>
      <div className='w-5/6 min-h-screen m-auto'>
        {/* navbar */}
        <HomeNavbar/>

        <div className='grid grid-cols-[70%_1fr] gap-5'>
          {/* feed */}
          <div className='w-full h-auto text-default font-dm-sans py-10'>
            {/* greetings */}
            <header className='mb-8'>
              <h1 className='text-4xl'>Good afternoon, Pauleen!</h1>
              <p className='text-2xl font-light'>Here’s what your fellow tea friends are sharing today.</p>
            </header>
            
            {/* posts */}
            <Post/>
          </div>

          {/* sidebar */}
          <HomeSidebar/>
        </div>
      </div>
    </div>
  )
}

export default Home
