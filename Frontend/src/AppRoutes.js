import React from 'react'
import { Route ,Routes} from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage'
import ProductPage from './Pages/ProductPage/ProductPage'
import BreadPage from './Pages/BreadPage/BreadPage'
import CartPage from './Pages/Cart/CartPage'
import LoginPage from './Pages/LoginPage/LoginPage'
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import ConfirmPage from './Pages/ConfirmacionPage/CorfirmacionPage'
import AuthRoute from './Components/AuthRoute/AuthRoute'
import MetodoPagoPage from './Pages/MetodoPagoPage/MetodoPagoPage'
import PagoExitosoPage from './Pages/PagoExitosoPage.js/PagoExitosoPage'
import PedidosPage from './Pages/PedidosPage/PedidosPage'

export default function AppRoutes() {
  return <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/productos" element={<ProductPage/>} />
    <Route path='/search/:searchTerm'element={<ProductPage/>} />
   <Route path='/tag/:tag'element={<ProductPage/>} />
   <Route path='/breads/:id'element={<BreadPage/>} />
   <Route path='/cart' element={<CartPage/>} />
   <Route path='/login' element={<LoginPage/>} />
   <Route path='/register' element={<RegisterPage/>} />
   <Route path='/checkout'element={
     <AuthRoute>
      <ConfirmPage/>
    </AuthRoute>


    } />
     <Route path='/payment'element={
     <AuthRoute>
      <MetodoPagoPage/>
    </AuthRoute>

    

    } />
    <Route path='/track/:orderId'element={
     <AuthRoute>
      <PagoExitosoPage/>
    </AuthRoute>

    } />
    <Route path='/orders/:filter?'element={
     <AuthRoute>
      <PedidosPage/>
    </AuthRoute>

    } />
   </Routes>
}