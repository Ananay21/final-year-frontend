import React from 'react'
import Iframe from "react-iframe"

const YoutubePlayer = (props) => {
  return (
    <div className='px-3 bg-black rounded-xl max-sm:w-full max-sm:h-[200px]'> 
        <Iframe url={`http://www.youtube.com/embed/${props.id}`} width='750px' height='450px' className=' max-sm:w-full max-sm:h-[200px]'/>
    </div>
  )
}

export default YoutubePlayer