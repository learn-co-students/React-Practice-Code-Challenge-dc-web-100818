import React, { Fragment } from 'react'



const Sushi = (props) => {
  console.log(props.gotAte)
  return (
    <div className="sushi">
      <div className="plate"
           onClick={() => {props.sushiEaten(props.sushiObj)}}>

        {
          props.eaten.includes(props.sushiObj) ===
          true ? null :
            <img src={props.sushiObj.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushiObj.name} - ${props.sushiObj.price}
      </h4>
    </div>
  )
}

export default Sushi
