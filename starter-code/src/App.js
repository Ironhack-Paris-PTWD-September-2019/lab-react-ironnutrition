import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox'
import AddNewFood from './components/AddNewFood'
import SearchFood from './components/SearchFood'

class App extends Component {

  state = {
    foodList : foods
  }

  addFoodHandler = (theFood) => {
    const foodsCopy = [...this.state.foodList];
    foodsCopy.push(theFood); 
    this.setState({
      foodList: foodsCopy
    })
  }

  searchEngine = (theletters) => {
    const foodsCopy = [...this.state.foodList];
    let filteredList = foodsCopy.filter(theFood => {
      return theFood.name.toLowerCase().indexOf(theletters.toLowerCase()) !== -1
    })
    
    this.setState({
      foodList: filteredList
    })
  }
  
  render() {
    
    return (
      <div className="App">
        <AddNewFood addTheFood={this.addFoodHandler} />
        <SearchFood searchTheDish={this.searchEngine} />
        {this.state.foodList.map((dish)=>{
          return(
            <ul>
              <li><FoodBox name={dish.name} calories={dish.calories} image={dish.image} quantity={dish.quantity}/></li>
            </ul>
          )
        })}
        
      </div>
    );
  }
}

export default App;
