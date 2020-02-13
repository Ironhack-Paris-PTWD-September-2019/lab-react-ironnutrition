import React from "react";

class AddFood extends React.Component {
  state = {
    name: "",
    calories: 0,
    image: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.addFood(this.state);
    this.setState({
      name: "",
      calories: 0,
      image: ""
    });
  };

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={e => this.handleChange(e)}
        />

        <label>Calories:</label>
        <input
          type="number"
          name="calories"
          value={this.state.calories}
          onChange={e => this.handleChange(e)}
        />

        <label>Picture</label>
        <input
          type="text"
          name="image"
          checked={this.state.image}
          onChange={e => this.handleChange(e)}
        />

        <input className="button" type="submit" value="Submit" />
      </form>
    );
  }
}
export default AddFood;
