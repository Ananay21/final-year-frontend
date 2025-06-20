import React, { useState } from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkIcon from '@mui/icons-material/Link';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const Youtube="#ff3333";
const Website="#33a5ff";
const Pdf="#7733ff";

const UserPost = (props) => {
  const updatedDesc=props.desc.substring(0,100)+"..."
  const newTags=props.tags.slice(0,3)
  const htmlColor=((props.type=="Youtube")?Youtube:((props.type=="Website")?Website:Pdf));
  const [likeDislike,updateLtoR]=useState({like:false,dislike:false})

  const handleClick=(btn)=>{
    updateLtoR((org)=>{
      if(btn=="like"){
        if(org.like==true) return {...org,like:false};
        else return {like:true,dislike:false};
      }
      else{
        if(org.dislike==true) return {...org,dislike:false};
        else return {like:false,dislike:true};
      }
    })
  }

  return (
      <div className='flex flex-col h-[225px] w-[450px] border-4 duration-300 hover:scale-101 border-black bg-gray-100 rounded-lg p-3 mx-2 my-3 shadow-md shadow-gray-300 max-sm:h-[200px] max-sm:w-[300px] '>
        <div className='font-extrabold text-2xl pl-3 mb-2 hover:cursor-pointer font-mono flex w-full max-lg:text-xl'>
            <a href={`/allposts/${props.id}`}>{props.title}</a>
            <div className='flex items-center w-12 justify-end'>
              <YouTubeIcon htmlColor={htmlColor}/>

            </div>
        </div> 
        <hr className='mb-3'/>
        <div className='flex flex-row pl-3 gap-2 mb-2 max-lg:text-sm'>
          <p className='text-sm'>Tags:</p>
          {newTags.map((tag,i)=><div className=' flex rounded-3xl bg-black text-white text-xs px-2 py-1 items-center justify-center max-sm:px-[5px]' key={i}><p className='text-center'>{tag}</p></div>)}
          {
            props.tags.length>3 && <p className='text-sm'>...</p>
          }
        </div>
        <div className='pl-3 text-lg max-sm:hidden font-normal max-lg:text-sm'>
            <p>{updatedDesc}</p>
        </div>
        <div className='flex flex-row h-full pl-3 my-2 max-lg:text-sm'>
            <div className='flex flex-row gap-2 justify-end items-center w-full'>
              <button className={`rounded-full text-black flex items-center p-[3px] duration-300 ${likeDislike.like ? "text-white bg-black":""}`} onClick={()=>handleClick("like")}>
                <ArrowCircleUpIcon className='hover:cursor-pointer'/>
              </button>
              <button className={`text-black rounded-full flex items-center p-[3px] duration-300 ${likeDislike.dislike ? "text-white bg-black":""}`} onClick={()=>handleClick("dislike")}>
                <ArrowCircleDownIcon className='hover:cursor-pointer'/>
              </button>
            </div>
        </div>
      </div>
  )
}

export default UserPost