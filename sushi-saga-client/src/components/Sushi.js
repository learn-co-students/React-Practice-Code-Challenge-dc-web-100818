import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate"
        data-sushi-id={props.sushi.id} data-price={props.sushi.price}
           onClick={(event) => !props.sushi.ordered ? props.clickHandler(event) : null}>
        {
          props.sushi.ordered ?
            null
          :
            <img src={props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
