import React from 'react'
import classes from  './tarjeta.module.css'
import { Link } from 'react-router-dom'
import Price from '../Price/price'
import { motion } from "framer-motion"

export default function Tarjeta({breads}) {
 


 
return  (
<div className={classes.container }>
    <ul
  className={classes.list}

>
    {
        breads.map(bread=>(
            <motion.li key={bread.id} whileHover={{ scale: [null, 1.03, 1.03] }}
      transition={{ duration: 0.5 }} >
                <Link to={`/breads/${bread.id}`} >
                    <img className={classes.image}
                    src={`${bread.imageUrl}`}
                    alt={bread.name}/>
                
                 <div className={classes.content}>
                    <div className={classes.name}>{bread.name}</div>
                 
                
                     <div className={classes.product_item_footer}>
                        <div className={classes.origins}>
                            {
                                bread.origins.map(origin => (
                                    <span key={origin}>{origin}</span>
                                ))
                            }
                        </div>
                        <div className={classes.cook_time}>
                            <span>
                               ⏱️
                            </span>
                             {bread.cookTime}
                        </div>
                        
                     </div>
                     <div className={classes.price}>
                            <Price price={bread.price}/>
                     </div>
                </div>
              
                </Link>
            </motion.li >
        ))
    }
  </ul>
  </div>
  )
}
