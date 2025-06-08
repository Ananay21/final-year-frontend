import UserPost from '../../components/User-post';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import QuizPost from '../QuizPost';

const Carousel = ({data,type}) => {
  const [idx,updateIdx]=useState(0);
  const [trans,setTrans]=useState("animate-fade");

  const handleIdx=(direction)=>{
    if(direction=="forward"){
        if(idx+3<=data.length-1){ 
          updateIdx(idx+3);
          setTrans("animate-fade-right animate-duration-400");
        }
    }
    else{
        if(idx-3>=0){
          updateIdx(idx-3);
          setTrans("animate-fade-left animate-duration-400");
        }
    }
    setTimeout(()=>setTrans(""),500);
  }

  if(type=="post"){
    return (
      <>
        <div className={`w-full flex gap-2 ${trans}`}>
          <button className='hover:cursor-pointer' onClick={()=>handleIdx("backward")}><ArrowBackIosIcon className={`left-0 z-1 bg-transparent ${idx-3<0?"opacity-0":""}`}/></button>
          <div className='w-full flex flex-row text-black overflow-hidden'>
              {data.slice(idx,idx+3).map((element,idx)=><UserPost key={idx} id={element.id} tags={element.tags} title={element.title} desc={element.description} type={element.type} userName={element.userName}/>)}
          </div>
          <button className='hover:cursor-pointer' onClick={()=>handleIdx("forward")}><ArrowForwardIosIcon className={`right-0 z-1 bg-transparent ${idx+3>data.length?"opacity-0":""}`}/> </button>
        </div>
      </>
    )
  }
  else return (
  <>
    <div className={`w-full flex gap-2 ${trans}`}>
          <button className='hover:cursor-pointer' onClick={()=>handleIdx("backward")}><ArrowBackIosIcon className={`left-0 z-1 bg-transparent ${idx-3<0?"opacity-0":""}`}/></button>
          <div className='w-full flex flex-row text-black overflow-hidden'>
              {data.slice(idx,idx+3).map((element,idx)=><QuizPost key={idx} quizObj={element}/>)}
          </div>
          <button className='hover:cursor-pointer' onClick={()=>handleIdx("forward")}><ArrowForwardIosIcon className={`right-0 z-1 bg-transparent ${idx+3>data.length?"opacity-0":""}`}/> </button>
    </div>
  </>
  ) 
}

export default Carousel