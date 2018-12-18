import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'



const SushiContainer = (props) => {


  return (
    <Fragment>
      <div className="belt">

        {props.sushis.map(sushi => <Sushi key={sushi.id} sushiObj={sushi} sushiEaten={props.sushiEaten} eaten={props.eaten}/>)}


        <MoreButton sushis={props.sushis} getMoreSushi={props.getMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
    // <Sushi key={sushi.id} sushiObj={sushi} eaten={props.eaten} handleEaten={props.handleEaten}/>
