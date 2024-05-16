import React,{useState,useEffect} from 'react'
import classes from './breadPage.module.css'
import { useParams } from 'react-router-dom';
import { getById } from '../../Services/breadService';
import Etiquetas from '../../Components/Etiquetas/Etiquetas';
import Price from '../../Components/Price/price'
import { useCart } from '../../Hooks/useCart';
import { useNavigate } from 'react-router-dom';
import NoEncontrado from '../../Components/NoEncontre/NoEncontre';
import { motion } from 'framer-motion';
export default function BreadPage() {
    const [bread, setbread]=useState({});
    const {id}=useParams();
    const {addToCart}=useCart();
    const navigate=useNavigate();
     const handleAddToCart=()=>{
      addToCart(bread);
      navigate('/cart');
      
    }
    useEffect(() => {
      const fetchBread = async () => {
          const breadData = await getById(id);
          setbread(breadData);
      };

      fetchBread();
  }, [id]);
   
    return (
      <>
      { !bread ? <NoEncontrado message="¡Este pan se nos fue! 😵‍💫" linkText="Volvamos a los que si estan" linkRoute='/productos' imagen='/SeNosFue.png'/> :(
        <div className={classes.container }>
          <img 
          className={classes.image}
          src={ `${bread.imageUrl}`} 
          alt={bread.name} />
          <motion.div className={classes.details} whileHover={{ scale: [null, 1.03, 1.03] }}
      transition={{ duration: 0.5 }}>
            <div className={classes.header}>
               <span className={classes.name}>{bread.name}</span>
             
            </div>
          
            <div className={classes.origins}>
              {
                bread.origins?.map(origin=>(
                  <span key={origin}>{origin}</span>
                ))
              }
            </div>
            <div className={classes.tags}>
              {bread.tags &&(
                <Etiquetas tags={bread.tags.map(tag=>({name:tag}))}
                forbreadPage={true} noProducts={false}
                />
              )}
            </div>
            <div className={classes.cook_time}>
              <span>
                Este pan se demora entre <strong> {bread.cookTime}</strong>  en cocinarse.
              </span>
            </div>
            <div className={classes.price}>
              <Price price={bread.price}/>
            </div>
            <button onClick={handleAddToCart}>
              ¡Dame ese pan! 🍞
            </button>
         </motion.div>
        </div>
      )
      
      }
     
      </>
    )
}
