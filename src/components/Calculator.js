import React, { PureComponent } from 'react';
import Expenses from './Expenses'

class Calculator extends PureComponent {

  state = {
    income: null,
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
        tax: tax,
        net: (value / 12).toFixed(2)
    })
    this.renderFormChange((value / 12).toFixed(2))
  }

  handleChange = (e) => {
    if(this.state.income != null) {
      this.setState({
        [e.target.id]: e.target.value
      })
    } else {
      alert('Please enter an income!')
    }
    let value = null
    if(this.state[e.target.id] < e.target.value) {
      value = this.state.net - this.state[e.target.id]
    } else {
      value = this.state.net + this.state[e.target.id]
    }
    console.log(value)
    this.renderFormChange(value)
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
        <form id="income" onChange={this.handleIncome}>
        <label> Net Monthly Income </label>
        $<input id="income" type="number" ></input>
          <label> Estimated Tax : </label>
            % <label> {this.state.tax}</label>
        </form>
        <Expenses handleChange={this.handleChange}/>
        <label> Discretionary Income Remaining: $ {this.state.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</label>
      </div>
    );
  }

}

export default Calculator;
