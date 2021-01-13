import React , { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons';
import chestopen from './chestopen.png'
import './ButtonAdtotrunk.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';

const AddToTrunk = ({ titulo, image, autor, published, id }) => {
    const [added, setAdded] = useState(false);
    
    useEffect(() => {
      if (added) {
        Axios.post('http://localhost:3000/user/baul',
          { titulo, image, autor, published, id },
          {
            headers: { 'auth-token' : window.localStorage.getItem('token') },
          }
        ).then((response) => {
          console.log('estarespuuu',response);
          toast.configure();         
          toast("Libro agregado al baul", {              
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })
        .catch((err) => {})
        // TODO agregar catch por si falla. también avisar al usuario del error
      }
      // TODO si está agregado y lo quito, debería salir del baúl
    }, [added]);
    
    const handleAddChange = () => {
      setAdded(true);
      // TODO setAdded(!added) para que funcione como toggle y pueda quitarlo
    };

    return (
        <div className="tunkConteiner">
                <ToastContainer />
               <div className="Eyee">
                <FontAwesomeIcon icon={faEye} style={{fontSize : "2em"}} />
                <p className="texttunk">Ver más</p>
                </div>
                <div className="addStyle" >
                <input
                    className="addStyle"
                    type="image"
                    src={chestopen}
                    onClick={handleAddChange}
                />
                <ToastContainer />
                <p className= 'texttunk'>Agregar a Baúl</p>
                
            </div>
        </div>
    );
};

export default AddToTrunk;