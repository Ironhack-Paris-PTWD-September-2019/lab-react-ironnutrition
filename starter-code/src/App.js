import React, { Component } from 'react';
import './App.css';
import FoodBox from './components/FoodBox.js';
import foods from './foods.json';

class App extends Component {
  state = {
    foods : foods
  }
  render() {
    return (
      <div className="App">

        {this.state.foods.map(food => <FoodBox key={food.id} food={food}/>)}
      </div>
    );
  }
}

export default App;
