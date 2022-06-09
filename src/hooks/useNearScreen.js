import React from "react"

// export default function useNearScreen(options) {
//   const [elements, setElements] = React.useState([])
//   const [entries, setEntries] = React.useState([])

//   const observer = React.useRef(
//     new IntersectionObserver(function (observedEntries) {
//       setEntries(observedEntries)
//     }, options)
//   )

//   React.useEffect(
//     function () {
//       const currentObserver = observer.current
//       currentObserver.disconnect()
//       if (elements.length > 0) {
//         elements.forEach((element) => currentObserver.observe(element))
//       }
//       return function cleanUp() {
//         if (currentObserver) {
//           currentObserver.disconnect()
//         }
//       }
//     },
//     [elements]
//   )
// }

export default function useNearScreen({ distance = "100px" } = {}) {
  const [isNearScreen, setShow] = React.useState(false)
  const elementRef = React.useRef()

  React.useEffect(function () {
    let observer

    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== "undefined"
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {})

    observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    })

    observer.observe(elementRef.current)

    return () => observer && observer.disconnect()
  })
  return { isNearScreen, elementRef }
}
