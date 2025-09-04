import React from 'react'
import HomeNavbar from '../../components/navigation/HomeNavbar'
import HomeRightSidebar from '../../components/navigation/homerightsidebar/HomeRightSidebar'
import StickyBox from "react-sticky-box";
import { useAuth } from '../../context/AuthContext';
import CreatePost from '../../components/modal/CreatePost';
import HomeLeftSidebar from '../../components/navigation/homeleftsidebar/HomeLeftSidebar';
import Feed from '../../components/feed/Feed';

const Home = () => {
  const {isCreatePostModalOpen} = useAuth();
  return (
    <div 
    className='w-screen min-h-screen bg-home relative'>
      <div className='w-5/6 h-full m-auto'>
        {/* navbar */}
        <HomeNavbar/>

        <div className='flex items-start gap-5'>
          {/*  */}
          <StickyBox>
            <HomeLeftSidebar/>
          </StickyBox>

          {/* feed */}
          <Feed/>

          {/* sidebar */}
          <StickyBox>
            <HomeRightSidebar/>
          </StickyBox>
        </div>
      </div>

      {/* create post modal */}
      {isCreatePostModalOpen && <CreatePost/>}
    </div>
  )
}

export default Home
