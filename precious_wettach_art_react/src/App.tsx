
import Gallery from '../app/pages/Gallery'
import { Routes, Route } from "react-router-dom"
import MainLayout from '../app/shared/MainLayout'
import Home from "../app/pages/Home"
import About from "../app/pages/about/About"
import ProductDetials from "../app/pages/ProductDetials"
import BasketPage from "../app/pages/Basket/BasketPage"
import CheckoutPage from '../app/pages/Checkout/CheckoutPage'
import Login from "../app/pages/authentication/Login"
import Register from "../app/pages/authentication/Register"
import RequireAuth from '../app/features/RequireAuth'


function App() {
  

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetials />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/checkout" element={<CheckoutPage />} />
        </Route>


      </Route>

    </Routes>
  )
}

export default App
