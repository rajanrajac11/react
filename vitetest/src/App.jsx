import {useState} from "react"

function App(){
  let [count, setCount] = useState(0)
  function increaseCount(){
    count = count + 1;
    if(count >10 ) {
      count = 10;
      setCount(count)
      alert("Count is max")
    }
    else{
      setCount(count)
    }
    
    
  }

  function decreaseCount(){
    count = count -1 
    if(count < 0){
      count = 0;
      setCount(count)
      alert("count is min")
    }
    else{
      setCount(count)
    }
  }

  return(
    <>
    <p>The count is {count}</p>
    <button onClick={increaseCount} className="bg-green-500">Increase {count}</button>
    <button onClick={decreaseCount} className="bg-blue-600 ml-3">Decrese {count}</button>
  
  </>
  )
}
export default App;