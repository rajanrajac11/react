import { useCallback, useState,useEffect,useRef } from "react";


function App(){
  //useRef hook

  const passwordRef = useRef(null)

  const[length, setLength] = useState(10)
  const[numberAllow, setNumberAllow] = useState(false)
  const[charAllow, setCharAllow] = useState(false)
  const[password, setPassword] = useState()

  const passwordGenerator = useCallback(()=>{

    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let pass = ""

    if(numberAllow) str += "0123456789"
    if(charAllow) str += "!@#$%^&*(){}"


    // generating random password 
    for(let i = 1; i<=length; i++){
      pass = pass + str.charAt(Math.floor(Math.random()*str.length))
    }

    setPassword(pass)

  }, [length, numberAllow, charAllow, setPassword])


  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  } ,[password] )

  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllow, charAllow, passwordGenerator])

  return(
    <div className="h-screen w-full bg-black flex justify-center items-center">
      <div className="bg-gray-700 p-3">
        <h2 className="text-center text-white">Password Generator</h2>
        <div>

          <div className="p-3">
            <input type="text" name="" id="" value= {password} placeholder="Password" 
            className="rounded-md p-2 w-80"
            ref={passwordRef}
            />
            <button className="text-white ml-2 bg-blue-600 p-2 rounded-md"
            onClick={copyPasswordToClipboard}>Copy</button>

          </div>

          <div className="flex flex-wrap gap-3">
            <div className="flex flex-wrap">
              <input type="range"
              max = {80}
              min = {6}
              value = {length}
              onChange={(e)=> setLength(e.target.value)}
              className="ml-3"
               />
               <label htmlFor="" className="text-white">Length {length}</label>
            </div>

            <div>
              <input type="checkbox"
              defaultChecked = {numberAllow}
              onChange = {()=>setNumberAllow((prev)=> !prev)}
              name="" id="numCheck" />
              <label htmlFor="numCheck" className="text-white">Numbers</label>
            </div>
            <div>
              <input type="checkbox"
              defaultChecked = {charAllow}
              onChange = {()=>setCharAllow((prev)=> !prev)}
              name="" id="charCheck" />
              <label htmlFor="charCheck" className="text-white">Characters</label>
            </div>


          </div>
        </div>
      </div>
    </div>
  )

}

export default App