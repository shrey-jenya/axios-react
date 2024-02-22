import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [myData, setMyData] = useState([])
  const [isError, setIsError] = useState('')
  const [loading , setIsLoading] = useState(true)
  const apiData = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users/')
      setMyData(res.data)
      setIsError(false)
      setIsLoading(false)
    } catch (error) {
      setIsError(error.message  )
      setIsLoading(false)

    }
  }
  useEffect(() => {
    apiData()
  }, [])
  return (
    <div>
      <h1>PlaceHolder API - USERS</h1>
      {isError && <h1>{isError}</h1>}
      {
        loading ? <h1>Loading...</h1> :(
        myData.map(({ username, name, id, email, phone, website }) => (
          <div className='parent' style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px', backgroundColor: '#f9f9f9' }} key={id}>
            <h3 style={{ color: '#333', marginBottom: '5px' }}>{name}</h3>
            <h4 style={{ color: '#666', marginBottom: '5px' }}>{username}</h4>
            <p  style={{ color: '#888', marginBottom: '3px' }} >{email}</p>
            <p  style={{ color: '#888', marginBottom: '3px' }}>{phone}</p>
            <p  style={{ color: '#888', marginBottom: '3px' }}>{website}</p>
          </div>
        ))
     ) }
    </div>
  )
}

export default App
