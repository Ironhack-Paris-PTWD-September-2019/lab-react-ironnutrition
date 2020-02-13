import React, { Component } from 'react';
<<<<<<< HEAD

import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './FoodBox'
import SearchFood from './SearchFood'
=======
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox'
import AddNewFood from './components/AddNewFood'
import SearchFood from './components/SearchFood'
>>>>>>> 86986ad4365fb56720d6514f2dab09ec9aea9146

class App extends Component {

  state = {
<<<<<<< HEAD
    foodsList : foods
  }

  

=======
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
  
>>>>>>> 86986ad4365fb56720d6514f2dab09ec9aea9146
  render() {
    
    return (
      <div className="App">
<<<<<<< HEAD
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
=======
        <AddNewFood addTheFood={this.addFoodHandler} />
        <SearchFood searchTheDish={this.searchEngine} />
        {this.state.foodList.map((dish)=>{
          return(
            <ul>
              <li><FoodBox name={dish.name} calories={dish.calories} image={dish.image} quantity={dish.quantity}/></li>
            </ul>
          )
        })}
        
>>>>>>> 86986ad4365fb56720d6514f2dab09ec9aea9146
      </div>
    );
  }
}

export default App;
