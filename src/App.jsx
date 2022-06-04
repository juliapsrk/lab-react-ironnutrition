import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foodsJSON from './foods.json';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';
import FoodSearch from './components/FoodSearch';

function App() {
  const [foods, setFoods] = useState(foodsJSON);
  const [showForm, setShowForm] = useState(false);
  const [todaysFood, setTodaysFood] = useState([]);

  const handleAddFood = (event) => {
    event.preventDefault();
    const [name, calories, image] = event.target.querySelectorAll('input');

    const newFood = {
      name: name.value,
      calories: calories.value,
      image: image.value,
      quantity: 0,
    };

    setFoods([...foods, newFood]);

    handleShowForm();
  };

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const handleSearchFood = (searchText) => {
    setFoods(
      foodsJSON.filter((food) => food.name.toLowerCase().includes(searchText))
    );
  };

  const handleSelectFood = (newFood) => {
    if (newFood.quantity === 0) return;

    setTodaysFood([...todaysFood, newFood]);
  };

  const handleRemove = (foodToRemove) => {
    setTodaysFood(todaysFood.filter((food) => food !== foodToRemove));
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">IronNutrition</h1>

        <button onClick={handleShowForm}>Add Food</button>
        {showForm && <FoodForm onAddFood={handleAddFood} />}

        <FoodSearch onSearch={handleSearchFood} />

        <div className="columns">
          <div className="column">
            {foods.map((food, index) => {
              return (
                <div className="box" key={index}>
                  <FoodBox
                    name={food.name}
                    calories={food.calories}
                    image={food.image}
                    onSelect={handleSelectFood}
                  />
                </div>
              );
            })}
          </div>
          <div className="column content">
            <h2 className="subtitle">Today's foods</h2>
            <ul>
              {todaysFood.map((food, index) => {
                return (
                  <li key={index}>
                    {food.quantity} {food.name} = {food.calories} cal{' '}
                    <span
                      className="removeBtn"
                      onClick={() => handleRemove(food)}
                    >
                      Remove
                    </span>
                  </li>
                );
              })}
            </ul>
            <strong>
              Total:{' '}
              {todaysFood.reduce(
                (prev, acc) => prev + acc.calories * acc.quantity,
                0
              )}{' '}
              cal
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
