import React, { Component } from 'react';
import './App.css';
import FoodBox from './components/FoodBox.js';
import foods from './foods.json';
import AddFood from './components/AddFood.js';

class App extends Component {
  state = {
    foods : foods
  }
  
  addFoodHandler = (theFood) => {
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(theFood);

    this.setState ({
      foods:foodsCopy
    })
  }

  render() {
    return (
      <div className="App">
        <AddFood addTheFood={this.addFoodHandler}/>
        {this.state.foods.map(food => <FoodBox key={food.id} food={food}/>)}
      </div>
    );
  }
}

export default App;
