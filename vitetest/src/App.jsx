import { useState } from 'react'

function App() {
  const [color, setColor] = useState("aqua")


  return (
    <div className='w-full h-screen'
    style={{backgroundColor:color}}>
      <div className='flex justify-center bottom-14'>
        <div className='flex flex-wrap bg-white gap-3 p-2 rounded-xl text-white justify-center'>
          <button className='bg-green-600 p-2 w-20 rounded-xl' onClick={()=> setColor("Green")}>Green</button>
          <button className='bg-blue-600 p-2 rounded-xl w-20'onClick={()=> setColor("Blue")}>Blue</button>
          <button className='bg-red-600 p-2 rounded-xl w-20' onClick={()=> setColor("Red")}>Red</button>
          <button className='bg-pink-500 p-2 rounded-xl w-20' onClick={()=> setColor("Pink")}>Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
