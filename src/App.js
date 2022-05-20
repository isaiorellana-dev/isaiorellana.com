import React from "react"
import Portada from "./containers/Portada"
import Developer from "./pages/Developer"
import Photographer from "./pages/Photographer"
import Layout from "./containers/Layout"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { MoreAboutME } from "./components/AboutMe"

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<h1>Hola Mundo</h1>}></Route> */}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Portada />} />
          <Route path="dev" element={<Developer />}>
            <Route path="/dev/aboutme" element={<MoreAboutME />}></Route>
          </Route>
          <Route path="ph" element={<Photographer />} />
          {/* <Route path="/servicios" element={<Servicios />} />
          <Route path="/sobrenosotros" element={<SobreNosotros />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </Router>
  )
}

export { App }
