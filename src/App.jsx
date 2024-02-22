import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.css'
const App = () => {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [isError, setIsError] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
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
  // ! Handle Search
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }
  // ! filter meals 
  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <h1>Meals API - American</h1>
      <input onChange={handleSearchChange} value={searchQuery} type="search" placeholder='search...' />
      {isError !== '' && <h2>Error - {isError}</h2>}
      <div className='grid'>
        {
          loading ? <h1>Loading...</h1> :
          filteredMeals.length===0 ? <h2>No Meals Found</h2> :
            filteredMeals.map(({ idMeal, strMeal, strMealThumb }) => (
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
