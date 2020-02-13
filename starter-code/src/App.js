import React, { Component } from "react";
import logo from "./logo.svg";
import "bulma/css/bulma.css";
import "./App.css";
import foods from "./foods.json";
import Foodbox from "./components/Foodbox.js";
import AddFood from "./components/AddFood.js";

class App extends Component {
  state = {
    foodList: foods,
    showForm: false,
    search: "",
    todayFood: []
  };

  toggleFormFood = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  };

  addFood = food => {
    food.id = Math.floor(Math.random() * 1000000000000);
    this.setState({
      foodList: [...this.state.foodList, food]
    });
    console.log(food);

    this.toggleFormFood();
  };

  handleSearch = event => {
    this.setState({
      search: event.target.value
    });
  };

  addFoodtoToday = (qty, foodID) => {
    let listOfFood = [...this.state.todayFood];
    let ind = this.state.foodList.findIndex(x => x.id === foodID);
    if (listOfFood.findIndex(x => x.food.id === foodID) === -1) {
      listOfFood.push({
        food: this.state.foodList[ind],
        quantity: qty
      });
    } else {
      listOfFood[
        listOfFood.findIndex(x => x.food.id === foodID)
      ].quantity += qty;
    }

    this.setState({
      todayFood: listOfFood
    });
  };

  deleteFoodToday = id => {
    let ind = this.state.todayFood.findIndex(x => x.food.if === id);
    let newListOfFood = [...this.state.todayFood];
    newListOfFood.splice(ind, 1);

    this.setState({
      todayFood: newListOfFood
    });
  };
  render() {
    return (
      <div className="App">
        <h1 className="title">IronNutrition</h1>
        <div>
          <input
            type="text"
            className="input search-bar"
            name="search"
            placeholder="Search"
            value={this.state.search}
            onChange={e => {
              this.handleSearch(e);
            }}
          />
        </div>

        <button
          className="button addFood"
          onClick={() => this.toggleFormFood()}
        >
          Add Food
        </button>
        {this.state.showForm ? <AddFood addFood={this.addFood} /> : <div></div>}
        <div className="foods">
          <div className="box left">
            {this.state.foodList
              .filter(food => {
                return food.name
                  .toUpperCase()
                  .includes(this.state.search.toUpperCase());
              })
              .map(food => (
                <Foodbox
                  key={food.id}
                  {...food}
                  updateToday={this.addFoodtoToday}
                />
              ))}
          </div>
          <div className="box right">
            <h1>Today's Food</h1>
            <div className="todayFood-box">
              {this.state.todayFood.map(item => {
                return (
                  <div key={item.food.id} className="foodItem-list">
                    <p key={item.food.id}>
                      {item.quantity} {item.food.name} ={" "}
                      {parseInt(item.food.calories) * item.quantity} cal
                    </p>
                    <img
                      key={item.food.id}
                      style={{ marginLeft: "10px", cursor: "pointer" }}
                      onClick={() => this.deleteFoodToday(item.food.id)}
                      src="./trash.png"
                    />
                  </div>
                );
              })}
              <p style={{ fontWeight: "bolder" }}>
                Total :{" "}
                {this.state.todayFood.reduce(
                  (acc, currValue) =>
                    acc +
                    parseInt(currValue.food.calories) * currValue.quantity,
                  0
                )}{" "}
                cal
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
