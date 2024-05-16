import React,{useState, useEffect} from 'react'

import { getNewOrderForCurrentUser } from '../../Services/orderService'
import classes from './motodoPagoPage.module.css'
import OrderItemsList from '../../Components/ListaOrden/ListaOrden'
import PaypalButtons from '../../Components/PaypalButtons/PaypalButtons'
import { useLoading } from '../../Hooks/useLoading'
export default function MetodoPagoPage() {
  const [order, setOrder] = useState()
 const {showLoading} = useLoading();

useEffect(() => {
    const fetchOrder = async () => {
      try {
        const data = await getNewOrderForCurrentUser();
        setOrder(data);
      } catch (error) {
        console.error('Error fetching order:', error);
        // En caso de error al obtener la orden, recargar la página después de un tiempo
        setTimeout(() => {
          window.location.reload();
        }, 5000); // Recargar la página después de 5 segundos (puedes ajustar el tiempo según tus necesidades)
      }
    };

    fetchOrder();
  }, []);

  if (!order) return showLoading(); // Suponiendo que showLoading es una función que muestra un indicador de carga

  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
     
          <div className={classes.summary}>
            
              <h3>Name:</h3>
              <span>{order.name}</span>
            
              <h3>Address:</h3>
              <span>{order.address}</span>
            
            
         
          </div>
          <OrderItemsList order={order} />
        </div>

     
        <div className={classes.buttons_container}>
          <div className={classes.buttons}>
            <PaypalButtons order={order} />
          </div>
        </div>
      </div>
    </>
  );
}
