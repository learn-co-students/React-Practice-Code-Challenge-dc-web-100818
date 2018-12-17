import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state = {
      allSushi: [],
      currentFour: [],
      sushiEaten: [],
      moneyLeft: 75
    }
  }

  componentDidMount(){
    fetch(API).then(response => response.json())
    .then(sushiData => this.setState({allSushi: sushiData, currentFour: sushiData.slice(0, 4)}))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  currentFour={this.state.currentFour} getMoreSushi={this.getMoreSushi} eatSushi={this.eatSushi}
        eatenSushi={this.state.sushiEaten} />
      <Table eatenSushi={this.state.sushiEaten}
      moneyLeft={this.state.moneyLeft}/>
      </div>
    );
  }

  getMoreSushi = () =>{
    let currentLastSushi = this.state.currentFour[3]
    let currentLastSushiIndex =
    this.state.allSushi.indexOf(currentLastSushi)
    console.log(currentLastSushiIndex)
    this.setState({
      currentFour: this.state.allSushi.slice(currentLastSushiIndex + 1, currentLastSushiIndex + 5)
    })
  }

  eatSushi = (event, sushi) =>{
    if (this.state.moneyLeft >= sushi.price){
      let eatenSushi = [...this.state.sushiEaten, sushi]
      this.setState({
      sushiEaten: eatenSushi
      })
      this.setState({
      moneyLeft: this.state.moneyLeft - sushi.price
      })
    } else {
      alert("You don't have enough in your budget!")
    }
  }
}

export default App;
