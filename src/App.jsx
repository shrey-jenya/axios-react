import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const App = () => {
  const [items, setItems] = useState([])
  const [err, setErr] = useState('')

  const apiData = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setItems(res.data)
    } catch (err) {
      setErr(err.message)
    }
  }
  useEffect(() => {
    apiData()
  },[])
  return (
    <>
      <h1>Hello Axios...</h1>


      {err !== 0 && <h2>{err.message  }</h2> }
      <div className='table-container'>
        {
          items.map((item) => (
            <div key={item.id}>
              <table cellPadding='1' cellSpacing='1' border='1px solid black'>

          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{item.title.slice(0,15)}</td>
              <td>{item.body.slice(0,79)}</td>
            </tr>
          </tbody>
          </table>

            </div>

          ))
        }
      </div>
    </>
  )
}

export default App
