import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox'
import AddNewFood from './components/AddNewFood'

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

  
  render() {
    console.log('yoooooo' , this.state.foodList)
    return (
  
      <div className="App">
        <AddNewFood addTheFood={this.addFoodHandler}/>
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
