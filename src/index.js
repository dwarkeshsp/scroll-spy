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
        width: '20%',
        position: 'fixed',
        height: '100%',
        backgroundColor: '#00FFFF'
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
      { rootMargin: '0px 0px -99%' }
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
        backgroundColor: highlight ? '#1E90FF' : '#00FFFF',
        color: highlight ? 'white' : 'black',
        border: highlight ? 'thick solid #0000FF' : '',
        cursor: 'pointer',
        padding: '10px'
      }}
      onClick={scrollToId}
    >
      {title}
    </div>
  )
}

export const Content = (props) => {
  return <div style={{ width: '80%', marginLeft: '20%' }}>{props.children}</div>
}
