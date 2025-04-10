import React from 'react'
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../Components/Input/input';
import Button from '../../Components/Boton/button';
import { Link } from 'react-router-dom';
import classes from './registerPage.module.css';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Hooks/useAuth';

export default function RegisterPage() {
  const auth = useAuth();
  const {user} = auth;
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const returnUrl = params.get('returnUrl');
    useEffect(() => {
        if(!user)return;
        returnUrl ? navigate(returnUrl) : navigate('/');
    }
    ,[user,returnUrl,navigate]);


  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  }= useForm();
  const submit = async data =>{
    await auth.register(data);

  };
  return (
    <div>
        <div className={classes.container}>
            <div className={classes.detail}>
            <h1> Registrate </h1>
            <form onSubmit={handleSubmit(submit)} noValidate>
                <Input 
                    type="text"
                    label="Name"
                    {...register('name', {
                        required:true,
                        minLength: 5,
                    })}
                    error={errors.name }
                />
                <Input 
                    type="email"
                    label="Email"
                    {...register('email', {
                        required:true,
                        pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,63}$/i,
                        message: 'Invalid email address'
                    })}
                    error={errors.email }
                />
                <Input 
                    type="password"
                    label="Password"
                    {...register('password', {
                        required:true,
                        minLength: 8,
                    })}
                    error={errors.password }
                />
                <Input 
                    type="password"
                    label="Confirm Password"
                    {...register('confirmPassword', {
                        required:true,
                        validate: value => value!== getValues('password') ?
                        'The password do not match' : true,
                    })}
                    error={errors.confirmPassword }
                />
                <Input 
                    type="text"
                    label="Address"
                    {...register('address', {
                        required:true,
                        minLength: 10,
                    })}
                    error={errors.address }
                />
                <Button text="Register" type="submit"/>

                <div className={classes.login}>
                    Already have an account? &nbsp;
                    <Link to={`/login${returnUrl ? '?returnUrl='+returnUrl : ''}`}>Login here</Link>
                </div>


                
            </form>
            </div>
        </div>
    </div>
  )
}