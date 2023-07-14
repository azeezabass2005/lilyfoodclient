import React from 'react'
import Hero from './components/Hero'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import BottomNav from './components/BottomNav'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Cart from './pages/cart/Cart'
import Details from './pages/details/Details'
import Products from './pages/products/Products'
import Register from './pages/register/Register'
import Favorite from './pages/favorite/Favorite'
import Checkout from './pages/checkout/Checkout'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <BottomNav />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='favorite' element={<Favorite />} />
        <Route path='cart' element={<Cart />} />
        <Route path='/track' element={<Checkout />} />
        <Route path='details' element={<Details />}/>
        <Route path='products' element={<Products />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App