import { useState,useCallback, useEffect, useRef } from 'react'

function App() {
  let passwordRef = useRef(null)

  const copyPasswordToClipboard = ()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(1,5)
    
    window.navigator.clipboard.writeText(password)
  }

  const [length, setLength] = useState(10)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState() 

  const generatePassword = useCallback(()=> {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let pass = ""
    if(numAllow) str += "1234567890"
    if(charAllow) str += "!@#$%^&*(){}"
    
    for(let i =1; i<= length; i++){
      pass += str.charAt(Math.floor(Math.random()*str.length))
      
    }
    setPassword(pass)
  }, [length, numAllow, charAllow, setPassword])

useEffect(()=>{
  generatePassword()
},[length, numAllow, charAllow]
)

  return (
    <div className='h-screen w-full bg-black flex justify-center items-center'>
      <div className='flex flex-wrap bg-green-500'>
        <div className='flex flex-wrap justify-center items-center p-3'>
          <div className=''>
          <h1 className='text-center '>Password Generator</h1>
            <div className='p-3'>
              <input type="text" name="" id=""
              placeholder='Password'
              value = {password}
              className='w-80 p-1'
              ref={passwordRef}
              />
              <button className='bg-blue-600 p-1' 
              onClick={copyPasswordToClipboard}>Copy</button>
            </div>

            <div className='flex flex-wrap justify-center items-center gap-3 p-3'>
              <div>
                <input type="range" 
                max={90}
                min = {6}
                value = {length}
                onChange={(e)=> setLength(e.target.value)} />
                <label htmlFor="">Length {length}</label>
              </div>
              <div>
                <input type="checkbox" name="" id="numCheck"
                defaultChecked = {numAllow}
                onChange={()=> setNumAllow((prev)=> !prev)} />
                <label htmlFor="numCheck">Numbers</label>
              </div>

              <div>
                <input type="checkbox" name="" id="charCheck"
                defaultChecked = {charAllow}
                onChange={()=> setCharAllow((prev)=> !prev)} />
                <label htmlFor="charCheck">Characters</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default App
