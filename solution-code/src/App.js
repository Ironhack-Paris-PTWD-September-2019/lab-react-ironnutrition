import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import 'bulma/css/bulma.css';

import json from './foods.json';

import FoodBox from './components/FoodBox.js'
import AddFood from './components/AddFood';

class App extends Component {
  state = {
    foods: json,
    addingFood: false,
    query: '',
    chart: [] // [ {id: '1', qty: 3} ]
  }

  addFood = (newFood) => {
    if (!('id' in newFood)) {
      newFood.id = Math.floor(Math.random()*100000)
    }

    this.setState({
      foods: [...this.state.foods, newFood],
      addingFood: false
    });
  }

  handleQuery = (ev) => {
    this.setState({
      query: ev.target.value
    })
  }

  addToChart = (newItem) => {
    const chartCopy = [...this.state.chart];

    //
    // 1. search the presence of already present newItem
    //    - if found: splice it, make a copy, add qty to previous one, push it
    //    - otherwise, push it
    //

    const itemIndex = this.state.chart.findIndex(item => item.id === newItem.id)
    if (itemIndex >= 0) {
      chartCopy.splice(itemIndex, 1);
      const itemCopy = {...this.state.chart[itemIndex]}
      itemCopy.qty += newItem.qty;
      chartCopy.push(itemCopy);
    } else {
      chartCopy.push(newItem)
    }

    this.setState({
      chart: chartCopy
    })
  }

  render() {
    let foods = this.state.foods;
    const query = this.state.query;

    if (query) {
      foods = foods.filter(food => food.name.includes(query))
    }

    return (
      <div className="App">
        {/* Iteration #3 */}
        {
          this.state.addingFood ?
          <AddFood onAdd={this.addFood} />
          :
          <button onClick={ev => this.setState({addingFood: true})}>Add Food</button>
        }

        {/* Iteration #4 */}
        <input type="search" value={this.state.query} onChange={this.handleQuery} />

        {/* Iteration #2 */}
        {foods.map((food, index) => <FoodBox onChart={this.addToChart} {...food} key={food.id} />)}

        {/* Iteration #5 */}
        <h2>Today's food</h2>
        <ul>
        {this.state.chart.map(item => {
          const food = foods.find(food => food.id === item.id)
          return (
            <li key={item.id}>
              {food.name} x{item.qty}
            </li>
          )
        })}
        </ul>
      </div>
    );
  }
}

export default App;
