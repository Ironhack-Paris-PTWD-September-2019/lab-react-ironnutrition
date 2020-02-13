import React, { Component } from 'react';
import FoodBox from './FoodBox.js';
import foods from './foods.json';
import AddFood from './AddFood.js';
import SearchBar from './SearchBar.js';
import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  state={
    foods:foods,
    foodMenu:[]
  }
  addFoodHandler=(theFood)=>{
    const copyFoods=[...this.state.foods];
    copyFoods.push(theFood);
    this.setState({
      foods:copyFoods
    })
  }

  searchFoodHandler=(theFood)=>{
    console.log('searchFoodHandler', theFood);
    
    const copyFoods=[...this.state.foods];

    //const copyFoods2=copyFoods.filter(food => food.name===theFood.name)
    const copyFoods2=copyFoods.filter(food => food.name.toLowerCase().indexOf(theFood.toLowerCase())!==-1)
    this.setState({
      foods:copyFoods2
    })
    
  }

  updateFoodHandler=(foodName,foodQties,foodCalories)=>{
      var copyFoodMenu=[...this.state.foodMenu]
      copyFoodMenu.push({name:foodName,qties:foodQties,calories:foodCalories})
      console.log('copyFoodMenu',copyFoodMenu)
      this.setState({
        foodMenu:copyFoodMenu
      })
  }

  render() {
    var totalCalories=0;
    return (
      <div className="App">
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
        {/*<FoodBox food="Pizza"/>*/}
        <div className="add-margin"><SearchBar searchTheFood={this.searchFoodHandler} /></div>
        <div className="add-margin"><AddFood addTheFood={this.addFoodHandler}/></div>
        <div className="columns is-mobile ">
          <div className="column add-margin">
            {this.state.foods.map( (food,index) => {
              return(
                <FoodBox food={food.name} calories={food.calories} image={food.image} key={food.id} updateFood={this.updateFoodHandler}/>
              )
            })}
          </div> 
          <div className="column add-margin">
            Today Food
            {this.state.foodMenu.map((food,index) => {
              totalCalories+=food.qties*food.calories;
              return(
              <div key={index}> {food.qties} {food.name} = {food.qties*food.calories} cal</div>
              )
            })}
            <div>Total:{totalCalories} cal </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
