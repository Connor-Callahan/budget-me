import React, { PureComponent } from 'react';

class Expenses extends PureComponent {

  state = {
    net: 0,
    tax: 0,
    housing: 0,
    transportation: 0,
    utilities: 0,
    insurance: 0,
    savings: 0,
    balance: 0
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <div>
          <br></br>
      <form id="expenses" onChange={this.handleChange}>
      <div className="expense-input">
      <label> Housing $</label>
        <input id="housing" type="number"></input>
          <br></br>
      </div>
      <div className="expense-input">
      <label> Utilities $</label>
        <input id="utilities" type="number"></input>
          <br></br>
      </div>
      <div className="expense-input">
      <label> Insurance $</label>
        <input id="insurance" type="number"></input>
          <br></br>
      </div>
      <div className="expense-input">
      <label> Transportation $</label>
        <input id="transportation" type="number"></input>
          <br></br>
      </div>
      <div className="expense-input">
      <label> Savings $</label>
        <input id="savings" type="number"></input>
          <br></br>
      </div>
      <div className="expense-input">
      <label> Misc. $</label>
        <input id="misc" type="number"></input>
      </div>
      </form>
      </div>
    );
  }

}

export default Expenses;
