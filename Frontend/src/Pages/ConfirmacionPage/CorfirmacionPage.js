import React from 'react'
import {useCart} from '../../Hooks/useCart'
import {useAuth} from '../../Hooks/useAuth'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {useForm} from 'react-hook-form'
import {createOrder} from '../../Services/orderService'
import classes from './confirmacionPage.module.css'
import Input from '../../Components/Input/input'
import Button from '../../Components/Boton/button'
import ListaOrden from '../../Components/ListaOrden/ListaOrden'

export default function CheckoutPage() {
  const {cart} = useCart();
  const {user} = useAuth();
  const navegate = useNavigate();
  const [order] = useState({...cart});

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submit = async data => {
    
   await createOrder({...order,name: data.name,address: data.address});
    navegate('/payment');
  }
  return <>
       <form 
        onSubmit={handleSubmit(submit)}
        className={classes.container }
        >
          <div className={classes.content}>
          

             <div className={classes.inputs}>
               <Input 
                  defaultValue={user.name}
                  label="Name"
                  {...register('name')}
                  error={errors.name}
                  />
                <Input 
                  defaultValue={user.address}
                  label="Address"
                  {...register('address')}
                  error={errors.address}
                  />
             </div>
              <ListaOrden order={order} /> 
            
            <div className = {classes.buttons}>
              <button type="submit">Confirmar</button>
            </div>
          
          </div>
          <div>
          </div>
        

      </form>
  </>
}
