import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.slice(props.startIndex, props.startIndex + 4).map(s => {
          return <Sushi key={s.id} sushi={s} sushiClick={props.sushiClick} eaten={props.eaten}/>}) //make this a function in App so that not all sushis are passed down, but just four
        }
        <MoreButton moreButtonClick={props.moreButtonClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
