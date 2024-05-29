import React, { useEffect } from 'react'
import { PayPalButtons, PayPalScriptProvider, usePayPalScriptReducer } from '@paypal/react-paypal-js'
import { useLoading } from '../../Hooks/useLoading';
import { pay } from '../../Services/orderService';
import { useCart } from '../../Hooks/useCart';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function PaypalButtons({order}) {
  return <PayPalScriptProvider 
    options={{
        clientId:'AQYe5b83wOJUKpk1mq7qIzq1t1jRuhjuTuM5dQdWnrbBi-yG938_c-MjgPWYXuTtuDugbwiQxoJE4Njz',
    }}>
        <Buttons order={order}/>
    
    </PayPalScriptProvider>
}

function Buttons({order}){
    const {clearCart} = useCart();
    const navigate=useNavigate();
    const [{isPending}]=usePayPalScriptReducer();
    const {showLoading, hideLoading} = useLoading();
    useEffect(() => {
        isPending? showLoading() : hideLoading();
    })
    const createOrder =(data,actions)=>{
        return actions.order.create({
            purchase_units: [
                {
                   amount: {
                       currency_code: 'USD',
                       value: order.totalPrice
                   }
                }
            ]
        })
    }

   const onApprove = async (data, actions) => {
        try{
            const payment = await actions.order.capture()
            const orderId = await pay(payment.id)
            clearCart();
            toast.success('Pago exitoso','Success');
            navigate('/track/'+orderId)
        } catch (error){
            toast.error('Hubo un error en el pago','Error');
        }
    }

    const onError= err =>{
        toast.error('Un error ocurrió','Error');
    }
    return (
        <PayPalButtons 
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onError}
        />
    )
}
