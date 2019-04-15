import React, { PureComponent } from 'react';

class Calculator extends PureComponent {

  state = {
    income: 0,
    net: 0,
    tax: 0,
    housing: 0,
    transportation: 0,
    utilities: 0,
    insurance: 0,
    savings: 0,
    balance: 0
  }

  handleIncome = (e) => {
    let value = null
    let tax = 0
    let income = e.target.value
    if(income < 9525) {
      tax = 10
      value = income - (income * .10)
    } else if (income > 9525 && income < 38700) {
      value = income - (income * .12)
      tax = 10
    } else if (income > 38701 && income < 82500) {
      value = income - (income * .22)
      tax = 10
    } else if (income > 82501 && income < 157500) {
      value = income - (income * .24)
      tax = 10
    } else if (income > 157501 && income < 200000) {
      value = income - (income * .32)
      tax = 10
    } else if (income > 200001 && income < 500000) {
      value = income - (income * .35)
      tax = 10
    } else if (income > 500001) {
      value = income - (income * .37)
      tax = 10
    }
    this.setState({
        income: income,
        tax: tax
    })
    this.renderFormChange(value)
  }

  handleChange = (e) => {
    
  }

  renderFormChange = (value) => {
    this.setState({
      balance: value
    })
  }

  render() {
    return (
      <div id="calculator">
      <h1> Monthly Budget Calculator </h1>
        <form onChange={this.handleIncome}>
        <label> Net Monthly Income </label>
        $<input id="income" type="number" ></input>
          <label> Estimatd Tax : </label>
            %<label >{this.state.tax}</label>
        </form>
            <br></br>
        <form>
        <label> Housing </label>
          <input id="housing" type="number"></input>
            <br></br>
        <label> Utilities </label>
          <input id="utilities" type="number"></input>
            <br></br>
        <label> Insurance </label>
          <input id="insurance" type="number"></input>
            <br></br>
        <label> Transportation </label>
          <input id="transportation" type="number"></input>
            <br></br>
        <label> Savings </label>
          <input id="savings" type="number"></input>
            <br></br>
        <label> Misc. </label>
          <input id="misc" type="number"></input>
        </form>
        <label> Discretionary Income: {this.state.balance}</label>
      </div>
    );
  }

}

export default Calculator;
