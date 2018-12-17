import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state = {
      sushis: [],
      eaten: [],
      currentStart: 0,
      budget: 100
    }
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(json => {
      this.setState({ sushis: json})
    })
  }

  moreSushis = () => {
    this.setState({
      currentStart: this.state.currentStart + 4
    })
  }

  eatSushi = (sushi) => {
    if (this.state.budget >= sushi.price && !this.state.eaten.includes(sushi)){
      this.setState({
        eaten: [...this.state.eaten, sushi],
        budget: (this.state.budget - sushi.price)
      })
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} currentStart={this.state.currentStart} moreSushis={this.moreSushis} eatSushi={this.eatSushi} eaten={this.state.eaten} />
        <Table budget={this.state.budget} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;
