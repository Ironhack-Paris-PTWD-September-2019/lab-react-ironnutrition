import React from "react";

class Foodbox extends React.Component {
  state = {
    foodNumber: 1
  };

  handleChange = e => {
    this.setState({
      foodNumber: parseInt(e.target.value)
    });
  };
  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  name="foodNumber"
                  type="number"
                  value={this.state.foodNumber}
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </div>
              <div className="control">
                <button
                  onClick={e =>
                    this.props.updateToday(this.state.foodNumber, this.props.id)
                  }
                  className="button is-info"
                >
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

export default Foodbox;
