import React, { Fragment } from 'react'
import Deposit from '../components/Deposit'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" key={index} style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.moneyLeft } remaining!
      </h1>
      <Deposit addMoney={props.addMoney}/>
      <div className="table">
        <div className="stack">
          {
            renderPlates(props.plates)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table
