import React from 'react'

class DisplayFood extends React.Component{

    state = {
        name : '',
        calories : '',
        quantity : ''
    }

  handleQuantityInput = (event) => {
    this.setState({
      quantity: event.target.value
    })
  }

  displayTodaysFood = (event) => {
    event.preventDefault();
  }
}

export default DisplayFood