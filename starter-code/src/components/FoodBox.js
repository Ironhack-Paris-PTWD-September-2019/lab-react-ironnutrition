import React, {Component} from 'react';


class FoodBox extends Component {
    constructor(props) {
        super(props);
        this.state ={
            id: props.food.id,
            name: props.food.name,
            calories: props.food.calories,
            image: props.food.image
        }
    }
    render() {
        
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={this.state.image} alt={this.state.name}/>
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{this.state.name}</strong> <br />
                        <small>{this.state.calories} cal</small>
                        </p>
                    </div>
                    </div>
                    <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                        <input
                            className="input"
                            type="number" 
                            value="1"
                        />
                        </div>
                        <div className="control">
                        <button className="button is-info">
                            +
                        </button>
                        </div>
                    </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default FoodBox;