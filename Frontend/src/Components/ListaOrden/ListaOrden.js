import React from 'react'

import {Link} from 'react-router-dom'
import Price from  '../Price/price'
import classes from './listaOrden.module.css'


export default function ListaOrden({order}) {
    return (
        <div className={classes.container}>
             <h2>Panes confirmados:</h2>

    <div className={classes.table}>

            {order.items.map(item =>(
                <div key={item.bread.id} className={classes.orders}>
                    <ul>
                    <li>
                        <Link to={`/breads/${item.bread.id}`}>
                        <img src={item.bread.imageUrl} />
                    </Link>
                    </li>
                    <li className={classes.text}><strong>Nombre: </strong>{item.bread.name}</li>
                    <li className={classes.text}>
                       <strong>Precio:</strong> <Price price={item.bread.price} />
                    </li>
                    <li className={classes.text}><strong>Cantidad: </strong>{item.quantity}</li>
                    <li className={classes.text}>
                    <strong>Precio Total: </strong> <Price price={item.bread.price} />
                    </li>
                    </ul>

                </div>
            ))}
              <div className={classes.total}>
                   Total: <Price price={order.totalPrice} />
               </div>     
   
    </div>
</div>
    )
}