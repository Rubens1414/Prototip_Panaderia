import React from 'react'
import classes from './noEncontre.module.css'
import {Link} from 'react-router-dom'
import { motion } from "framer-motion"

export default function NotFound({message,linkRoute,linkText,busqueda,resetbusqueda,imagen='/NoPan.png'}) {
  return (
    <div className={classes.container }>
        <div className={classes.imgPan}>
          <img src={imagen} alt="nopan"/>
        </div>
        <div className={classes.message}>
          <p>{message}</p>
        </div>
       
     
    {
      busqueda? 
       <motion.a  whileHover={{ scale: [null, 1.03, 1.03] }}
      transition={{ duration: 0.5 }}>
          <Link to={linkRoute} onClick={resetbusqueda}>
        {linkText}
      </Link> 
      </motion.a>
       :
   <Link to={linkRoute}>
        {linkText}
      </Link>
    }
 
    </div>
  )
}

NotFound.defaultProps={
    message:'No se encontro lo que buscabas',
    linkRoute:'/',
    linkText:'Vamos a casa'
    }


