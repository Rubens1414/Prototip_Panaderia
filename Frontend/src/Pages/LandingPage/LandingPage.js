import React from 'react'
import classes from './landingPage.module.css'

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
      </div>

    </div>
  )
}
