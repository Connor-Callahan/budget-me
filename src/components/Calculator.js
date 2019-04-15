import React, { PureComponent } from 'react';

class Calculator extends PureComponent {

  state = {
    income: 0,
    net: null,
    tax: null,
    housing: null,
    transportation: null,
    utilities: null,
    insurance: null,
    savings: null,
    balacne: 0
  }

  handleChange = (event) => {
    if(this.state.income <= 0 && event.target.id != "income") {
      window.alert('Please enter income first!')
    } else {
      this.setState({
        [event.target.id]:event.target.value
      })
      this.renderFormChange()
    }
  }

  renderFormChange = () => {

  }

  render() {
    console.log(this.state.income)
    return (
      <div id="calculator">
        <form onChange={this.handleChange}>
        <label> Net Monthly Income </label>
        $<input id="income" type="number"></input>
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
        <h1> Discretionary Income: {this.state.balance}</h1>
      </div>
    );
  }

}

export default Calculator;
