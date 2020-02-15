import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox'
import AddNewFood from './components/AddNewFood'
import SearchFood from './components/SearchFood'

class App extends Component {

  state = {
    foodList : foods,
    foodsToDisplay : [],
    total : []
  }

  addFoodHandler = (theFood) => {
    const foodsCopy = [...this.state.foodList];
    foodsCopy.push(theFood); 
    this.setState({
      foodList: foodsCopy
    })
  }

  searchEngine = (theletters) => {
    //const foodsCopy = [...this.state.foodList];
    let filteredList = foods.filter(theFood => {
      return theFood.name.toLowerCase().indexOf(theletters.toLowerCase()) !== -1;
    })
    
    this.setState({
      foodList: filteredList
    })
  }

  displayFoodHandler = (theFood) => {
    const displayCopy = [...this.state.foodsToDisplay]
    displayCopy.push(theFood)
    this.setState({
      foodsToDisplay: displayCopy
    })
  }
  
  render() {
    var totalCalories=0;
    return (
      <div className="App">
        <AddNewFood addTheFood={this.addFoodHandler} />
        <SearchFood searchTheDish={this.searchEngine} />
        {this.state.foodList.map((dish , index)=>{
          return(
            <ul>
              <li key={index}>
                <FoodBox name={dish.name} calories={dish.calories} image={dish.image} quantity={dish.quantity} displayTheFood={this.displayFoodHandler}/>
                </li>
            </ul>
          )
        })}
        {this.state.foodsToDisplay.map(dish => {
          totalCalories+=dish.quantity * dish.calories;
          return(
            <div className="display">
              <p>{dish.quantity}  {dish.name}  =  {dish.quantity * dish.calories} cal</p>
              
            </div>
          )
        })}
        Total:{totalCalories}
      </div>
    );
  }
}

export default App;