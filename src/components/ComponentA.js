
import React, { useState} from 'react'
import { ComponentB } from './ComponentB'

export const ComponentA = () => {
const [counter, setCounter] = useState(0)
    const handleClick = () => {
    setCounter(counter + 1 )      
    } 
  return (
    <div className='componentA'>
          <ComponentB handleClick={ handleClick}>click</ComponentB>
          <div>{counter}</div>
    </div>
  )
}
