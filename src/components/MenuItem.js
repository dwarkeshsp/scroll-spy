import React from 'react'

export default ({ title, toId }) => {
  const [highlight, setHighlight] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHighlight(entry.isIntersecting)
      },
      {
        // only check the top border of the screen for intersections
        rootMargin: '0px 0px -100%',
        // cause callback only when this element enters top of screen
        threshold: 0
      }
    )

    const observeElem = document.getElementById(toId)

    observer.observe(observeElem)

    // change hash url
    if (highlight) {
      window.history.replaceState(null, null, '#' + toId)
    }

    return () => {
      observer.unobserve(observeElem)
    }
  }, [])

  function scrollToElem() {
    document.getElementById(toId).scrollIntoView()
  }

  // change div color based on observer results
  return (
    <div
      style={{
        backgroundColor: highlight ? '#00BFFF' : '#FFD700',
        color: highlight ? 'white' : 'black',
        border: highlight ? 'thick solid #FFD700' : '',
        cursor: 'pointer',
        padding: '10px'
      }}
      onClick={scrollToElem}
    >
      {title}
    </div>
  )
}
