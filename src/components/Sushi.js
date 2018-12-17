import React, { Fragment } from 'react'

const Sushi = (props) => {
  let sushi = props.sushi;
  return (
    <div className="sushi">
      <div className="plate" onClick={() => props.eatSushi(sushi)}>
        { props.eatenSushi.includes(sushi) ?
            null
          :
            <img src={props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
