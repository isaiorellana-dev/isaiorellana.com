import React from "react"
import trofeos from "./trophy.png"
import record from "./record.png"
import pekita from "./pekita.png"
import "./styles.scss"

const ClashRoyale = () => {
  return (
    <div className="player-card">
      <div className="player-card--upside-container">
        <div className="player-card--stats">
          <div className="player-card--stats__name-level">
            <h2>ISAGOL!!!</h2>
            <p>12</p>
          </div>
          <div className="player-card--stats__trophies">
            <div className="trophies-count trophies">
              <img src={trofeos}></img>
              <p>5405</p>
            </div>
            <div className="trophies-record trophies">
              <img src={record}></img>
              <p>5638</p>
            </div>
          </div>
          <p className="player-card--stats__battles">6870 Batallas</p>
          <div className="player-card--stats__wins-losses">
            <p className="wins">3046 wins</p>
            <p className="losses">3070 losses</p>
          </div>
        </div>
        <div className="player-card--favorite-card">
          <img src={pekita}></img>
          <p>FAVORITE CARD</p>
        </div>
      </div>
      <h2 className="mazo">MAZO</h2>
      <div className="player-card--deck"></div>
    </div>
  )
}

export default ClashRoyale
