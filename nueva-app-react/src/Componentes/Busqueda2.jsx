import React, {useState} from 'react';
import './Busqueda2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';
import Axios from 'axios';

const Busqueda2 = () => {

   const [isOpened, setIsOpened] = useState(false)




    return(
        <div className= 'conteiner11'>
           <div className="button">
           <div className="blurred">
           <span></span><span></span>
          </div>
          <div>
          
           <button type="button" className="btn"  onClick = {() => setIsOpened(true)} >          
               <FontAwesomeIcon  icon= {faSearch} style = {{fontSize : "2em"}}/></button>      

               <Modal open= {isOpened}  onClose = { () => setIsOpened(false) }>
               </Modal>

               
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
</div>
    )


}




export default Busqueda2; 