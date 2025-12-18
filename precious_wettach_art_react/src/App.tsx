
import Gallery from '../app/pages/Gallery'
import { Routes, Route } from "react-router-dom"
import MainLayout from '../app/shared/MainLayout'
import Home from "../app/pages/Home"
import About from "../app/pages/about/About"
import ProductDetials from "../app/pages/ProductDetials"


function App() {
  

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetials />} />
      </Route>

    </Routes>
  )
}

export default App
