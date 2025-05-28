import { useState } from 'react'
import BookIcon from '@mui/icons-material/Book';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import QuizIcon from '@mui/icons-material/Quiz';
import StyleIcon from '@mui/icons-material/Style';

const Header = (props) => {
  const [menu,changeMenu]=useState(false)
  const linksArray=[{link:"/allposts",route:"All posts",icon:<DynamicFeedIcon/>},{link:"/quiz",route:"Take quiz",icon:<QuizIcon/>},{link:"/flashcards",route:"FlashCards",icon:<StyleIcon/>},{link:"/user",route:"Profile",icon:<AccountCircleIcon/>}]
  
  const handleClick=()=>{
    changeMenu(!menu)
  }

  const DropDown=()=>{
    return <div className={`bg-black px-3 py-1 z-3 rounded-3xl absolute border-1 border-[#d4be81] right-3 mt-4 sm:hidden duration-1000 ${menu?" opacity-100":"opacity-0"}`}>
        <ul>
          {linksArray.map((linkObj,index)=><li key={index}>
                <a href={linkObj.link}>
                  <div className='flex items-center px-3 py-1 gap-2  border-1 border-[#d4be81] my-2 rounded-full'>
                    {linkObj.icon}
                    {linkObj.route}
                  </div>
                </a>
          </li>)}
        </ul>
    </div>
  }

  const MenuItem=(props)=>{
    return <a href={props.link} className={`hover:opacity-69 duration-300`}>
              <div className={`flex text-lg text-[#d4be81] max-sm:hidden rounded-full bg-black ${props.route!="Profile"?"px-3 py-1":"p-1"}  gap-2 border-2 border-[#d4be81] items-center`}>
                {props.icon}
                <p className={props.route!="Profile"?"":"hidden"}>{props.route}</p>
              </div>
            </a>
  }
    
  return (
    <header className='w-full pl-4 pr-2 py-3 z-1 bg-black flex gap-2 ml-2 mt-2 rounded-l-full border-1 border-[#d4be81] text-[#d4be81] top-0 fixed'>
        <div className='flex gap-1 items-center'>
            <a href="/">
              <div className=' mr-2 p-1 border-2 rounded-xl border-[#d4be81] hover:cursor-pointer duration-300 hover:opacity-50 transition-200'>
                <BookIcon className='text-[#d4be81]'/>
              </div>
            </a>
            <p className='text-2xl font-bold'>CRSP</p>
        </div>
        <div className='w-full gap-3 flex justify-end items-center'>
          {props.searchHeader && <input type="text" placeholder='Search..' className='rounded-full px-3 py-1 max-sm:hidden text-[#d4be81] bg-black border-2 border-[#d4be81]' />}

          {linksArray.map((linkObj,index)=><MenuItem key={index} link={linkObj.link} icon={linkObj.icon} route={linkObj.route}/>)}
          <div>
            <div className='p-1 hidden justify-center rounded-full border-2 border-[#d4be81] max-sm:flex mr-2'>
              <button onClick={handleClick}>
                <MenuIcon/>
              </button>
            </div>
            {
              menu && <DropDown/>
            }
          </div>
        </div>
    </header>
  )
}

export default Header