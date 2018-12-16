import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from "../components/Sushi"

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.currentSushis.map(sushi => <Sushi sushi={sushi} onEat={props.onEat}/>)
        }
        <MoreButton updateCurrentSushis={props.updateCurrentSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
