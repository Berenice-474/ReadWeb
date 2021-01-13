import React, {useState} from 'react'
import './NavBar.css'
import LoginModal from './Modaliniciarsesion.jsx'



const NavBar = () => {

    const [isOpened, setIsOpened] = useState(false)
    const [isLogginActive] = useState(true)    
    
    return(
           <div className= 'conteiner1'>            
           <div className = 'conteiner2'>              
           </div>
           <div className="button">
           <button type="button" className="btn" onClick = {() => setIsOpened(true)}  > Iniciar Sesión </button>          
           <div className="blurred">           
           <span></span><span></span>
           </div>
           <LoginModal  open= {isOpened}  onClose = { () => setIsOpened(false) } ></LoginModal> 
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
           </div>          
           </div>        
    )}



export default NavBar; 