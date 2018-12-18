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
      currentIndex: 0,
      balance: 100,
      eaten: []
    }
  }

componentDidMount(){
  fetch(API)
  .then(res => res.json())
  .then(data => this.setState({
    sushis: data
  }))
}

getMoreSushi = () =>{
  console.log("Next 4")
  let incSlice = this.state.currentIndex + 4
  this.setState({
    currentIndex: incSlice
  })
}

sushiEaten = (sushiObj) =>{
  //if sushiObj is not eaten, eat it. else nope!
  if(this.state.eaten.find(sushi => sushi.id === sushiObj.id)){
      alert("You already ate that!")
  } else {
    this.setState({
      eaten: [...this.state.eaten, sushiObj]
    })
  }

  let paidFor = this.state.balance - sushiObj.price

  if (this.state.balance >= sushiObj.price){
  this.setState({balance: paidFor})
  } else {
    alert("You ain't gettin no mo'")
  }
}

  render() {
    const currentSushi = this.state.sushis.slice(this.state.currentIndex, this.state.currentIndex + 4)

    return (
      <div className="app">
        <SushiContainer sushis={currentSushi} getMoreSushi={this.getMoreSushi} sushiEaten={this.sushiEaten} eaten={this.state.eaten} />

        <Table balance={this.state.balance} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;
