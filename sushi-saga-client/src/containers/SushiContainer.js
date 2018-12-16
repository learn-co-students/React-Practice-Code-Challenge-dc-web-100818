import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushi.map(s => <Sushi sushi={s} key={s.id}
            clickHandler={props.orderSushi} />)
        }
        <MoreButton clickHandler={props.getMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
