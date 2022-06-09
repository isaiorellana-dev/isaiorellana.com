import React from "react"
import "../../styles/components/CardTitle.scss"

const CardTitle = (props) => {
  return (
    <div className={props.className}>
      <h2>{props.text}</h2>
    </div>
  )
}

export default CardTitle
