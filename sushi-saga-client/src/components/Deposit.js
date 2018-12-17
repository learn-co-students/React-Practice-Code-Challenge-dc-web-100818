import React from 'react'

const Deposit = (props) => {
  return (
    <form onSubmit={props.addMoney}>
      <label>Deposit Money</label>
      <input type='number' min='1' />
      <input type='submit' value='Add Money'/>
    </form>
  )
}

export default Deposit
