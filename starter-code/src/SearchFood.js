import React from 'react'

class SearchFood extends React.Component {

    state = {
        input : ''
    }

    handleWordInput = (e) =>{
        this.setState({
            input : e.target.value
        })
      }

render() {

    return (
        <input type='search' value ={this.state.input} onChange={this.handleWordInput}/>
    )
}

}

export default SearchFood