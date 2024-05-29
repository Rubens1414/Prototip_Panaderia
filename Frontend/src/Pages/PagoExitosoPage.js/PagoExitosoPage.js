import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trackOrderById } from '../../Services/orderService'
import NotFound from '../../Components/NoEncontre/NoEncontre';
import classes from './pagoExitosoPage.module.css';
import DateTime from '../../Components/DateTime/DateTime';
import OrderItemsList from '../../Components/ListaOrden/ListaOrden';

import { Link } from 'react-router-dom';

export default function OrderTrackPage() {
  const {orderId} = useParams();    
  const [order,setOrder]=useState();

  useEffect(()=>{
    orderId && trackOrderById(orderId).then(
        order=>setOrder(order)
    );

  },[orderId])

  if (!orderId) 
    return <NotFound message="Orden no encontrada" linkText="Ir al inicio"/>

  return order && 
  (
   <div className={classes.container}>
    <div className ={classes.content}>
    
        <div className={classes.header}>
        <h1> <strong>Pedido#: {order.id}</strong></h1>
            <div className={classes.datetime}>
              
                <strong>Tiempo:</strong>
                <DateTime  date={order.createdAt}/>
               
              
            </div>
            <div>
                <strong>Direccion:  </strong> {order.address}
               
            </div>
            <div>
                <strong>Estado del pedido:</strong>
                {order.status}

            </div>
            {order.paymentId &&(
              <div>
                <strong>ID Pago: </strong>
                {order.paymentId}
              </div>
            )}
        </div>
        <OrderItemsList order={order}/>
    </div>


    {
        order.status ==='NUEVO' && (
            <div className={classes.payment}>
                <Link className={classes.payment} to="/payment">Ir a pagar</Link>
            </div>
        ) 

    }
    </div>
  )
}
