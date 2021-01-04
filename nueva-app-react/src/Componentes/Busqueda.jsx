import React, {useState} from 'react';
import './Busqueda.css';
import boxbook from './boxbook.png';


const Busqueda = () => {

  
    return(
        <div className= 'conteiner1'>

           <div className="button">
            <ul>
                <li> 
                    <a href='#nosotros'>
                    <div className="blurred">
          {/*  <span></span><span></span> */}
          </div>      
          <input
         className='btn' 
          type='image'
          src={boxbook}
           />
          {/*  <button
            type="button" 
            className="btn"           
            
            >About Us</button>  */}
        
                      </a> 
                 </li>   
           </ul>
         
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