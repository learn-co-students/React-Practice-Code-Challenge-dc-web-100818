import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    displaySushi: [],
    currentIndex: 4,
    eaten: [],
    money: 50
  }

componentDidMount() {
  fetch(`${API}`)
    .then(res => res.json())
    .then(json => this.setState({
      sushi: json,
      displaySushi: json.slice(0, 4)
    }, () => {console.log(this.state)}))
  }

  handleSushiClick = (sushi) => {
    //pass in sushi object to have access to sushi info
    let newSushi = sushi
    let newBalance = this.state.money - sushi.price
    if (newBalance >= 0) {
      this.setState({
        eaten: [...this.state.eaten, newSushi],
        money: newBalance
      })
    }
  }

  handleMoreSushi = () => {
    let nextSushi = this.state.sushi.slice(this.state.currentIndex, this.state.currentIndex + 4)
    this.setState({
      displaySushi: nextSushi,
      currentIndex: this.state.currentIndex + 4
    })
  }

  render(){
    return (
      <div className="app">
        <SushiContainer
          displaySushi={this.state.displaySushi}
          eaten={this.state.eaten}
          handleSushiClick = {this.handleSushiClick}
          handleMoreSushi ={this.handleMoreSushi}
          />
        <Table money={this.state.money} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;
