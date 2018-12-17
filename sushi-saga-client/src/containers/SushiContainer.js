import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.allSushi.slice(props.tableSushiId - 4, props.tableSushiId).map(obj => <Sushi key={obj.id} sushi={obj} buySushi={() => {props.buySushi(obj)}} eatenSushi={props.eatenSushi}/>)}
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
