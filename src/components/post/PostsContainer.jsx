import React from 'react'
import { useSelector } from 'react-redux'
import PostCard from './PostCard'

const PostsContainer = () => {

    const allPosts = useSelector(state => state.posts)
    console.log(allPosts)
  return (
    <div className='flex flex-col gap-[.5rem]'>
        {allPosts.map((post, index) => (
            <PostCard key={index} postData={post} />
        ))}
    </div>
  )
}

export default PostsContainer