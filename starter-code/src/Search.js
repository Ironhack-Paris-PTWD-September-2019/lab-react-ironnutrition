import React, { Component } from "react";


class Search extends Component {

    constructor(props){
        super(props);
        this.state = { 
        searchField: ''
        }
    }


    handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    this.props.sortHandler(this.state); {/* 👈 */}
    // RESET
    this.setState({
        searchField: ''
    })  
    }

    handleSearchInput = (event) => {
        this.setState({
            searchField: event.target.value
        })
        console.log(this.state.searchField);
    }



    render() {
        return (
            <div className="Search">
                <input type="text" name="searchField" value={this.state.searchField} onChange={(e) => this.handleSearchInput(e)} placeholder="Search" />
            </div>

        );
    }
}

export default Search;