import React, { Component } from "react";



class Search extends Component {

//     constructor(props){
//       super(props);

      state = {
        searchword: ""
    }
  
   


    // handleSubmit = (event) => {
    //  event.preventDefault();

    //  this.props.addFood(this.state);

    //  this.setState ({
    //     name: "",
    //     calories: "",
    //     image:"",
    //    // id: ""
    //  })
    // }



    handleChange = (event) => {
    let { name, value, type } = event.target;
    
    // special case for checkboxes (where value is hold in checked property)
    if (type === 'checkbox') {
      value = event.target.checked;
    }
    
    // set the corresponding state to the input's value
    this.setState({[name]: value});
    }

    // filterResult = () => {
    //     this.state.foodlist.filter(items => items.includes('') );
    //    }

  render() {
    return (
      <div className="Search">
        <div>

        <form onSubmit={this.handleSubmit}>
      
            <input placeholder="search" type="text" name="searchword" value={this.state.searchword} onChange={this.handleChange} />
        
        </form>
      </div>
      </div>
    );
  }
}

export default Search;