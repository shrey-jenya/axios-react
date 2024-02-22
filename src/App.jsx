import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.css'
const App = () => {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [isError, setIsError] = useState('')
  const mealsApi = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=American')
      setMeals(response.data.meals)
      setLoading(false)
      console.log(response.data.meals)
    } catch (error) {
      setIsError(error.message)
      setLoading(false)

    }
  }
  useEffect(() => {
    mealsApi()
  }, [])
  return (
    <>
      <h1>Meals API - American</h1>
      <input type="search" placeholder='search...' />
      {isError !== '' && <h2>Error - {isError}</h2>}
      <div className='grid'>
        {
          loading ? <h1>Loading...</h1> :
            meals.map(({ idMeal, strMeal, strMealThumb }) => (
              <div className='card' key={idMeal}>
                <h4>{strMeal}</h4>
                <img className='meals-img' src={strMealThumb} alt={strMeal} />
              </div>
            ))}
      </div>
    </>
  )
}

export default App
