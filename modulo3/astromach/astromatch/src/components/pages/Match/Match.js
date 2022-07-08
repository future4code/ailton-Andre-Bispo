import React from 'react'

export const Match = (props) => {
  return (
    <div>
      <div>match
      </div>
    
      <button onClick={() => {props.setPageChangeProps('home')}}>Home</button>
    </div>

  )
}
