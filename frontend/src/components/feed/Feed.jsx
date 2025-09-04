import React from 'react'
import CreatePost from './CreatePost'
import Post from '../post/Post'

const Feed = () => {
  return (
    <div className='w-full'>
        {/* create post */}
        <CreatePost/>

        {/* posts */}
        <div className='w-full flex flex-col gap-5 mt-5'>
            <Post/>
            <Post/>
            <Post/>
        </div>
      
    </div>
  )
}

export default Feed
