import './App.css';
import foodsJason from "./foods.json"
import { useState } from 'react';
import FoodBox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodform';


function App() {
  const [foods,setFoods]= useState(foodsJason)
  return (
    <div className="App">
    <AddFoodForm foods={foods} setFoods={setFoods}/>
      {foods.map((food)=>{
        return <FoodBox food={food}/>
      })}
    </div>
  );
}

export default App;
