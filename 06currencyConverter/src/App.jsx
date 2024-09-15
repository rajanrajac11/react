import { useState } from 'react'
import InputBox from './components'
import useCurrency from './hooks'

import 

function App() {

  const [amount, setAmount] = useState(0)
  const [from , setFrom] = useState("USD")
  const [to, setTo] = useState("NPR")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrency(from)
  
  return (
    <>
      <h1>Currency Converter in React</h1>
    </>
  )
}

export default App
