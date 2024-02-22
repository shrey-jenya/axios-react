import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
const App = () => {
  const [items, setItems] = useState([])
  const [isError, setIsError] = useState('')
  const [loading,setLoading]=useState(true)
  const apiData = async () => {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/`)
      setItems(res.data)
      console.log(res.data);
      setIsError(false)
      setLoading(false)
    } catch (isError) {
      setIsError(isError.message)
      setLoading(false)

    }
  }
useEffect(()=>{
apiData()
},[])
  return (
    <>
      <h1>Placeholder API</h1>
      {isError && <h1>ERROR:{isError}</h1> }

        { loading ? <h1>Loading...</h1> : (
          items.map((item)=>(
          <p key={item.id}> {item.title}</p>
          )))
        }
    </>
  )
}
export default App
