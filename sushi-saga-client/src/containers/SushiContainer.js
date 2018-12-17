import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import WalletButton from '../components/WalletButton'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.currentSushi.map(obj => <Sushi key={obj.id} sushi={obj} buySushi={() => {props.buySushi(obj)}} eatenSushi={props.eatenSushi}/>)}
        <MoreButton moreSushi={props.moreSushi}/>
        <WalletButton addMoney={props.addMoney}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
