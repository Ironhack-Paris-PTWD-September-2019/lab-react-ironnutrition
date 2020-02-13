import React, { Component } from 'react';

import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './FoodBox'
import SearchFood from './SearchFood'

class App extends Component {

  state = {
    foodsList : foods
  }

  

  render() {
    return (
      <div className="App">
        <SearchFood />
        <ul>
          {this.state.foodsList.map((food,index)=>{
            return(
            <li key={index}>
              <FoodBox name={food.name} calories={food.calories} image={food.image}/>
            </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
