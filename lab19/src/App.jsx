import React, { useReducer } from 'react'
import './App.css';
const ACTIONS = {
  LIKE:"Like",
  DISLIKE: "Dislike"
}

function reducerfn(state, action) {
  switch(action.type) {
    case ACTIONS.LIKE:
      return {liked: true};
    case ACTIONS.DISLIKE:
      return {liked: false};
    default:
      return state;
  }
}
const App = () => {

  const [state, dispatch] = useReducer(reducerfn, {liked: "false"})

  const toggle = () => {
    dispatch({type: state.liked ? ACTIONS.DISLIKE : ACTIONS.LIKE})
  }

  const textTheme = {
    fontWeight: "bold",
    color: state.liked ? "Greenyellow" : "Red"
  }
  return (
    <div>
      <h1>UseReducer Example</h1>
      <div className='container'>
        <iframe width="650" height="375" src="https://www.youtube.com/embed/txJKuYX-94Y?si=VifVOleqwKmh9Fuv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p>The is the Video from Catoonz makes you laugh endless. <br />
        If enjoy it Please give Like.
        </p>
        <p style={textTheme}>{state.liked ? "❤️ Liked" : "😞  Disliked."}</p>
        <button onClick={toggle}>{state.liked ? "Dislike" : "Like"}</button>
      </div> 
    </div>
  )
}

export default App