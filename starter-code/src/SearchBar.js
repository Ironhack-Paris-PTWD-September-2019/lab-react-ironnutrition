import React from 'react';
class SearchBar extends React.Component {
    state = {
        name:"",
        calories:"",
        image:""
    }
    
    /*handleFormSubmit= (event) => {
        console.log('handleFormSubmit')
        event.preventDefault();

        this.props.searchTheFood(this.state);

        // reset
        this.setState({
            name:"",
            calories:"",
            image:""
        })
    }*/

    handleChange=(event)=>{
        console.log('event',event)
        //let {name,value,type} = event.target;
        this.props.searchTheFood(this.state);
        this.setState({name:event.target.value})
    }
    
    render(){
        return(
            <div>
                    <label>Search:</label>
                    {/*<input type="text" name="name" value={this.state.name} onChange={event => this.handleChange(event)}/>*/}
                    <input type="search" value={this.state.name} onChange={this.handleChange}/>
                    {/*<button>Submit</button>*/}

            </div>
        )
    }
}
export default SearchBar;