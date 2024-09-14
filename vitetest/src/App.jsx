import { useCallback, useEffect, useRef, useState } from "react"

function App(){
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(true)
  const [charAllow, setCharAllow] = useState(true)
  const [password, setPassword] = useState()

  const passref = useRef(null)

  const generatePassword = useCallback(()=>{
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let pass = ""
    if(charAllow)  str += "!@#$%^&*(){}"
    if(numAllow) str+="1234567890"

    for(let i = 1; i<=length; i++){
      pass += str.charAt(Math.floor(Math.random()*str.length))
    }
    setPassword(pass)
  }, 
[length, numAllow, charAllow,setPassword])

const copyToCLipBoard = useCallback(()=>{
  passref.current?.select()
  passref.current?.setSelectionRange(0,10)
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=> {generatePassword()}, [length, numAllow, charAllow,generatePassword])
  return(
    <div className="h-screen w-full flex bg-blue-600 justify-center items-center">
      <div className="bg-green-500 rounded-xl ">
        <h2 className="text-center">Password Generator</h2>
        <div className="p-2">
          <div>
            <input type="text" name="" id=""
            placeholder="Password"
            className="p-2 w-80"
            value = {password} 
            ref={passref}/>
            <button className="bg-blue-600 p-2"
            onClick={copyToCLipBoard}>Copy</button>
          </div>

          <div className="flex flex-wrap gap-3">
            <div>
              <input type="range" name="" id="" 
              max = {90}
              min = {6}
              value={length}
              onChange={(e)=> setLength(e.target.value)}/>
              Length {length}
            </div>
            <div>
              <input type="checkbox" name="" id="numAllow"
              defaultChecked = {numAllow} 
              onClick={()=> setNumAllow((prev)=> !prev) }/>
              <label htmlFor="numAllow">Number</label>
            </div>

            <div>
              <input type="checkbox" name="" id="charAllow"
              defaultChecked = {charAllow} 
              onClick={()=> setCharAllow((prev)=> !prev) }/>
              <label htmlFor="charAllow">Character</label>
            </div>
          </div>

        </div>
      </div>
    </div>
  )

}
export default App