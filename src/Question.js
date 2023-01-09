import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const Question = ({id,title,info}) => {
const [answer,setAnswer] =useState('')



  const answers=()=>{
    if(answer){

      return setAnswer('')
    }
  
  else{
    return setAnswer(info)
  }
}
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={answers}>
          <AiOutlinePlus/>
        </button>
      </header>
      {answer&&
      <p>{answer}</p>
    }
    </article>
  )
};

export default Question;
