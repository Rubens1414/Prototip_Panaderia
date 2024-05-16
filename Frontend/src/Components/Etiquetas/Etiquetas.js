import React, { useState } from 'react';
import classes from './etiquetas.module.css';
import { Link } from 'react-router-dom';

export default function Etiquetas({ tags, ProductosPage,forbreadPage,change,noProducts}) {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <div >
        {noProducts ?  (
             <div className={classes.container}>
            
                <button onClick={() => setIsOpen(!isOpen)}  className={classes.button}>
                {isOpen ? 'Cerrar categorias' : 'Categorias 🥖'}
            </button>
           {isOpen  && (
                <div className={classes.despliegue}>
                    {tags.map(tag => (
                        <Link key={tag.name} to={`/tag/${tag.name}`} onClick={() => {setIsOpen(false); change() }}>
                            {tag.name}
                            {!ProductosPage && `(${tag.count})`}
                        </Link>
                    ))}
                </div>
            )}
        </div>
        ) :
        (
            <div className={classes.containerB} style={{
                justifyContent: forbreadPage ? 'start' : 'center',
            }}>
                {
                    tags.map(tag => 
                        <Link key={tag.name} to={`/tag/${tag.name}`} >
                            {tag.name}
                           
                        </Link>
                    )
                }
            </div>
        )
        }

   
     </div>
  );
}
