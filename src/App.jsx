import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [advice, setAdvice] = useState([])
  const [loading, setLoading] = useState(true)
  const [error,setError] = useState('')

  const adviceApi = async () => {
    try {
      const res = await axios.get(`https://api.adviceslip.com/advice`)
      const advice  = res.data.slip.advice 
      setAdvice([advice])
      setLoading(false)
      setError('')
      console.log([advice])
    } catch (error) {
      console.error(error.message);
      setError(error.message)
      setLoading(false)
    }
  }
  useEffect(() => {
    adviceApi()
  }, [])
  const nextHandler  = ()=>{
    adviceApi()
    setLoading(true)
  }
  return (
    <div>
      {error &&  <h1>{error}</h1> }
      {
        loading ? <h1>Loading...</h1> : (
        <>
          <h1>{advice[0]}</h1>
         <button onClick={nextHandler}>Next Advice</button>
        </>
          )
      }
    </div>
  )
}

export default App
