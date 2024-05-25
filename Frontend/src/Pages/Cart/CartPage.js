import React from 'react'
import classes from './cartPage.module.css'
import { useCart } from '../../Hooks/useCart'
import {Link} from 'react-router-dom'
import Price from '../../Components/Price/price'
import NotFound from '../../Components/NoEncontre/NoEncontre'
import {motion} from 'framer-motion'
import { useState } from 'react'
export default function CartPage() {
    const {cart,removeFromCart,changeQuantity}=useCart();
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
    };
      
      
    return (
     <div className={classes.bodyc}>
     { cart.items.length === 0 ? (<NotFound message='No tienes panes, ¡Vamos a comprar! ' linkRoute='/productos' imagen='/carrito.png' linkText='Ir a Productos'/>) :
       <div className={classes.container}>
          <ul className={classes.list}>
              {cart.items.map(item => <motion.li key={item.bread.id}  whileHover={{ scale: [null, 1.03, 1.03] }}
      transition={{ duration: 0.5 }}>
                  <div>
                      <img src={`${item.bread.imageUrl}`} alt={item.bread.name} />
                  </div>
                  <div>
                      <Link to ={`/breads/${item.bread.id}`}>{item.bread.name}</Link>
                  </div>
                  <div>
                      <select value={item.quantity} onChange={e=> changeQuantity(item,Number(e.target.value))}>
                          <option value='1'>1</option>
                          <option value='2'>2</option>
                          <option value='3'>3</option>
                          <option value='4'>4</option>
                          <option value='5'>5</option>
                         
  
                      </select>
                  </div>
                  <div>
                      <Price price={item.price}/>
                  </div>
                  <div>
                      <button className={classes.remove_button} onClick={()=> removeFromCart(item.bread.id)}>Remover ❌</button>
                  </div>
              </motion.li>)}
         </ul>
         <div className={classes.checkout}>
             <div>
              <div className={classes.breads_count}>{cart.totalCount}</div>
              <div className={classes.total_price}><Price price={cart.totalPrice}/></div>
           
              </div>
              <div className={classes.opciones}>
              <div className="space-y-4">
      <div>
        <input 
          type="radio" 
          id="store" 
          name="delivery" 
          value="store" 
          checked={selectedOption === 'store'} 
          onChange={handleOptionChange}
          className="mr-2"
        />
        <label htmlFor="store">Recoger en la tienda</label>
      </div>
      <div>
        <input 
          type="radio" 
          id="home" 
          name="delivery" 
          value="home" 
          checked={selectedOption === 'home'} 
          onChange={handleOptionChange}
          className="mr-2"
        />
        <label htmlFor="home">Domicilio</label>
      </div>
    </div>
             
                </div>
              <Link to='/checkout' className={classes.checkout_button}>Proceder al Pago</Link>
         </div>
      </div>
     }
     </div>
    )
}
