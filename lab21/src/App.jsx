import './App.css'
import {useSelector, useDispatch} from 'react-redux';
import toggleLogin from './redux/action';

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <>
    <h1>Toggle login/logout using React-Redux</h1>
    <div>
      <h2>User Status: {isLoggedIn ? "Logged In" : "Logged Out"}</h2>
      <button onClick={() => dispatch(toggleLogin())}>{isLoggedIn ? "Log Out" : "Login"}</button>
      <br />
      {isLoggedIn && <p>Welcome back, User😊</p>}
    </div>
    
    </>
  )
}

export default App
