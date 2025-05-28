import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router'
import GeneratingTokensIcon from '@mui/icons-material/GeneratingTokens';
import Iframe from 'react-iframe'
import YoutubePlayer from '../components/Youtube-player'
import QuizIcon from '@mui/icons-material/Quiz';

const PostPlayer = () => {
    const params=useParams()

    const postObj={
        title:"Scheduling algorithms ",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        videoUrl:"https://youtu.be/XCIYHCXQoxQ?si=SlwTRa2wmNXetT-7",
        webUrl:"",
        pdfUrl:"",
    }

    

  return (
    <>
        <Header/>
        <div className='flex max-sm:flex-col gap-2 px-3 py-2 w-full h-full mt-20 max-sm:justify-center'>
            <div className='flex rounded-2xl bg-black border-2 border-[#d4be81]'>
                <YoutubePlayer id={postObj.videoUrl.split('/')[3].split('?')[0]}/>
            </div>
            <div className='flex flex-col py-3 px-5 border-2 gap-2 border-[#d4be81] bg-black rounded-2xl'>
                <h1 className='text-3xl font-mono font-bold text-[#d4be81]'>{postObj.title}</h1>
                <hr className='text-[#d4be81]'/>
                <p className='text-[#d4be81]'>{postObj.description}</p>
            </div>
        </div>
        <div className='w-full flex gap-3 items-center justify-center'>
                <button className='flex gap-2 px-4 py-2 bg-black rounded-full text-[#d4be81] border-3 border-[#d4be81] hover:cursor-pointer hover:border-black hover:bg-[#d4be81] hover:text-black duration-300'>
                    <GeneratingTokensIcon/>
                    <p>Generate summary</p>
                </button>
                <button className='flex gap-2 px-4 py-2 bg-black rounded-full text-[#d4be81] border-3 border-[#d4be81] hover:cursor-pointer hover:border-black hover:bg-[#d4be81] hover:text-black duration-300'>
                    <QuizIcon/>
                    <p>Take Quiz</p>
                </button>
        </div>
        <Footer/>
    </>
  )
}

export default PostPlayer