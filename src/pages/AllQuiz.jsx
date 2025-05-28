import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import QuizPost from '../components/QuizPost';

const AllQuiz = () => {
  const obj1={title:"Scheduling algorithms",tags:["OS","Operating Systems","Computer Science"]}
  const obj2={title:"ReactJS",tags:["Web dev","Full Stack web dev","Front end","javascript",'js','computer science','html & css']}
  const arr=[obj2,obj1,obj1,obj2,obj1,obj1,obj1,obj1,obj2];
  return (
    <>
        <Header/>
        <div className='w-full h-full '>
          <div className='mt-22 flex flex-wrap items-center justify-center'>
            {arr.map((tag,index)=><QuizPost key={index} quizObj={tag}/>)}
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default AllQuiz