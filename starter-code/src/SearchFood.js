import React from 'react'

class SearchFood extends React.Component {

    state = {
        search : ''
    }

    searchSpace=(event)=>{
        let keyword = event.target.value;
        this.props.searchTheDish(keyword); 
        this.setState({
            search:keyword
        })
      }

    // handleSearch = (event) => {
    //     this.props.searchTheDish(this.state.search)
    // }

    render(){
        return(
            <div>
              <input type="search" value={this.state.search} onChange={this.searchSpace}/>
            </div>
        )
    }
}

export default SearchFood