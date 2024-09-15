

import { useState } from "react";

function App(){
  const [color, setColor] = useState("red")
  return(
    <div className="w-full h-screen" 
    style={{backgroundColor:color}}>
      <div className="bg-white flex flex-wrap justify-center gap-3 ">
        <button className="bg-green-600 p-2 w-15" onClick={()=> setColor("green")}>Green</button>
        <button className="bg-blue-600 p-2 w-15" onClick={()=> setColor("blue")}>Blue</button>
      </div>

    </div>
  )
}
export default App;