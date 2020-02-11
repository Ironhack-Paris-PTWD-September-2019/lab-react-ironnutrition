import React from 'react';
class AddFood extends React.Component {
    state = {
        name:"",
        calories:"",
        image:""
    }
    handleFormSubmit= (event) => {
        event.preventDefault();
        this.props.addTheFood(this.state);
        this.setState({
            name:"",
            calories:"",
            image:""
        })
    }

    handleChange=(event)=>{
        let {name,value} = event.target;
        this.setState({[name]:value})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Food:</label>
                    <input type="text" name="name" value={this.state.name} onChange={event => this.handleChange(event)}/>
                    <label>Calories:</label>
                    <input type="number" name="calories" value={this.state.calories} onChange={event => this.handleChange(event)}/>
                    <label>Image:</label>
                    <input type="text" name="image" value={this.state.image} onChange={event => this.handleChange(event)}/>
                    
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default AddFood;