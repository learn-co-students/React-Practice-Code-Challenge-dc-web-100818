import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {

  constructor(){
    super()
    this.state = {
      eatenSushi: [],
      sushiGroup: 1, //keeps track off the group of sushi (increments of 4)
      sushiDisplay: [], //for displaying 4 sushi at a time
      budget: 50 //the budget I have set for myself,
    }
  }

  componentDidMount () {
    this.getSushiSet()
  }

  getSushiSet = () => {
    fetch(`${API}?_page=${this.state.sushiGroup}&_limit=4`) //grabbing 4 sushi at a time,
    .then(res => res.json())
    .then(sushis => {
      // console.log(sushis)
      this.setState({
        sushiDisplay: sushis
      })
    })
  }

  nextSushiGroup = () => {
    let newGroup = this.state.sushiGroup + 1;
    console.log(newGroup)
    this.setState ({
      sushiGroup: newGroup
    })
    this.getSushiSet()
    console.log(this.state.sushiDisplay)
  }

  //when a piece of sushi gets clicked subtract the value from the budget
  eatSushi = (sushi) => {
    let balance = this.state.budget - sushi.price
    if (balance >= 0) {
      this.setState({
        budget: balance,
        eatenSushi: [...this.state.eatenSushi, sushi]
      })
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushiDisplay={this.state.sushiDisplay}
        nextSushiGroup={this.nextSushiGroup}
        eatSushi={this.eatSushi}
        eatenSushi={this.state.eatenSushi}
         />
        <Table
        Sushi={this.state.sushisDisplay}
        budget={this.state.budget}
        eatenSushi={this.state.eatenSushi}
        />
      </div>
    )
  }
}

export default App;
