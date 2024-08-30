import { useState } from "react"


function App() {
  const [color, setColor] = useState("aqua")

 

  return (
  
     <div className="w-full h-screen duration-200"
     style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2">
        <div className="flex flex-wrap gap-3 justify-center shadow-lg bg-white px-4 py-3 rounded-2xl "> 
          <button className="bg-red-600 p-2 rounded-xl w-20 text-white"
          onClick={()=> setColor("red")}>Red</button>

          <button className="bg-green-500 p-2 rounded-xl w-20 text-white"
           onClick={()=> setColor("green")}
          >Green</button>
          <button className="bg-blue-500 p-2 rounded-xl w-20 text-white"
           onClick={()=> setColor("blue")}
          >Blue</button>


          
        </div>
      </div>
     </div>
    
  )
}

export default App
