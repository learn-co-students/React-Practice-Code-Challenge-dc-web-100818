import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.displaySushi.map(s => <Sushi key={s.id} sushi={s} eaten={props.eaten} handleSushiClick={props.handleSushiClick}/>)}
        <MoreButton handleMoreSushi = {props.handleMoreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
