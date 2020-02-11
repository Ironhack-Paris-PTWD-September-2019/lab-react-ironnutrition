import React, { Component } from 'react';
import './App.css';
import json from './foods.json';
import FoodBox from './FoodBox.js';
import AddFood from './AddFood.js';
import 'bulma/css/bulma.css';


class App extends Component {
  state = {
    foods:json
}
addFoodHandler = (theFood) => {
  const foodsCopy = [...this.state.foods]; // copy!
  foodsCopy.push(theFood); // add
  this.setState({
    foods: foodsCopy
  })
}
  render() {
    return (
      <div className="App">
    {this.state.foods.map(food => (
          <FoodBox img={food.image} name={food.name} calories={food.calories}/>
      ))}
  <AddFood addTheFood={this.addFoodHandler}/>
      </div>
    );
  }
}
export default App;