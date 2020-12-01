import React from 'react'

export default (props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '25%',
        position: 'fixed',
        height: '100%',
        backgroundColor: '#FFD700'
      }}
    >
      {props.children}
    </div>
  )
}
