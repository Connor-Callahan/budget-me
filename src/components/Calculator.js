import React, { PureComponent } from 'react';

class Calculator extends PureComponent {

  render() {
    return (
      <div id="calculator">
        <form>
        <label> Net Monthly Income </label>
        $<input type="number"></input>
          <label> Deduct </label>
            %<input type="number"></input>
          <label> For Tax </label>
            <br></br>
        <label> Housing </label>
          <input type="number"></input>
            <br></br>
        <label> Utilities </label>
          <input type="number"></input>
            <br></br>
        <label> Insurance </label>
          <input type="number"></input>
            <br></br>
        <label> Transportation </label>
          <input type="number"></input>
            <br></br>
        <label> Savings </label>
          <input type="number"></input>
            <br></br>
        <label> Misc. </label>
          <input type="number"></input>
        </form>
      </div>
    );
  }

}

export default Calculator;
