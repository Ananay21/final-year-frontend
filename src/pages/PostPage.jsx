import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router'
import GeneratingTokensIcon from '@mui/icons-material/GeneratingTokens';
import YoutubePlayer from '../components/Youtube-player'
import QuizIcon from '@mui/icons-material/Quiz';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import StyleIcon from '@mui/icons-material/Style';
import Flashcard from '../components/FlashCard';

const PostPlayer = () => {
    const params=useParams()
    const [gen,updateGen]=useState(false);
    const [loading,updateLoading]=useState(true);
    const [postObj,setPostObj]=useState({
        title:"",
        description:'',
        videoUrl:"",
        webUrl:"",
        pdfUrl:"",
    });

    useEffect(()=>{
        getPostObj();
    },[]);

    const getPostObj=()=>{
        // axios url as `..../allpost/${params}`
        setPostObj({
            id:"134123253",
            title:"Spring boot crash course",
            description:"FreeCodeCamp tutorial",
            type:"video",
            userName:"Ananay",
            videoUrl:"https://youtu.be/gJrjgg1KVL4?si=uYDKJu4S_r8l4u5g",
            tags:[],
        })
    }  

    const handleSummary=async ()=>{
        await setTimeout(()=>{
            setPostObj({...postObj,allFlashCards:JSON.parse(`{"_id": {
                "$oid": "68281990f205a6681b850c1f"
            },
            "resourceId": "6827689d2944a255496a7c96",
            "flashcards": [
                {
                "points": [
                    "Ubuntu is a Linux distro.",
                    "Based on Debian's architecture.",
                    "User-friendly desktop environment."
                ]
                },
                {
                "points": [
                    "Linux is an open-source OS.",
                    "Kernel forms the core.",
                    "Supports diverse hardware."
                ]
                },
                {
                "points": [
                    "OS manages computer resources.",
                    "Provides platform for apps.",
                    "Interfaces with hardware."
                ]
                },
                {
                "points": [
                    "Ubuntu uses APT package manager.",
                    "Easy software installation/updates.",
                    "Large software repository."
                ]
                },
                {
                "points": [
                    "Command line interface (CLI).",
                    "Powerful for advanced users.",
                    "Automation and scripting."
                ]
                }
            ],
            "createdAt": {
                "$date": "2025-05-17T05:07:28.867Z"
            },
            "_class": "com.final_year_project.AI_service.model.Flashcard"
            }`)})
            updateLoading(false);
        },
        2000);
    }

    const LoadDiv=()=>{
        return <div className='w-full px-5 py-5 flex justify-center items-center gap-2'>
                    <DataUsageIcon className='animate-spin'/>
                    <p>Loading.....</p>
                </div>
    }

  return (
    <>
        <Header/>
        <div className='flex max-sm:flex-col gap-5 px-3 py-2 w-full h-full mt-20 max-sm:justify-center'>
            <div className='flex rounded-2xl bg-black border-2 border-[#d4be81] max-sm:w-full'>
                {postObj.videoUrl && <YoutubePlayer id={postObj.videoUrl.split('/')[3].split('?')[0]}/>}
            </div>
            <div className='flex flex-col py-3  px-5 border-2 gap-2 w-full border-[#d4be81] bg-black rounded-2xl'>
                <h1 className='text-3xl font-mono font-bold text-[#d4be81]'>{postObj.title}</h1>
                <hr className='text-[#d4be81]'/>
                <p className='text-[#d4be81]'>{postObj.description}</p>
            </div>
        </div>
        <div className='w-full flex gap-3 items-center justify-center mt-5 px-3'>
                <button className='flex gap-2 px-4 py-2 bg-black rounded-full text-[#d4be81] border-3 border-[#d4be81] hover:cursor-pointer hover:border-black hover:bg-[#d4be81] hover:text-black duration-300' onClick={()=>{
                    updateGen(true)
                    handleSummary()
                    }}>
                    <StyleIcon/>
                    <p>Generate Flashcards</p>
                </button>
                <button className='flex gap-2 px-4 py-2 bg-black rounded-full text-[#d4be81] border-3 border-[#d4be81] hover:cursor-pointer hover:border-black hover:bg-[#d4be81] hover:text-black duration-300'>
                    <QuizIcon/>
                    <p>Take Quiz</p>
                </button>
        </div>
        <div className={`flex flex-col justify-center transition-opacity ease-in-out bg-black rounded-2xl text-[#d4be81] px-5 py-3 border-3 mt-5 mx-4 duration-400 ${gen?"opacity-100":" opacity-0 h-[1px]"}`}>
            <h1 className='text-3xl font-mono font-bold mb-2'>Flashcards</h1>
            <hr className='mb-2'/>
            <div className={`w-full mt-2 ${gen?"opacity-100":"hidden"}`}>
                {
                    loading?<LoadDiv/>:<div className='flex justify-between items-center mx-3 gap-2 max-sm:flex-col pb-4'>{postObj.allFlashCards.flashcards.map((elem,id)=><Flashcard key={id} front={id+1} back={elem.points}/>)}</div>
                }
            </div>
        </div>  
        <Footer/>
    </>
  )
}

export default PostPlayer