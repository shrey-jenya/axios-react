import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
const App = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState('')
  const apiData = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setItems(res.data)
      setLoading(false)
    } catch (err) {
      setErr(err.message)
      setLoading(false)

    }
  }
  useEffect(() => {
    apiData()
  }, [])
  return (
    <>
      <h1>Hello Axios...</h1>
      {err !== 0 && <h2>{err.message}</h2>}
      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          {loading ? <h1>Loading...</h1> : 
          <tbody>
          {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title.slice(0,25)}</td>
                <td>{item.body.slice(0,139)}</td>
              </tr>
            ))}
            </tbody>
            }
          
        </table>
      </div>
    </>
  )
}
export default App
