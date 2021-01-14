import React, {useState} from 'react';
import './Modaliniciarsesion.css';
import {ModalHeader, ModalBody, ModalFooter, FormGroup } from 'reactstrap';
import './ModalRegister.css'
import stayathome from './stayathome.png'
import Axios from 'axios';
import swal from 'sweetalert';

export default function RegisterModal(props){

    const { modalEditViewFalse} = props;    
    const [datos, setDatos] = useState({
        username: "",
        email: "",
        password: "",
        nuevaContraseña: "",
        level: 'User'
      })

      const {username,email} = datos; 

    
      const handleInputChange = (event) => {
        const {name, value} = event.target
        setDatos(datos => ({ ...datos, [name]: value }));
      }

      const register = () => {
          Axios.post('http://localhost:3000/user/', {
              username : datos.username,
              password : datos.password,
              email: datos.email
              }).then((response) => {
              console.log(response)        
              window.location.href = '/'   
              })
              }

    return(
           <div /*  className = 'base-conteiner' */ >
           <ModalHeader className= 'base-conteiiner'>
               <div className= 'header'>
               <p className='textRg'>Register</p>
               <img className='imgContent'  src= {stayathome}/>                   
               </div>
           </ModalHeader>
           <ModalBody>
               <FormGroup>
               <div className='inputContEditUser'>
               <label className='editDataUserName'>
                Nombre
               <input 
                className='inputDataUser'                
                placeholder='nombre'
                type="text"
                name='username'
                value={username}
                onChange={handleInputChange}
                />
            </label>
            <label className='editDataUserName'>
              Email
          <input className='inputDataUser'
                placeholder='email'
                type="text"
                name="email"
                 value={email} 
                 onChange={handleInputChange}
                />
            </label>         
            <label className='editDataUserName'>
               <input className='inputDataUser'
                placeholder='Igrese  contraseña'
                type="password"
                name='password'               
                onChange={handleInputChange}               
               />
            </label>
            <label className='editDataUserName'>
              Ingrese su contraseña actual para confirmar
           <input className='inputDataUser'
                type="password"
                placeholder='Repita su contraseña'
                name="nuevaContraseña"                
                onChange={handleInputChange}                
              />
           </label>
           </div>
           </FormGroup>
           </ModalBody>
           <ModalFooter  className='buttonContEditData'>
           <button className="closeButton" onClick={modalEditViewFalse}>Cerrar</button>
           <button className= "closeButton"
           onClick = {  event => { 
               register()
               event.preventDefault();                                            
               if(!datos.password) return swal('Mmm te olvidaste de ingresar contraseña!');
               if(datos.password !== datos.nuevaContraseña) return swal("Mmm Las contraseñas no coinciden");
               if(datos && datos.password === datos.nuevaContraseña) swal("Buen trabajo!", "Estas registrado!", "success" );
               
               }}>Registrarse</button>
           </ModalFooter>
       </div>

    )


    
}






