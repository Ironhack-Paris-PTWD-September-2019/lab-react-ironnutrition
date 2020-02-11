import React, { Component } from "react";



class Form extends Component {

    constructor(props){
      super(props);

      this.state = {
        name: "",
        calories: "",
        image: "",
       // id: 
    }
  }
   


    handleSubmit = (event) => {
     event.preventDefault();

     this.props.addFood(this.state);

     this.setState ({
        name: "",
        calories: "",
        image:"",
       // id: ""
     })
    }

    handleChange = (event) => {
    let { name, value, type } = event.target;
    
    // special case for checkboxes (where value is hold in checked property)
    if (type === 'checkbox') {
      value = event.target.checked;
    }
    
    // set the corresponding state to the input's value
    this.setState({[name]: value});
    }

  render() {
    return (
      <div className="Form">
        <div>

        <form onSubmit={this.handleSubmit}>
          <label>Food Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>Calories:
            <input type="number" name="calories" value={this.state.calories} onChange={this.handleChange} />
          </label>
          <label>Image url:
            <input type="text" name="image" value={this.state.image} onChange={this.handleChange} />
          </label>
            
          <input type="submit" value="Submit" />
        </form>
      </div>
      </div>
    );
  }
}

export default Form;
