
import Gallery from '../app/pages/Gallery'
import { Routes, Route } from "react-router-dom"
import MainLayout from '../app/shared/MainLayout'
import Home from "../app/pages/Home"
import About from "../app/pages/about/About"
import ProductDetials from "../app/pages/ProductDetials"
import BasketPage from "../app/pages/Basket/BasketPage"
import CheckoutPage from '../app/pages/Checkout/CheckoutPage'
import Login from "../app/pages/authentication/Login"


function App() {
  

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetials />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<Login />} />
      </Route>

    </Routes>
  )
}

export default App
