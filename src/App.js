import React from "react"
import Portada from "./containers/Portada"
import Developer from "./pages/Developer"
import Photographer from "./pages/Photographer"
import ClashRoyale from "./pages/CR/ClashRoyale"
import Layout from "./containers/Layout"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { MoreAboutME } from "./components/AboutMe"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Portada />} />
          <Route path="dev" element={<Developer />}>
            <Route path="/dev/aboutme" element={<MoreAboutME />} />
          </Route>
          <Route path="ph" element={<Photographer />} />
          <Route path="cr" element={<ClashRoyale />} />
        </Route>
      </Routes>
    </Router>
  )
}

export { App }
