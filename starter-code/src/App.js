import React, { Component } from 'react';
import logo from './logo.svg';
import FoodBox from './FoodBox.js';
import foods from './foods.json';
import AddFood from './AddFood.js';
import SearchBar from './SearchBar.js';
import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  state={
    foods:foods
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
    const copyFoods2=copyFoods.filter(food => food.name.indexOf(theFood.name)>=0)
    console.log('copyFoods2',copyFoods2)
    this.setState({
      foods:copyFoods2
    })

  }

  render() {
  
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
        <SearchBar searchTheFood={this.searchFoodHandler}/>  
        <div className="columns">
          <div className="column">
            {this.state.foods.map( (food,index) => {
              return(
                <FoodBox food={food.name} calories={food.calories} image={food.image} key={food.id}/>
          
              )
            })}
          </div> 
          <div clasName="column">
            Today Food
          </div>
        </div>
        <AddFood addTheFood={this.addFoodHandler}/>
      </div>
    );
  }
}

export default App;
