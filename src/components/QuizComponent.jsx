import { useState } from 'react'

const QuizComponent = (props) => {
  const [btnState,updateBtnState]=useState([0,0,0,0]);
  const [score,updateScore]=useState(0);
  const [index,updateIndex]=useState(0);
  const [quizState,updateQuizState]=useState(1);
  const [transitionState,updateTransitionState]=useState({first:false,second:false});
  const [difficulty,updateDifficulty]=useState("");
  const questionObj=props.obj;
  const messages=["You need to work on this topic.","You did great, but need some improvement","Congratulations! You aced the test!"];

  const setDifficulty=(val)=>{
    updateDifficulty(val);
    handleTransition(3);
  }

  const handleQuestionChange=async (element,level,id,index)=>{
    if(level=="easy"){
        if(element==questionObj.quizzes.easy[index].correctAnswer){
            updateScore(score+1)
            updateBtnState((prev)=>{
                return prev.map((_,i)=>{
                    if(i==id){
                        return 1;
                    }
                    else{
                        return 0;
                    }
                })
            })
            setTimeout(()=>{
                updateIndex((prev)=>{
                    if (prev<questionObj.quizzes.easy.length-1) return prev+1;
                    else {
                        handleTransition(4);
                        return prev;
                    }
                })
                updateBtnState([0,0,0,0]);
            },1200);
        }
    else{
        updateBtnState((prev)=>{
            return prev.map((_,i)=>{
                if (id==i) {
                    return 2;
                }
                else {
                    return 0;
                }
            })
        })
        setTimeout(()=>{
            updateIndex((prev)=>{
                if (prev<questionObj.quizzes.easy.length-1) return prev+1;
                else {
                    handleTransition(4);
                    return prev;
                }
            })
            updateBtnState([0,0,0,0]);
        },1200);
    }
    }
    else if(level=="medium"){
        if(element==questionObj.quizzes.medium[index].correctAnswer){
            updateScore(score+1)
            updateBtnState((prev)=>{
                return prev.map((_,i)=>{
                    if(i==id){
                        return 1;
                    }
                    else{
                        return 0;
                    }
                })
            })
            setTimeout(()=>{
                updateIndex((prev)=>{
                    if (prev<questionObj.quizzes.medium.length-1) return prev+1;
                    else {
                        handleTransition(4);
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
                    if (prev<questionObj.quizzes.medium.length-1) return prev+1;
                    else {
                        handleTransition(4);
                        return prev;
                    }
                })
                updateBtnState([0,0,0,0]);
            },1200);
        }
    }
    else{
        if(element==questionObj.quizzes.difficult[index].correctAnswer){
            updateScore(score+1)
            updateBtnState((prev)=>{
                return prev.map((_,i)=>{
                    if(i==id){
                        return 1;
                    }
                    else{
                        return 0;
                    }
                })
            })
            setTimeout(()=>{
                updateIndex((prev)=>{
                    if (prev<questionObj.quizzes.difficult.length-1) return prev+1;
                    else {
                        handleTransition(4);
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
                    if (prev<questionObj.quizzes.difficult.length-1) return prev+1;
                    else {
                        handleTransition(4);
                        return prev;
                    }
                })
                updateBtnState([0,0,0,0]);
            },1200);
        }
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

  const finalEasy=(score/questionObj.quizzes.easy.length)*100;
  const finalMedium=(score/questionObj.quizzes.medium.length)*100;
  const finalDifficult=(score/questionObj.quizzes.difficult.length)*100;


  if(quizState==2){
    return <div className='w-full duration-300'>
         <div className='flex flex-col items-center justify-center'>
            <h1 className='text-3xl font-semibold text-center mb-5 text-white animate-bounce duration-1000'>Select a difficulty level</h1>
            <div className='flex flex-row gap-3 max-sm:flex-col'>
                <button className='px-4 py-2 rounded-lg bg-green-500 duration-300 border-2 border-white text-white font-bold text-3xl hover:cursor-pointer hover:text-green-500 hover:border-green-500 hover:bg-white' onClick={()=>{setDifficulty("easy")}}>Easy</button>
                <button className='px-4 py-2 rounded-lg bg-yellow-500 duration-300 border-2 border-white text-white font-bold text-3xl hover:cursor-pointer hover:text-yellow-500 hover:border-yellow-500 hover:bg-white' onClick={()=>{setDifficulty("medium")}}>Medium</button>
                <button className='px-4 py-2 rounded-lg bg-red-500 duration-300 border-2 border-white text-white font-bold text-3xl hover:cursor-pointer hover:text-red-500 hover:border-red-500 hover:bg-white' onClick={()=>{setDifficulty("hard")}}>Hard</button>
            </div>
         </div>
    </div>
  }

  if (quizState==3 && index<5){
    if(difficulty=="easy"){
        return (
            <div className={`w-full duration-300 `}>
                <div className='flex mx-3 flex-col max-sm:mx-1'>
                    <div className='question'>
                        <p className='text-2xl font-semibold text-center mb-5 text-white'>{questionObj.quizzes.easy[index].text}</p>
                    </div>
                    <div className='flex flex-wrap justify-center flex-row gap-3 max-sm:flex-col'>
                        {
                            questionObj.quizzes.easy[index].options.map((element,id)=>{
                                return <button className={`w-[500px] h-[69px] max-sm:w-full max-sm:h-full duration-300 text-white rounded-xl hover:cursor-pointer py-4 max-sm:py-3 px-2 ${(btnState[id]==1)?'bg-green-500':(btnState[id]==2?"bg-red-500":"bg-black")}`} key={id} onClick={()=>{handleQuestionChange(element,"easy",id,index)}}>
                                    {element}
                                </button>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    else if(difficulty=="medium"){
        return (
            <div className={`w-full duration-300 `}>
                <div className='flex mx-3 flex-col max-sm:mx-1'>
                    <div className='question'>
                        <p className='text-2xl font-semibold text-center mb-5 text-white'>{questionObj.quizzes.medium[index].text}</p>
                    </div>
                    <div className='flex flex-wrap justify-center flex-row gap-3 max-sm:flex-col'>
                        {
                            questionObj.quizzes.medium[index].options.map((element,id)=>{
                                return <button className={`w-[500px] h-[69px] max-sm:w-full max-sm:h-full duration-300 text-white rounded-xl hover:cursor-pointer py-4 max-sm:py-3 px-2 ${(btnState[id]==1)?'bg-green-500':(btnState[id]==2?"bg-red-500":"bg-black")}`} key={id} onClick={()=>{handleQuestionChange(element,"medium",id,index)}}>
                                    {element}
                                </button>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={`w-full duration-300 `}>
                <div className='flex mx-3 flex-col max-sm:mx-1'>
                    <div className='question'>
                        <p className='text-2xl font-semibold text-center mb-5 text-white'>{questionObj.quizzes.difficult[index].text}</p>
                    </div>
                    <div className='flex flex-wrap justify-center flex-row gap-3 max-sm:flex-col'>
                        {
                            questionObj.quizzes.difficult[index].options.map((element,id)=>{
                                return <button className={`w-[500px] h-[69px] max-sm:w-full max-sm:h-full duration-300 text-white rounded-xl hover:cursor-pointer py-4 max-sm:py-3 px-2 ${(btnState[id]==1)?'bg-green-500':(btnState[id]==2?"bg-red-500":"bg-black")}`} key={id} onClick={()=>{handleQuestionChange(element,"difficult",id,index)}}>
                                    {element}
                                </button>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
  }

  else{
    if(difficulty=="easy"){
        return <div className='w-full flex justify-center'>
                        <div className='flex flex-col gap-2'>
                            <h1 className='font-bold text-3xl text-white text-center'>{(finalEasy)>75?messages[2]:finalEasy>50?messages[1]:messages[0]}</h1>
                            <h1 className='font-bold text-3xl text-white text-center'> Your final score is : {score}</h1>
                        </div>
                </div>
    }
    else if(difficulty=="medium"){
        return <div className='w-full flex justify-center'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-3xl text-white text-center'>{(finalMedium)>75?messages[2]:finalMedium>50?messages[1]:messages[0]}</h1>
                        <h1 className='font-bold text-3xl text-white text-center'> Your final score is : {score}</h1>
                    </div>
                </div>
    }
    else{
        return <div className='w-full flex justify-center'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-3xl text-white text-center'>{(finalDifficult)>75?messages[2]:finalDifficult>50?messages[1]:messages[0]}</h1>
                        <h1 className='font-bold text-3xl text-white text-center'> Your final score is : {score}</h1>
                    </div>
                </div>
    }
  }
  
}

export default QuizComponent