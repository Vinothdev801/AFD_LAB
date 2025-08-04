import { useMemo, useState} from 'react';
import './App.css'

function App() {

  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // Factorial calculation 
  const calculateFactorial = (n) => {
    console.log("Factorial function is called.");
    
    if(isNaN(n) || n < 0) return "please give input between 1 to n";
    if(n === 1) return 1;

    let result = 1, i = 2;
    while(i <= n){
      result *= i;
      i++;
    }

    return result;
  }

  // using useMemo to control re-rendering calculation
  const factorial = useMemo(() => {
    return calculateFactorial(number);
  },[number])


  // handling value of inputbox
  const handleChange = (e) => {
    const value = parseInt(e.target.value);

    if(value > 0) setNumber(value);
    else setNumber("");
  }

  // Theme Style
  const Theme = {
    background: dark ? "black" : "white",
    color: dark ? "white" : "black",
  } 

  return (
    <>
    <div className='factorial_calculator' style={Theme}>
      <h1>Factorial Calculation using useMemo Hook</h1>

      <label>Enter Number: </label>
      <input type="number" value={number} onChange={handleChange} min= "1"  />
      <p>Factorial: {factorial}</p>

      <button onClick={() => setDark((curr) => !curr)}>Toggle Theme</button>
    </div>
    </>
  )
}

export default App
