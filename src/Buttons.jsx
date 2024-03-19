import React from 'react'

const Buttons = (props) => {
  return (
    <button style={props.style} onClick={props.onClick} id={props.id} type={props.id} className='button'>{props.name}</button>
  )
}

export default Buttons