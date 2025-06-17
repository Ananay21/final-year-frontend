import React, { useEffect, useState } from 'react'
import pfp from "../assets/pfp.jpg";
import Header from '../components/Header'
import Footer from '../components/Footer'
import UserPost from '../components/User-post';

const UserPage = () => {
  const [userData,updateUserData]=useState({userName:"",emailId:"",posts:[]});

  useEffect(()=>{
    updateUserData({
      userName:"Ananay",
      emailId:"ananayk371@gmail.com",
      posts:[{
        id:"134123253",
        title:"Spring boot crash course",
        description:"FreeCodeCamp tutorial",
        type:"video",
        url:"https://youtu.be/gJrjgg1KVL4?si=uYDKJu4S_r8l4u5g",
        tags:[],
      },
      {
        id:"1341232412",
        title:"Introduction to linux and ubuntu",
        description:"FreeCodeCamp tutorial",
        type:"artice",
        url:"https://youtu.be/gd7BXuUQ91w?si=dni8kUtApt5CeaKz",
        tags:[],
      },
      {
        id:"1341232412",
        title:"Introduction to linux and ubuntu",
        description:"FreeCodeCamp tutorial",
        type:"artice",
        url:"https://youtu.be/gd7BXuUQ91w?si=dni8kUtApt5CeaKz",
        tags:[],
      },{
        id:"1341232412",
        title:"Introduction to linux and ubuntu",
        description:"FreeCodeCamp tutorial",
        type:"artice",
        url:"https://youtu.be/gd7BXuUQ91w?si=dni8kUtApt5CeaKz",
        tags:[],
      },{
        id:"1341232412",
        title:"Introduction to linux and ubuntu",
        description:"FreeCodeCamp tutorial",
        type:"artice",
        url:"https://youtu.be/gd7BXuUQ91w?si=dni8kUtApt5CeaKz",
        tags:[],
      },{
        id:"1341232412",
        title:"Introduction to linux and ubuntu",
        description:"FreeCodeCamp tutorial",
        type:"artice",
        url:"https://youtu.be/gd7BXuUQ91w?si=dni8kUtApt5CeaKz",
        tags:[],
      }
    ]
  }
);
  },[]);

  const handleClick=async ()=>{
    // sign out logic
  }

  return (
    <>
    <Header/>
    <div className='w-full h-full'>
      <div className=' mx-3 mt-22 h-full pb-5 bg-black border border-white rounded-xl'>
        <div className='mx-10 my-10 flex flex-row gap-4 max-sm:flex-col max-sm:mx-2'>
          <div className='flex flex-row justify-center items-center '>
            <img src={pfp} alt="profile" width={"100px"} height={"100px"} className='rounded-full border-1 border-white'/>
          </div>
          <div className='flex flex-col justify-center w-full max-sm:items-center'>
            <div className='flex items-center gap-1 text-2xl max-sm:text-lg'>
              <h1 className='text-[#d4be81] font-bold'>Username:</h1>
              <h1 className='text-[#d4be81]  '>{userData.userName}</h1>
            </div>
            <div className='flex items-center gap-1 text-2xl max-sm:text-lg'>
              <h1 className='text-[#d4be81] font-bold'>Email ID:</h1>
              <h1 className='text-[#d4be81] '>{userData.emailId}</h1>
            </div>
          </div>
          <div className='flex w-3/4 max-sm:w-full justify-end max-sm:justify-center text-[#d4be81]'>
            <div className='flex items-center'>
              <button className='mx-2 my-1 px-3 py-2 bg-red-500 font-bold border-2 border-white duration-300 rounded-lg hover:cursor-pointer hover:text-red-500 hover:border-red-500 hover:bg-white  text-white' onClick={handleClick}>
                Sign Out
              </button>
            </div>
          </div>
        </div>
        <h1 className='text-[#d4be81] pl-10 max-sm:pl-5 text-3xl font-bold font-mono'>Your Posts</h1>
        <div className='flex mx-4 flex-wrap items-center justify-center max-sm:flex-col'>
          {userData.posts.map((elem,id)=><UserPost key={id} id={elem.id} tags={elem.tags} title={elem.title} desc={elem.description} type={elem.type}  />)}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default UserPage