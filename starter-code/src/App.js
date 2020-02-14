import React, { Component } from 'react';
import './App.css';
import json from './foods.json';
import FoodBox from './FoodBox.js';
import AddFood from './AddFood.js';
import 'bulma/css/bulma.css';
import Search from './Search';


class App extends Component {
  state = {
    foods: json
  }

  addFoodHandler = (theFood) => {
    const foodsCopy = [...this.state.foods]; // copy!
    foodsCopy.push(theFood); // add
    this.setState({
      foods: foodsCopy
    })  
  }

  // handleDisplayForm = (event) => {
  //   return (
  //     <AddFood addTheFood={this.addFoodHandler} style={display=block;} />
  //   )
  // }

  sortHandler = (theSearchedFood) => {
    let foodSortCopy = [];
    this.state.foods.map(theFood => {   
      if (theFood.name.includes(theSearchedFood) === true) {
        foodSortCopy.push(theFood);
      }
      console.log(foodSortCopy);
      // return foodSortCopy;
    })

    // const foodSortCopy = this.state.foods.filter(theFood => theFood.name.includes(theSearchedFood));

    this.setState({
      foods: foodSortCopy
    }) 

    
  }

  render() {
    return (
      <div className="App">
        <Search onChange={this.sortHandler} />
        {this.state.foods.map((food, index) => (
          <FoodBox key={index} image={food.image} name={food.name} calories={food.calories} />
        ))}
        <button onClick={(event) => this.handleDisplayForm()}>Add Foods</button>
        <AddFood addTheFood={this.addFoodHandler} />
      </div>
    );
  }
}
export default App;