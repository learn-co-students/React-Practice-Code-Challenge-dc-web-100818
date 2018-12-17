import React from 'react'

class MoreMoney extends React.Component {
  constructor (){
    super()
    this.state = {
      value: 0
    }
  }


  handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
    let numValue = parseInt(this.state.value,10)
    this.props.addToBudget(numValue)
    event.target.reset()
    this.setState ({
      value: 0
    })
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render () {
    return (
    <form onSubmit={this.handleSubmit}>
    Increase Tab:
    <input type="text" onChange={this.handleChange}/> Dollars
    <input type="submit" value="Submit" />
    </form>
    )
  }
}

export default MoreMoney
