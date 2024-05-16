import React, { useEffect } from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import { useAuth } from '../../Hooks/useAuth'
import classes from './loginPage.module.css'
import Input from '../../Components/Input/input'
import Button from '../../Components/Boton/button'

export default function LoginPage() {
 const{ register, handleSubmit, formState: { errors }, } = useForm()
 
 const navigate = useNavigate();
 const {user, login} = useAuth();
 const [params]=useSearchParams();
 const returnUrl = params.get('returnUrl');

 useEffect(() => {
    if(!user) return;
    returnUrl ? navigate(returnUrl) : navigate('/');
    }, [ user, navigate, returnUrl]);

const Submit = async ({email, password}) => {
    await login(email, password);
};

  return (
    <div className={classes.container}>
        <h1>Login 🥖</h1>
        <form onSubmit={handleSubmit(Submit)} noValidate>
            <Input 
                label="Email ✉️"
                type="email"
                {...register('email', {required: true, pattern:{
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,63}$/i,
                    message: 'Email invalido'
                },
            
            })}
                error={errors.email}
            />
            <Input 
                label="Contraseña 🗝️"
                type="password"
                {...register('password', {required: true})}
                error={errors.password}
            />
            <Button text="Login" type="submit"/>
            <div className={classes.register}>
                Nuevo aqui? &nbsp;
                <Link to={`/register${returnUrl ? 'returnUrl'+returnUrl : ''}`}>¡Registrate a nuestra tienda!</Link>
            </div>
        </form>
    </div>
  )
}
