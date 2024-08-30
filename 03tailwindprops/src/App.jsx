import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'



function App() {

  let myInfo ={
    name:"Rajan",
    age:19
  }
  return (
    <>
    <h1 className='bg-green-400 text-black p-5 rounded-xl mb-5'>Tailwind Test</h1>
    <Card username = "RajanandChai" btnText = "Chai pio Maast rahio"/>
    <Card username = "RajanandChai" />
    
  

    </>
  )
}

export default App
