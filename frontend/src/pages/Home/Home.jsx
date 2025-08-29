import React from 'react'
import HomeNavbar from '../../components/navigation/HomeNavbar'
import Post from '../../components/post/Post'
import HomeSidebar from '../../components/navigation/homesidebar/HomeSidebar'
import StickyBox from "react-sticky-box";

const Home = () => {
  return (
    <div className='w-screen h-screen bg-home'>
      <div className='w-5/6 h-screen m-auto'>
        {/* navbar */}
        <HomeNavbar/>

        <div className='flex items-start gap-5'>
          {/* feed */}
          <div className='w-full h-auto text-default font-dm-sans py-10'>
            {/* greetings */}
            <header className='mb-8'>
              <h1 className='text-3xl'>Good afternoon, Pauleen!</h1>
              <p className='text-xl font-light'>Here’s what your fellow tea friends are sharing today.</p>
            </header>
            
            {/* posts */}
            <div className='flex flex-col gap-6'>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
            </div>
          </div>

          {/* sidebar */}
          <StickyBox>
            <HomeSidebar/>
          </StickyBox>
        </div>
      </div>
    </div>
  )
}

export default Home
