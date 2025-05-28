import React from 'react'
import UserPost from "../components/User-post"
import Header from '../components/Header'
import Footer from '../components/Footer';
import AddPostButton from '../components/AddPostButton';

const AllPosts = () => {
 const arr=[0,0,0,0,0,0,0,0,0,0,0,0,0];

  return (
    <div className='w-full h-screen mt-20'>
      <Header searchHeader={true}/>
      <div className='flex flex-wrap justify-center'>
        {arr.map((_,id)=><UserPost key={id} tags={["OS","Operating systems","Computer Science","CS"]} title="Scheduling Algorithms" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        type="Youtube" userName="Ananay"/>)}
      </div>
      <AddPostButton/>
      <Footer/>
    </div>
  )
}

export default AllPosts