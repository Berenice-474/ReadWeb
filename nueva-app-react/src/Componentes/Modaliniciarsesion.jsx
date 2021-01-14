import React, { useState } from 'react';
import './Modaliniciarsesion.css';
import Bookloverpana from './Bookloverpana.png';
import RegisterModal from './ModalRegister';
import { Modal } from 'reactstrap';
import Axios from 'axios';
import {  toast} from 'react-toastify';

export default function LoginModal({ open, onClose, props}) {
 
    const [modalEdit, modalInsertEdit] = useState(false);
    const modalEditView = () => modalInsertEdit(!modalEdit);
    const modalEditViewFalse = () => modalInsertEdit(false);
    
    const [data, setData] = useState({
        username: "",
        password:""
    })
    const {username, password} = data;
    const handleInputData = (event) => {
        const {name, value} = event.target
        setData(data => ({ ...data, [name]: value })); }

    const [isOpened, setIsOpened] = useState(false)
    const Login = () => {
        Axios.post('http://localhost:3000/user/login', {
            username : data.username,
            password : data.password         
        }).then((response) => {
            console.log(response)
            window.localStorage.setItem('token', response.data.token);
            window.localStorage.setItem('username', response.data.username)  
            window.location.href = '/'             
        }).catch((err) => {
            toast.configure();         
            toast.dark("No te encuentras registrado", {              
              position: "top-center",
              autoClose: 1500,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
            });
        })
    }
    if (!open) return null
    return (
        <div className='base-conteiner' >
            <div className='header'></div>
                <div className="content">
                <div className="image">
                <img src={Bookloverpana} />
                <div><a className="createComponent ">
                <div className="accountComponent">
                 <a className="aa"
                            href="#"
                            onClick={() => modalEditView()}                           
                            > No tienes todavia una cuenta? Registrate! </a>
                            <div>
                            <a className="aa"/* href="/forgot" */> ¿olvidaste tu contraseña? </a>
                            </div>
                            <Modal isOpen={modalEdit} >
                                <RegisterModal
                                 modalEditViewFalse={modalEditViewFalse} />
                            </Modal>
                            </div>
                            </a>
                            </div>

                </div>
                <div className="forms">
                        <div className="formGroups">
                        <label htmlFor='username' className='label' >Username</label>
                        <input className='labelinput'
                            type='text'
                            name='username'
                            placeholder='username'
                            onChange={ handleInputData }
                                                    />
                </div>
                <div className="formGroups">
                        <label className='label' htmlFor='password'>Password</label>
                        <input className='labelinput'
                            type='password'
                            name='password'
                            placeholder='password'
                            onChange={ handleInputData} 
                        />
                </div>
                </div>
                <div className="footer">
                    <div>
                        <button
                         type='button'
                         className='bbt'
                         onClick = {Login}                        
                        >Login </button>
                    </div>
                    <div>
                        <button className='bbt' onClick={onClose}>Cerrar</button>
                    </div>
                    </div>  
                    </div>
            </div>

    )



}
