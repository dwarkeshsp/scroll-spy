import React from 'react'

export const Canvas = (props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {props.children}
    </div>
  )
}

export const Menu = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '15%',
        position: 'fixed',
        top: ''
      }}
    >
      {props.children}
    </div>
  )
}

export const MenuItem = ({ title, toId }) => {
  const [highlight, setHighlight] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHighlight(entry.isIntersecting)
      },
      { threshold: 0.5 }
    )
    observer.observe(document.getElementById(toId))

    if (highlight) {
      window.history.replaceState(null, null, '#' + toId)
    }

    return () => {
      observer.unobserve(document.getElementById(toId))
    }
  })

  function scrollToId() {
    document.getElementById(toId).scrollIntoView()
  }

  return (
    <div
      style={{
        backgroundColor: highlight ? '#808080' : '#A9A9A9'
      }}
      onClick={scrollToId}
    >
      {title}
    </div>
  )
}

export const Content = (props) => {
  return <div style={{ width: '85%', marginLeft: '15%' }}>{props.children}</div>
}
