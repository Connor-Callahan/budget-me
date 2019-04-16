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
    let income = e.target.value * 12
    if(income < 9525) {
      tax = 10
      value = income - (income * .10)
    } else if (income > 9525 && income < 38700) {
      value = income - (income * .12)
      tax = 12
    } else if (income > 38701 && income < 82500) {
      value = income - (income * .22)
      tax = 22
    } else if (income > 82501 && income < 157500) {
      value = income - (income * .24)
      tax = 24
    } else if (income > 157501 && income < 200000) {
      value = income - (income * .32)
      tax = 32
    } else if (income > 200001 && income < 500000) {
      value = income - (income * .35)
      tax = 35
    } else if (income > 500001) {
      value = income - (income * .37)
      tax = 37
    }
    this.setState({
        income: income,
        tax: tax
    })
    this.renderFormChange((value / 12).toFixed(2))
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  renderFormChange = (value) => {
    this.setState({
      balance: value
    })
  }

  render() {
    console.log(this.state.housing)
    return (
      <div id="calculator">
      <h1> Monthly Budget Calculator </h1>
        <form id="income" onChange={this.handleIncome}>
        <label> Net Monthly Income </label>
        $<input id="income" type="number" ></input>
          <label> Estimated Tax : </label>
            % <label> {this.state.tax}</label>
        </form>
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
          <button className= "expand-expenses">➕</button>
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
        <label> Discretionary Income Remaining: $ {this.state.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</label>
      </div>
    );
  }

}

export default Calculator;
