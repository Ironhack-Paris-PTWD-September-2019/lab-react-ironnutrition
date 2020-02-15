import React from 'react';
class FoodBox extends React.Component {
    state={
        foodQties:1
    }

    updateFoodQties=(event) => {
        this.setState({
            foodQties:event.target.value
        })
    }
    render(){
        return(
       
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={this.props.image} alt={this.props.food} />
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{this.props.food}</strong> <br />
                        <small>{this.props.calories}</small>
                        </p>
                    </div>
                    </div>
                    <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                        <input
                            className="input"
                            type="number" 
                            value={this.state.foodQties}
                            onChange={event => this.updateFoodQties(event)}
                        />
                        </div>
                        <div className="control">
                        <button className="button is-info" onClick={(event)=>this.props.updateFood(this.props.food,this.state.foodQties,this.props.calories)}>
                            +
                        </button>
                        </div>
                    </div>
                    </div>
                </article>
                </div>
                
           
        )
    }
}
export default FoodBox;