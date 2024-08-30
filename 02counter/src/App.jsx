import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCount] = useState(1);

  const increaseCounter = () =>{
    // counter = counter +1
    if(counter>10){
      counter = 10
      alert("Counter is max")
    }
    else
    setCount(prevCounter => prevCounter +1)
    // setCount(prevCounter => prevCounter +1)
    // setCount(prevCounter => prevCounter +1)
    // setCount(prevCounter => prevCounter +1)
    

  }

  const decreaseCounter = () => {
    counter = counter -1 
    if(counter-1<0){
      alert("Counter reached minumum value")
      counter = 0
    }
    else
    setCount(counter-1)
  }



  return (
    <>
    <h1>Chai Aur React With Lovely VSC</h1>
    <button onClick={increaseCounter}>Increase{counter}</button>
    <button onClick={decreaseCounter}>Decrease{counter}</button>
    </>
  )
}

export default App
