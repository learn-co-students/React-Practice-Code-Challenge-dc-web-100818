import React, { Fragment } from 'react'
import Sushi from  '../components/Sushi'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {

  return (
    <React.Fragment>
      <div className="belt">
        {props.sushiDisplay.map( sushi =>
          <Sushi
          sushi={sushi}
          eatSushi= {props.eatSushi}
          eatenSushi= {props.eatenSushi}
          key={sushi.id}
          /> )}
        <MoreButton nextSushiGroup={props.nextSushiGroup}/>
      </div>
    </React.Fragment>
  )
}

export default SushiContainer
