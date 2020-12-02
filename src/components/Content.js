import React from 'react'

export default (props) => {
  // reserve first quarter from right for sidepanel
  return <div style={{ width: '75%', marginLeft: '25%' }}>{props.children}</div>
}
