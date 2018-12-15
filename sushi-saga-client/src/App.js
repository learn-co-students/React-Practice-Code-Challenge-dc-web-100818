import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import AddMoney from './components/AddMoney'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      sushis: [],
      startIndex: 0,
      eaten: [],
      budget: 100
    }
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => this.setState({sushis: data}))
  }

  moreButtonClick = () => {
    let newStartIndex = this.state.startIndex + 4
    if (newStartIndex > this.state.sushis.length - 1) {
      newStartIndex = 0
    } else if (newStartIndex > this.state.sushis.length - 4 && newStartIndex < this.state.sushis.length) {
      newStartIndex = this.state.sushis.length - 4
    }
    this.setState({startIndex: newStartIndex})
  }

  addMoneyHandler = (event) => {
    event.preventDefault()
    if (!!parseInt(event.target.money.value)) {
      let newBudget = this.state.budget + parseInt(event.target.money.value)
      this.setState({budget: newBudget })
    } else {
      alert("That's not a number!")
    }
    document.getElementById('addMoneyForm').reset()
  }
  
  sushiClick = (sushiId, price) => {
    if (this.state.budget - price >= 0) {
      let newEaten = [...this.state.eaten, sushiId]
      let newBudget = this.state.budget - price
      this.setState({eaten: newEaten, budget: newBudget})
    } else {
      alert("You don't have the monies!")
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
        sushis={this.state.sushis} 
        moreButtonClick={this.moreButtonClick} 
        startIndex={this.state.startIndex}
        sushiClick={this.sushiClick}
        eaten={this.state.eaten}         
        />
        <AddMoney addMoneyHandler={this.addMoneyHandler}/>
        <Table budget={this.state.budget} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;
