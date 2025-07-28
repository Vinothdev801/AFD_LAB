import {useRef} from 'react'

const ShowPassword = () => {
    const reference = useRef();

    const toggle = () => {
        const a = reference.current.type;
        
        const newtype = a === "password" ? "text" : "password";
        reference.current.type = newtype;
        
    }

  return (
    <div className='password'>
      <h2>Enter your Password</h2>
      <input ref={reference} type="password"/> <br />
      <button onClick={toggle}>Show Password</button><br />
      <p>You want to see your Password click the Button 👆 </p>
    </div>
  )
}

export default ShowPassword