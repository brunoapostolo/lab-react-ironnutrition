import './App.css';
import foodsJason from "./foods.json"
import { useState } from 'react';
import FoodBox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodform';
import SearchBar from './Components/SearchBar';


function App() {
  const [foods,setFoods]= useState(foodsJason)
  const [search,setSearch] =useState("")
  return (
    <div className="App">
      <SearchBar search={search} setSearch={setSearch}/>
      <AddFoodForm foods={foods} setFoods={setFoods}/>
      {foods
      .filter((food)=>{
          return food.name.toLowerCase().includes(search.toLowerCase())
        })
      .map((food)=>{
          return <FoodBox food={food} foods={foods} setFoods={setFoods} key={food.name}/>
      })}
    </div>
  );
}

export default App;
