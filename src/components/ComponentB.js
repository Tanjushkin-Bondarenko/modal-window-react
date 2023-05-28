import React from 'react'

export const ComponentB = (props) => {
  return (
   <div  className='componentB'>
      <button onClick={props.handleClick}>{props.children}</button> 
         </div>
  )
}
