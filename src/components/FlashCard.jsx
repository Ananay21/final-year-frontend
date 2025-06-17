import { useState } from "react"

export default function Flashcard(props) {
  const[flip,setFlip] = useState(false)
  return (
    <div className={`card ${flip? 'flip' : ''}`} onClick={()=> setFlip(!flip)}>
      <div className='front' style={flip?{height:0}:{}}>
          <div>
            {props.front}
          </div>  
      </div>
      <div className='back'>
        <ul>
            {props.back.map((element,id)=><li key={id} className="list-disc">{element}</li>)}
        </ul>
      </div>
    </div>
    )
}