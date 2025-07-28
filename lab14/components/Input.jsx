import React, { useState } from 'react'



const Input = () => {
  const [name, setName] = useState("");

  const handleInput = (data) => {
    setName(data.target.value);
  }
  return (
    <div className='container'>
    <h1>Enter your name</h1>
    <input type="text" name="name" placeholder='Enter your name ...' onChange={handleInput}/>
    <h2 style={{visibility: name ? 'visible' : 'hidden'}}>Hello, {name}</h2>
    </div>
  )
}



export default Input;