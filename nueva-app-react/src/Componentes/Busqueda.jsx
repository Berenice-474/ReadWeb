import React, {useState} from 'react'
import './Busqueda.css'

const Busqueda = () => {

  
    return(
        <div className= 'conteiner1'>

           <div className="button">
           <button type="button" className="btn" >About Us</button>           
            
           <div className="blurred">
           <span></span><span></span>
          </div>
          </div>
          <svg>
 <defs>
  <filter id='goo'>
   <feGaussianBlur in='SourceGraphic' 
   stdDeviation='10' result='name'/>
    <feColorMatrix in='name' mode='matrix'
        values='1 0 0 0 0
                0 1 0 0 0 
                0 0 1 0 0
                0 0 0 30 -15 ' result='aab'/>
    <feBlend in='SourceGraphic' in2='aab'/>
   </filter>
 </defs>
</svg>
           <div className = 'conteiner2'>
           {/* <button type="button" className="btn btn-dark" >Nosotros</button> */}
           </div>

        </div>
    )


}




export default Busqueda 