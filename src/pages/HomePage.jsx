import Header from '../components/Header'
import Footer from '../components/Footer'
import Carousel from '../components/Home/Carousel';
import { useState,useEffect } from 'react';

const HomePage = () => {
    const TopTags=[
        {tag:"Your Knowledge, Shared. Our Community, Empowered.",line:"Connects learners, enabling shared growth and collective empowerment."},
        {tag:"Unlock a World of Shared Knowledge.",line:"Access an expansive library of resources contributed by a global community."},
        {tag:"The Collaborative Hub for Shared Smarts.",line:"It's where collective intelligence converges to benefit everyone."},
        {tag:"Learn Together. Grow Together. Share Together.",line:"Our community thrives on mutual learning, development, and contribution."},
        {tag:" Crowdsourcing Knowledge, One Share at a Time.",line:"Every contribution builds a richer, more accessible learning environment."}
    ];
    const index=Math.floor(Math.random()*5);

    const [postsArray,setPosts]=useState([]);
    const [quizArray,setQuiz]=useState([]);
    
    useEffect(()=>{
        getPosts();
        getQuiz();
    }
    ,[]);
    
    const getQuiz=()=>{
      const obj1={title:"Scheduling algorithms",tags:["OS","Operating Systems","Computer Science"]}
      const obj2={title:"ReactJS",tags:["Web dev","Full Stack web dev","Front end","javascript",'js','computer science','html & css']}
      setQuiz([obj1,obj2,obj1,obj2,obj1,obj2,obj1,obj2,obj1])
    }

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
        },
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
        },
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
        },
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
    <>
    <Header/>
      <div className='mt-22 mb-5 mx-4 flex flex-col text-[#d4be81]'>
          <div className='bg-black px-10 py-7 rounded-xl max-sm:py-10 max-sm:px-4 shadow-sm shadow-white'>
              <h1 className='font-bold font-mono text-4xl mb-2'>{TopTags[index].tag}</h1>
              <p className=' text-2xl'>{TopTags[index].line}</p>
          </div>
        </div>
        <div className='mb-5 mx-4 flex flex-col text-[#d4be81]'>
            <div className='bg-black px-10 py-7 rounded-xl max-sm:py-10 max-sm:px-4 shadow-sm shadow-white'>
                <div className='flex font-mono font-bold text-4xl mb-4'>
                    <h1>{"Learn Together. "} </h1>
                    <h1 className='max-lg:hidden'> Grow Together. Share Together.</h1>
                </div>
                <Carousel data={postsArray} type="post"/>
              </div>
            </div>
          <div>
        </div>
        <div className='mb-5 mx-4 flex flex-col text-[#d4be81]'>
            <div className='bg-black px-10 py-7 rounded-xl max-sm:py-10 max-sm:px-4 shadow-sm shadow-white'>
                <div className='flex font-mono font-bold text-4xl mb-4'>
                    <h1>{"Reinforce Your Understanding. "} </h1>
                    <h1 className='max-lg:hidden'> One Question at a Time.</h1>
                </div>
                <Carousel data={quizArray} type="quiz"/>
            </div>
          </div>
        <div>
      </div>
    <Footer/>
    </>
  )
}

export default HomePage