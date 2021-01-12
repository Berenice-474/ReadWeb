import React, {useState} from 'react'
import './NavBar.css'
import { Modal } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import SearchArea from './SearchArea.jsx'
import LoginModal from './Modaliniciarsesion.jsx'
import userLogged from './logout'
import Axios from 'axios'





const NavBar = () => {

    const [isOpened, setIsOpened] = useState(false)
    const [isLogginActive] = useState(true)


    const LogOut = () => {
        Axios.post('http://localhost:3000/user/logout',               
         {
            headers: {
                'auth-token' : window.localStorage.getItem('token'),                
            },
        }).then((response) => {
            console.log(response)
            window.localStorage.clear('token')
        })
    } 
    
    
    return(
        <div className= 'conteiner1'>
            
           <div className = 'conteiner2'>              
           </div>
           <div className="button">
           <button type="button" className="btn" onClick = {() => setIsOpened(true)}  > Iniciar Sesión </button>  
           <button type="button"  className="btn" onClick = {(event) => LogOut()}  > Cerrar sesion </button>  
            
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
        
    )
}



export default NavBar; 