import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router'
import GeneratingTokensIcon from '@mui/icons-material/GeneratingTokens';
import YoutubePlayer from '../components/Youtube-player'
import QuizIcon from '@mui/icons-material/Quiz';
import DataUsageIcon from '@mui/icons-material/DataUsage';

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
            setPostObj({...postObj,summary:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"})
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
                    <GeneratingTokensIcon/>
                    <p>Generate summary</p>
                </button>
                <button className='flex gap-2 px-4 py-2 bg-black rounded-full text-[#d4be81] border-3 border-[#d4be81] hover:cursor-pointer hover:border-black hover:bg-[#d4be81] hover:text-black duration-300'>
                    <QuizIcon/>
                    <p>Take Quiz</p>
                </button>
        </div>
        <div className={`flex flex-col justify-center transition-opacity ease-in-out bg-black rounded-2xl text-[#d4be81] px-5 py-3 border-3 mt-5 mx-4 duration-400 ${gen?"opacity-100":" opacity-0 h-[1px]"}`}> 
            <h1 className='text-3xl font-mono font-bold mb-2'>Summary</h1>
            <hr className='mb-2'/>
            <div className={`w-full ${gen?"opacity-100":"hidden"}`}>
                {
                    loading?<LoadDiv/>:<p className='transition-opacity ease-in-out duration-400 '>{postObj.summary}</p>
                }
            </div>
        </div>  
        <Footer/>
    </>
  )
}

export default PostPlayer