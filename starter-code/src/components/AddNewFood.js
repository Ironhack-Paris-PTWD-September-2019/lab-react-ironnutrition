import React from 'react'

class AddNewFood extends React.Component {

    state = {
        name : '',
        calories : '',
        image : ''
    }

    handleFormSubmit = (event) => {
        event.preventDefault(); 
        this.props.addTheFood(this.state); 
    
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
      handleCaloriesInput = (event) => {
        this.setState({
          calories: event.target.value
        })
      }
      handleImageInput = (event) => {
        this.setState({
          image: event.target.value
        })
      }

    render(){

        return(
            <div>
            <form onSubmit={this.handleFormSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleNameInput}/>

                <label>Calories:</label>
                <input type="number" name="calories" value={this.state.calories} onChange={this.handleCaloriesInput}/>

                <label>Image:</label>
                <input type="text" name="image" checked={this.state.image} onChange={this.handleImageInput}/>

                <input type="submit" value="Submit" />
            </form>
            </div>

        )
    }
}

export default AddNewFood