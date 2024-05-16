import React,{ useEffect, useState } from 'react'
import classes from './search.module.css'
import { useNavigate } from 'react-router-dom';
import { useDebounce } from '../../Hooks/useDesbounce';


export default function Search({limpiar,change}) {
  const [term, setTerm] = useState('');
  const navigate=useNavigate();
  const debouncedTerm = useDebounce(term, 300);
  
  useEffect(()=>{
      if (debouncedTerm) {
            navigate('/search/' + debouncedTerm);
           
        } else {
           if (change){

           }
           else{
            navigate('/productos/');
           }
        

        }
        if(limpiar){
            setTerm('');
          
        }
  },[debouncedTerm, navigate , limpiar , change]);

 


  return (
    <div className={classes.bodys}>
       
    <div className={classes.container}>
        <input type='text'
        placeholder='¡Busca tu pan! 🍞'
         onChange={e => {setTerm(e.target.value)}}
               value={term}
    
        />
        
        </div>
     </div>
  )
}

