import React from 'react';

class Counter extends  React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }

  IncrementItem = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  }
  DecreaseItem = () => {
    if (this.state.quantity >= 2)
      this.setState({ quantity: this.state.quantity - 1 });
    else
      this.setState({ quantity: 1 });
  }

  render() {
    return (
        <div className="input-group quantity-align">
            <div className="input-group-prepend">
              <button className="btn btn-outline-secondary" type="button" onClick={this.DecreaseItem}> - </button>
            </div>
            <input type="text" 
              className="form-control quantity-input" 
              value = { this.state.quantity }
            />
            <div className="input-group-prepend">
              <button className="btn btn-outline-secondary" type="button" onClick={this.IncrementItem}> + </button>
            </div>
        </div>
    );
  }
}

export default Counter;