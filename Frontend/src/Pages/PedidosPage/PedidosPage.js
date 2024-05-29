import React, { useEffect } from 'react'
import {useReducer} from 'react';
import { useParams } from 'react-router-dom';
import { getAll } from '../../Services/orderService';
import  classes from './pedidosPage.module.css'
import DateTime from '../../Components/DateTime/DateTime';
import { Link } from 'react-router-dom';
import Price from '../../Components/Price/price';
import { getAllStatus } from '../../Services/orderService';
import NoEncontre from '../../Components/NoEncontre/NoEncontre';
import { useState } from 'react';

const initialState = {};
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ALL_STATUS_FETCHED':
      return { ...state, allStatus: payload };
    case 'ORDERS_FETCHED':
      return { ...state, orders: payload };
    default:
      return state;
  }
};

export default function OrdersPage() {
  const [{ allStatus, orders }, dispatch] = useReducer(reducer, initialState);
  const [isOpen, setIsOpen] = useState(false); 

  const { filter } = useParams( );

  useEffect(() => {
    getAllStatus().then(status => {
      dispatch({ type: 'ALL_STATUS_FETCHED', payload: status });
    });
    getAll(filter).then(orders => {
      dispatch({ type: 'ORDERS_FETCHED', payload: orders });
    });
 
  }, [filter]);

  return (
    <div className={classes.container}>
  

      {allStatus && (
        <>
          <div className={classes.containerCel}>
            
            <button onClick={() => setIsOpen(!isOpen)}  className={classes.button}>
            {isOpen ? 'Cerrar Estados' : 'Estado del pedido '}
        </button>
       {isOpen  && (
            <div className={classes.despliegue}>
                <Link to="/orders">
                    TODOS
                </Link>
                {allStatus.map(state => (
                    <Link
                    key={state}
                    
                    to={`/orders/${state}`}
                    >
                    {state}
                    </Link>
                ))}
            </div>
        )}
        </div>
        
        <div className={classes.all_status}>
          <Link to="/orders">
            TODOS
          </Link>
          {allStatus.map(state => (
            <Link
              key={state}
              
              to={`/orders/${state}`}
            >
              {state}
            </Link>
          ))}
        </div>
        </>
      )}

      {orders?.length === 0 && (
        <NoEncontre
          imagen='/Bonitos.png' 
          message={filter?'¡Aqui no hay nada chef!': 'Todavia no haz comido ni un solo pan :('}
          linkRoute={filter ? '/orders' : '/productos'}
          linkText={filter ? 'Ver todos los pedidos' : 'Ve a comprar pan'}
        />
      )}

      {orders &&
        orders.map(order => (
          <div key={order.id} className={classes.order_summary}>
            <div className={classes.header}>
              <span>{order.id}</span>
              <span>
                <DateTime date={order.createdAt} />
              </span>
              <span>{order.status}</span>
            </div>
            <div className={classes.items}>
              {order.items.map(item => (
                <Link key={item.bread.id} to={`/breads/${item.bread.id}`}>
                  <img src={item.bread.imageUrl} alt={item.bread.name} />
                </Link>
              ))}
            </div>
            <div className={classes.footer}>
              <div>
                <Link to={`/track/${order.id}`}>Show Order</Link>
              </div>
              <div>
                <span className={classes.price}>
                  <Price price={order.totalPrice} />
                </span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}