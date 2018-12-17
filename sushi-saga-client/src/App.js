import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()

    this.state = {
      sushiList : [],
      index: 0,
      wallet: 100
    }
  }

  componentDidMount() {
    fetch(API).then(res => res.json()).then(sushiData => {
      let sushi = sushiData.map(s => {
        delete s.created_at
        return {...s, ordered: false}
      })

      this.setState({sushiList: sushi})
    })
  }

  displaySushi = (event) => {
    return this.state.index + 4 < this.state.sushiList.length ? this.setState({index: this.state.index + 4}) : this.setState({index: 0})
  }

  depositMoney = (event) => {
    event.preventDefault()
    this.setState({wallet: this.state.wallet + parseInt(event.currentTarget.children[1].value, 10)}, event.currentTarget.reset())
  }

  orderSushi = (event) => {
    let sushi = [...this.state.sushiList]
    let order = sushi.find(sushi => {
      return sushi.id === parseInt(event.currentTarget.dataset.sushiId, 10) })

    if(order && this.state.wallet - order.price >= 0) {
      order.ordered = true

      this.setState({
        sushiList: sushi,
        wallet: this.state.wallet - order.price
      })
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  sushi={
          this.state.sushiList.slice(this.state.index, this.state.index + 4)} getMoreSushi={this.displaySushi} orderSushi={this.orderSushi}/>
        <Table moneyLeft={this.state.wallet} addMoney={this.depositMoney} plates={this.state.sushiList.filter(s => s.ordered)}/>
      </div>
    );
  }
}

export default App;
