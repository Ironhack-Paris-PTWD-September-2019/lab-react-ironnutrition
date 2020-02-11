import React, {Component} from 'react';

class AddFood extends Component {
    state ={
        id:"",
        name:"",
        calories:0,
        image:""

    }
    handleFormSubmit = (event) => {
        event.preventDefault();

        this.props.addTheFood(this.state);

        this.setState ({
            id:"",
            name:"",
            calories:0,
            image:""
        })
    }



    handleChange = (event) => {
        const { name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>

                    <label>Calories:</label>
                    <input type="text" name="calories" value={this.state.calories} onChange={this.handleChange}/>

                    <label>Image:</label>
                    <input type="text" name="image" checked={this.state.image} onChange={this.handleChange} />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default AddFood;