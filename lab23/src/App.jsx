import './App.css'
import {Provider} from 'react-redux'
import store from './redux/store'
import Profile from './components/Profile'

function App() {

  return (
    <Provider store={store}>
      <Profile/>
    </Provider>
  )
}

export default App
