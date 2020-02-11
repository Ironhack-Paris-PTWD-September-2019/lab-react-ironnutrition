import React, { Component } from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import FoodBox from './FoodBox.js';
import foods from './foods.json';
import './App.css';
import Form from './Form.js';



class App extends Component {

  state = {
    foodlist: foods,
    formDisplay: false
  }

  formDisplay = () => {

       this.setState({
         formDisplay : !this.state.formDisplay
       })

  }
    

 addFood = (foodItems) => {
   if (!foodItems.id) {
     foodItems.id = Math.random()*1000000000000000
   }
  const copyFoodlist = [...this.state.foodlist];
  copyFoodlist.push(foodItems);
   this.setState({
     foodlist : copyFoodlist
   })
 }

//  filterResult = () => {
//   this.state.foodlist.filter(items => items.includes('') );
//  }

  render() {

    return (
      <div className="App">
        {this.state.formDisplay ? <Form addFood={this.addFood} /> : <div></div>}
          <button onClick = {this.formDisplay} >Add Food</button>
          {this.state.foodlist.map(card => { 
            return <FoodBox name={card.name} key={card.id} calories={card.calories} image={card.image}/>})}
        
      </div>
    );
  }
}

export default App;
