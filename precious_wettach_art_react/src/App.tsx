
import Gallery from '../app/pages/Gallery'
import { Routes, Route } from "react-router-dom"
import MainLayout from '../app/shared/MainLayout'
import Home from "../app/pages/Home"
import About from "../app/pages/About"


function App() {
  

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Route>

    </Routes>
  )
}

export default App
