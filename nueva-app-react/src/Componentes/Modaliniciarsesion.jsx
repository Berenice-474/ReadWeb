import React, {useState} from 'react';
import './Modaliniciarsesion.css';
 import Bookloverpana from './Bookloverpana.png';  
 import RegisterModal from './ModalRegister';
 import { Modal } from 'reactstrap';



export default function LoginModal({open, onClose}){


    

    const [modalEdit, modalInsertEdit] = useState(false);
    const modalEditView = () => modalInsertEdit(!modalEdit);
    const modalEditViewFalse = () => modalInsertEdit(false);



    const [isOpened, setIsOpened] = useState(false)
   


    if(!open) return null

    


    return(
        <div className = 'base-conteiner' >
            <div className='header'></div>
            <div className="content">
                <div className="image">
                    <img   src= {Bookloverpana}/>
                    <div><a className="createComponent ">
              <div className="accountComponent">
              <a   className="aa" 
                href="#" 
                onClick={() => modalEditView()}
                /* onClick = {() => setIsOpened(true)} */
               > No tienes todavia una cuenta? Registrate! </a>
             <div>
             <a className="aa"/* href="/forgot" */> ¿olvidaste tu contraseña? </a>
             </div>
               <Modal isOpen = {modalEdit} >
              <RegisterModal 
               modalEditViewFalse={modalEditViewFalse} />
              </Modal>
            </div>
          </a>
          </div> 
                    
                </div>
                <div className="forms">
                    <div className="formGroups">
                        <label htmlFor= 'username' className='label' >Username</label>
                        <input  className='labelinput' 
                        type='text' 
                        name= 'username' 
                        placeholder='username'
                       
                        />
                    </div>
                    <div className="formGroups">
                        <label className='label' htmlFor= 'password'>Password</label>
                        <input  className='labelinput'
                         type='password' 
                         name= 'password'
                         placeholder='password'
                       
                         />
                         
                    </div>
                
                
                </div>

                 <div className="footer">
          
            
                     <div>
          
                    <button type= 'button'  className = 'bbt' >Login </button>

                    </div>
                    
                    <div>
                        
                <button className='bbt'  onClick={onClose}>Cerrar</button>
                    
                   
                </div>
                    
                </div> 
               
                {/* <button onClick={onClose}>Register</button> */}
               
               
            </div>

            
        </div>

    )


    
}
