import React from 'react'

export default ({ title, toId }) => {
  const [highlight, setHighlight] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHighlight(entry.isIntersecting)
      },
      {
        rootMargin: '0px 0px -100%',
        threshold: 0
      }
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
        backgroundColor: highlight ? '#00BFFF' : '#FFD700',
        color: highlight ? 'white' : 'black',
        border: highlight ? 'thick solid #FFD700' : '',
        cursor: 'pointer',
        padding: '10px'
      }}
      onClick={scrollToId}
    >
      {title}
    </div>
  )
}
