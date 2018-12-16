import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      sushis: [],
      currentSushis: [],
      counter: 4,
      money: 100
    }
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        let currentFour = data.slice(0, 4)
        this.setState({
          sushis: data,
          currentSushis: currentFour
        })
      })
  }

  onEat = (sushi) => {
    const copySushis = [...this.state.currentSushis]
    const currentMoney = this.state.money - sushi.price
    if (currentMoney > 0) {
      copySushis[copySushis.indexOf(sushi)] = ""
      this.setState({
        currentSushis: [...copySushis],
        money: currentMoney
      })
    }
  }

  updateCurrentSushis = () => {
    let counter = this.state.counter + 4
    let currentFour = this.state.sushis.slice(this.state.counter, counter)
    this.setState({
      currentSushis: currentFour,
      counter: counter
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer currentSushis={this.state.currentSushis} onEat={this.onEat} updateCurrentSushis={this.updateCurrentSushis}/>
        <Table money={this.state.money}/>
      </div>
    );
  }
}

export default App;
