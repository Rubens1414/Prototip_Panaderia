import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './axiosConfig';
import reportWebVitals from './reportWebVitals';
import './fonts/fonts.css'; 
import {BrowserRouter} from 'react-router-dom'
import { AuthProvider } from './Hooks/useAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartProvider from './Hooks/useCart.js'
import { LoadingProvider } from './Hooks/useLoading';
import './interceptors/authinterceptor';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <AuthProvider>
     <CartProvider>
    <BrowserRouter>
    <LoadingProvider>
        <App />
     
        <ToastContainer
    position='bottom-right' 
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    
    theme='light'
    />
    </LoadingProvider>
    </BrowserRouter>
    </CartProvider>
    </AuthProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
