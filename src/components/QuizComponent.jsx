import { useState } from 'react'

const QuizComponent = (props) => {
  const [btnState,updateBtnState]=useState([0,0,0,0]);
  const [score,updateScore]=useState(0);
  const [index,updateIndex]=useState(0);
  const [quizState,updateQuizState]=useState(1);
  const [transitionState,updateTransitionState]=useState({first:false,second:false});
  const questionObj=props.obj;

  const handleQuestionChange=async (element,id)=>{
    if(element.val==1){
        updateBtnState((prev)=>{
            return prev.map((_,i)=>{
                if(i==id){
                    updateScore(score+1)
                    return 1;
                }
                else{
                    return 0;
                }
            })
        })
        setTimeout(()=>{
            updateIndex((prev)=>{
                if (prev<questionObj.length) return prev+1;
                else {
                    handleTransition(3);
                    return prev;
                }
            })
            updateBtnState([0,0,0,0]);
        },1200);
        
    }
    else{
        updateBtnState((prev)=>{
            return prev.map((_,i)=>{
                if (i==id) {
                    return 2;
                }
                else {
                    return 0;
                }
            })
        })
        setTimeout(()=>{
            updateIndex((prev)=>{
                if (prev<questionObj.length) return prev+1;
                else {
                    handleTransition(3);
                    return prev;
                }
            })
            updateBtnState([0,0,0,0]);
        },1200);
    }
  }

  const handleTransition=async(num)=>{
    updateTransitionState({...transitionState,first:true});
    setTimeout(()=>{
        updateTransitionState({...transitionState,second:true});
        updateQuizState(num);
    },350);
  }



  if(quizState==1){
    return <button 
            className={`py-18 px-10 rounded-full bg-green-500 hover:cursor-pointer animate-bounce border-1 duration-300 
                        hover:scale-110 text-white ${transitionState.first?(transitionState.second?" hidden":"opacity-0"):""}`} 
            onClick={()=>handleTransition(2)}>
                START QUIZ
            </button> 
  }

  if (quizState==2 && index<5){
    return (
    <div className={`w-full duration-300 `}>
        <div className='flex mx-3 flex-col max-sm:mx-1'>
            <div className='question'>
                <p className='text-2xl font-semibold text-center mb-5'>{questionObj[index].question}</p>
            </div>
            <div className='flex flex-wrap justify-center flex-row gap-3 max-sm:flex-col'>
                {
                    questionObj[index].options.map((element,id)=>{
                        return <button className={`w-[500px] h-[69px] max-sm:w-full max-sm:h-full duration-300 text-white rounded-xl hover:cursor-pointer py-4 max-sm:py-3 px-2 ${(btnState[id]==1)?'bg-green-500':(btnState[id]==2?"bg-red-500":"bg-black")}`} key={id} onClick={()=>{handleQuestionChange(element,id)}}>
                            {element.key}
                        </button>
                    })
                }
            </div>
        </div>
    </div>
    )
  }

  return <div className='text-center'>
    your final score is : {score}
  </div>
  
}

export default QuizComponent