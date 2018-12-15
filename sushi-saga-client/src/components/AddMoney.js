import React, {Fragment} from 'react'

const AddMoney = (props) => {
   return (
      <form id='addMoneyForm' className='add-money' onSubmit={props.addMoneyHandler}>
         <input type='text' placeholder='add to your wallet' name='money'/>
         <input type='submit' value='+'/>
      </form>
   )
}

export default AddMoney
