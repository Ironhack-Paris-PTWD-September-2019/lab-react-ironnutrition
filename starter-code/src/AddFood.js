import React, { Component } from 'react';
class AddFood extends Component {
  constructor(props){
      super(props);
      this.state = { 
        name: '',
        calories: '',
        image: ''
      }
  }
  handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    this.props.addTheFood(this.state); {/* 👈 */}
    // RESET
    this.setState({
        name: '',
        calories: '',
        image: ''
    })  
  }
  handleNameInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleCalorieInput = (event) => {
    this.setState({
      calories: event.target.value
    })
  }
  handleImgInput = (event) => {
    this.setState({
        image: event.target.value
    })
  }
  render(){
    return (
        <div className="AddFood">
         <form onSubmit={this.handleFormSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleNameInput(e)} />
            <label>Calories:</label>
            <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleCalorieInput(e)} />
            <label>img:</label>
            <input type="text" name="image" checked={this.state.image} onChange={(e) => this.handleImgInput(e)} />
            <button  value="Submit">enregistrer</button>
        </form>
    </div>
    )
  }
}
export default AddFood;