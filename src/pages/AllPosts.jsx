import React, { useEffect, useState } from 'react'
import UserPost from "../components/User-post"
import Header from '../components/Header'
import Footer from '../components/Footer';
import AddPostButton from '../components/AddPostButton';

const AllPosts = () => {
 const [postsArray,setPosts]=useState([]);

 useEffect(()=>{
  getPosts();
 }
 ,[]);

 const getPosts=()=>{
  // axios url to set to postsarray
  setPosts([
    {
      id:"134123253",
      title:"Spring boot crash course",
      description:"FreeCodeCamp tutorial",
      type:"video",
      userName:"Ananay",
      url:"https://youtu.be/gJrjgg1KVL4?si=uYDKJu4S_r8l4u5g",
      tags:[],
    },
    {
      id:"1341232412",
      title:"Introduction to linux and ubuntu",
      description:"FreeCodeCamp tutorial",
      type:"artice",
      userName:"Manoj",
      url:"https://youtu.be/gd7BXuUQ91w?si=dni8kUtApt5CeaKz",
      tags:[],
    }
  ])
 }
 
  return (
    <div className='w-full h-screen mt-20'>
      <Header searchHeader={true}/>
      <div className='flex flex-wrap justify-center'>
        {postsArray.map((elem,index)=><UserPost key={index} id={elem.id} tags={elem.tags} title={elem.title} desc={elem.description} type={elem.type} />)}
      </div>
      <AddPostButton/>
      <Footer/>
    </div>
  )
}

export default AllPosts