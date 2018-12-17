import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state = {
      allSushi: [],
      budget: 100,
      tableSushiId: 4,
      eatenSushi: []
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer allSushi={this.state.allSushi} tableSushiId={this.state.tableSushiId} moreSushi={this.moreSushi} buySushi={this.buySushi} eatenSushi={this.state.eatenSushi}/>
        <Table budget={this.state.budget} eatenSushi={this.state.eatenSushi} />
      </div>
    );
  }

  componentDidMount() {
    fetch(`${API}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ allSushi: data})
      })
  }

  buySushi = (sushi) => {
    if (this.state.budget >= sushi.price) {
      let newBudget = this.state.budget - sushi.price
      let eaten = [sushi]
      this.state.eatenSushi.forEach(obj => eaten.push(obj))
      this.setState({ budget: newBudget, eatenSushi: eaten })
    }
  }

  moreSushi = () => {
    let sushiId = this.state.tableSushiId + 4
    this.setState({tableSushiId: sushiId})
  }

}

export default App;
