import React from 'react'
import InputContainer from '../InputContainer/inputContainer';
import classes from './input.module.css';

function input({label,type,defaultValue,onChange,onBlur,name,error},ref) {

  const getErrorMesage = () => {
    if(!error) return;
    if(error.message) return error.message;

    switch(error.type){
        case 'required':
            return 'complete este campo';
        case 'minLength':
            return `Debe tener  mas caracteres`;
        default:
            return '*';
        }
    };

  return (
    <InputContainer label ={label}>
        <input
            defaultValue={defaultValue}
            className={classes.input}
            type={type}
            placeholder={label}
            ref={ref}
            name={name}
            onChange={onChange}
            onBlur={onBlur}/>
        {error && <div className ={classes.error}>{getErrorMesage()}</div>}


    </InputContainer>
  )
}

export default React.forwardRef(input)