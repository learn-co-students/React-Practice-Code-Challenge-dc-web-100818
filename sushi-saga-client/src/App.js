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
      currentSushi: [],
      currentIndex: 4,
      budget: 100,
      eaten: []
    }
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(data => this.setState({ sushis: data, currentSushi: data.slice(0, 4) })
    )
  }

  moreSushi = (event) => {
    let newIndex = this.state.currentIndex + 4
    this.setState({
      currentIndex: newIndex,
      currentSushi: this.state.sushis.slice(newIndex, newIndex + 4)
    })
  }

  eatSushi = (sushi) => {
    let canAfford = this.state.budget >= sushi.price

    const alreadyEaten = this.state.eaten.find(s => s.id === sushi.id)
      if (!alreadyEaten && canAfford) {
        this.setState({
          eaten: [...this.state.eaten, sushi],
          budget: this.state.budget - sushi.price
        })
      }
    }


  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.currentSushi}
          moreSushi={this.moreSushi}
          eatSushi={this.eatSushi}
          eaten={this.state.eaten}
          />
        <Table budget={this.state.budget} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;
