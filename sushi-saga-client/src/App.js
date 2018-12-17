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
      renderSushis: [],
      index: 0,
      eatenSushis: [],
      totalCash: 50
    }
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        this.setState({
          sushis: data
        }, this.sliceSushis)
      })
  }

  sliceSushis = () => {
    console.log('test')
    let currentIndex = this.state.index
    
    this.setState({
      renderSushis: this.state.sushis.slice(currentIndex, currentIndex + 4)  
    })
  }

  moreSushi = () => {
    let newIndex = this.state.index + 4

    this.setState({
      index: newIndex
    }, this.sliceSushis)
  }

  eatenSushi = (sushi) => {
    let findSushis = this.state.renderSushis.find(su => {
      return su === sushi
    })
    this.setState({
      eatenSushis: [...this.state.eatenSushis, findSushis ],
      totalCash: this.state.totalCash - sushi.price
    })
  } 

  render() {
    return (
      <div className="app">
        <SushiContainer eatenSushi={this.eatenSushi} allEatenSushis={this.state.eatenSushis}  sushis={this.state.renderSushis} moreSushi={this.moreSushi}  />
        <Table totalCash={this.state.totalCash} eatenSushis={this.state.eatenSushis} />
      </div>
    );
  }
}

export default App;