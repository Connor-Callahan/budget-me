import React, { PureComponent } from 'react';

class Expenses extends PureComponent {

  render() {
    return (
      <div>
          <br></br>
      <form id="expenses" onChange={this.props.handleChange}>
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
