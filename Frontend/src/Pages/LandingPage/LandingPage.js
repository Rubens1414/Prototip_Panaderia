import React from 'react'
import classes from './landingPage.module.css'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className={classes.bodylanding}>
      <div className={classes.container}>
           <div className={classes.bienvenida}>
              <img src="/BreadFondo.jpg" alt="Fondo" className={classes.fondo}/>
              <div className={classes.anuncio}>
                <div className={classes.text}>
                  <h1 style={{ fontFamily: 'Breadfast' }}>PANADERIA DEL PANDEBONO</h1>
                   <h2 style={{ fontFamily: 'Breadfast' }}>Sabor y Tradición en Cada Bocado</h2>
                </div>
              </div>
            </div>
            <div className={classes.about}>
                <h1 style={{ fontFamily: 'BreadHandmade' }}>Nuestra historia</h1>
                <p>Con una tradición de 23 años exclusivamente en Medellín, <strong>Panadería del Pandebono</strong> ha llevado su delicioso pandebono tradicional a numerosos hogares de Medellín. Nuestra dedicación a la calidad y autenticidad nos ha convertido en una elección confiable para aquellos que buscan disfrutar de este icónico producto. Desde nuestra fundación, nos enorgullecemos de seguir siendo parte de los momentos especiales de muchas familias, proporcionando auténtico sabor y alegría a cada mordisco. </p>

                <img src="/bread.png" alt="About" className={classes.imgAbout}/>
            </div>
            <div className={classes.PanesContainer}>
            <img src="/fondo_2.jpg" alt="Fondo" className={classes.fondo}/>
            <div className={classes.n_panes}>
                <h1 style={{ fontFamily: 'BreadHandmade' }}>¡Nuestro panes!</h1>
                <p> Aqui en nuestra tienda de panaderia, ofrecemos una variedad de panes  hechos con ingredientes frescos y de alta calidad, y son horneados diariamente para garantizar su frescura. Ya sea que estés buscando un pan para acompañar tu desayuno o un pan dulce para disfrutar con tu café, tenemos algo para todos los gustos. ¡Ven a visitarnos y descubre por qué somos la panadería de confianza!
                </p>
                
              
                <div className={classes.imagenpanes}>
                <Link to='/productos'>  
                <img src="/breads/bread-2.jpg" alt="About" className={classes.imgPanes}/></Link>

              
                  <Link to='/productos'><img src="/breads/bread-4.jpg" alt="About" className={classes.imgPanes}/></Link>
                  <Link to='/productos'> <img src="/breads/bread-10.jpg" alt="About" className={classes.imgPanes}/></Link>
                  <Link to='/productos'><img src="/breads/bread-1.jpg" alt="About" className={classes.imgPanes}/></Link>
                </div>
                
            </div>
            </div>
            <div className={classes.PanesContainer}>
            <img src="/fondo_3.jpg" alt="Fondo" className={classes.fondo}/>
            <div className={classes.registro}>
                <h1 style={{ fontFamily: 'BreadHandmade' }}>¡Comienza a ser parte de Nosotros!</h1>
                <img src="/SeNosfue.png" alt="Donita" className={classes.imgregistro}/>
              
               <p>Señor Dona: Registrate, yo ni tengo problemas con eso.</p>
               <Link to="/register"> Ir a registarse</Link>
            </div>
            </div>
      </div>

    </div>
  )
}
