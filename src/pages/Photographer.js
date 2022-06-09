import React, { Suspense } from "react"
import useDocumentTitle from "../hooks/useDocumentTitle"
import useSlider from "../hooks/useSlider"

import Slider from "../components/Slider"
import Contact from "../components/Contact"
import avocados from "../assets/img/avocados.jpg"
import chuleta from "../assets/img/chuleta.jpg"
import yeti from "../assets/img/yeti.jpg"
import graduacion from "../assets/img/graduacion.jpg"
import keren from "../assets/img/keren.jpg"
import inauguracion from "../assets/img/inauguracion.jpg"
import babys from "../assets/img/babys.jpg"
import isaac from "../assets/img/isaac.jpg"
import manuel from "../assets/img/manuel.jpg"
import sibrian from "../assets/img/sibrian.jpg"
import maquillaje from "../assets/img/maquillaje-vertical.jpg"
import dariel from "../assets/img/dariel-2.jpg"
import nelsi from "../assets/img/nelsi-2.jpg"
import rous from "../assets/img/rous.jpg"
import rous2 from "../assets/img/rous-2.jpg"
import axel from "../assets/img/axel.jpg"
import xv from "../assets/img/xv.jpg"
import tanita from "../assets/img/tanita.jpg"
import ladyInRed from "../assets/img/lady-in-red.jpg"
import ladyInBlue from "../assets/img/lady-in-blue.jpg"
import "../styles/pages/Photograper.scss"
import "../styles/global.scss"
import Header from "../components/Footer"
import Footer from "../components/Header"
import useNearScreen from "../hooks/useNearScreen"

const Welcome = React.lazy(() => import("../components/Welcome"))

const Photographer = () => {
  const { clasesImg, indexImg, setAutoplay, prev, next } = useSlider()
  useDocumentTitle("PH | Isai Orellana")
  const [clase, setClase] = React.useState("hide")

  const { isNearScreen, elementRef } = useNearScreen({ elementRef })

  return (
    <div className="main-ph">
      <Footer />
      <section className="home-section-1">
        <Suspense fallback="Cargando contenido...">
          <Welcome setClase={setClase} clase={clase} />
        </Suspense>
        <Contact clase={clase} />
        <div className="portafolio-slider">
          <Slider
            clasesImg={clasesImg}
            indexImg={indexImg}
            setAutoplay={setAutoplay}
            prev={prev}
            next={next}
          />
        </div>
      </section>
      <section className="home-section-2" ref={elementRef}>
        {isNearScreen ? (
          <>
            <img loading="lazy" src={ladyInBlue}></img>
            <img loading="lazy" src={ladyInRed}></img>
            <img loading="lazy" src={xv}></img>
            <img loading="lazy" src={tanita}></img>
            <img loading="lazy" src={rous}></img>
            <img loading="lazy" src={rous2}></img>
            <img loading="lazy" src={keren}></img>
            <img loading="lazy" src={sibrian}></img>
            <img loading="lazy" src={dariel}></img>
            <img loading="lazy" src={nelsi}></img>
            <img loading="lazy" src={maquillaje}></img>
            <img loading="lazy" src={babys}></img>
            <img loading="lazy" src={graduacion}></img>
            <img loading="lazy" src={isaac}></img>
            <img loading="lazy" src={manuel}></img>
            <img loading="lazy" src={yeti}></img>
            <img loading="lazy" src={chuleta}></img>
            <img loading="lazy" src={avocados}></img>
            <img loading="lazy" src={axel}></img>
            <img loading="lazy" src={inauguracion}></img>
          </>
        ) : null}
      </section>
      <Header />
    </div>
  )
}

export default Photographer
