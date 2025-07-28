import React, { useState } from 'react'

const EventClick = () => {
    const [text, setText] = useState("");
    const [sub, setSubmit] = useState(false);

    const handleInput = (data) => {
        setText(data.target.value);
        
        if(data.target.value.length === 0){
          setSubmit(false);
        }
    }
  return (
    <div className='container'>
      <div>
        <input onChange={handleInput} type="text" placeholder="Enter your Name ..."/>
        <button onClick={()=> setSubmit(true)}>Submit</button>
      </div>
        
        <h4 style={{visibility: sub ? 'visible' : 'hidden'}}>Hello, {text} 😎</h4>
        
    </div>
  )
}

export default EventClick