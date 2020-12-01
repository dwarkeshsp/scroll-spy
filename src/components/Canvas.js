import React from 'react'

export default (props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {props.children}
    </div>
  )
}
