import './App.css'
import StockChecker from './components/stockChecker'
import store from './store'
import {Provider} from 'react-redux'

function App() {
  

  return (
    <Provider store = {store}>
      <StockChecker />
    </Provider>
  )
}

export default App
