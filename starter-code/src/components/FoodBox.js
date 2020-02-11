import React, {Component} from 'react';
// import foods from './foods.json';

class FoodBox extends Component {
    state ={
        id: "1",
        name: "Pizza",
        calories: 400,
        image: "https://i.imgur.com/eTmWoAN.png"
    }
    render() {
        
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={this.state.image} />
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
                            value={this.state.id}
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