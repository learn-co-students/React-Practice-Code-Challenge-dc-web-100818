import React, { Fragment } from 'react'

const Sushi = (props) => {
  const sushi = props.sushi;

  return (
    <div className="sushi">
      <div className="plate"
           onClick={(event) =>
              props.eatSushi(event, sushi)}
           >
        {
          props.eatenSushi.includes(sushi) ?
            null
          :
            <img src={props.image} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi
