import React from 'react'
import { useLoading } from '../../Hooks/useLoading'
import classes from './loading.module.css'

export default function Loading() {
  const {isLoading}=useLoading();
   if(!isLoading)return;

  return (
    <div className={classes.container } >
        <div className={classes.items}>
            <img src='/breadloading.gif' alt='Loading!' />
            <h1>Cargando los panes...</h1>

        </div>
    </div>
  )
}
