import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.currentFour.map(sushi =>
          <Sushi
            key={sushi.id}
            name={sushi.name}
            image={sushi.img_url}
            price={sushi.price}
            sushi={sushi}
            eatSushi={props.eatSushi}
            eatenSushi={props.eatenSushi}/>
        )
      }
        <MoreButton getMoreSushi={props.getMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
