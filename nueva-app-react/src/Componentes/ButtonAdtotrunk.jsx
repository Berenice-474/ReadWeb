import React , { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons';
import chestopen from './chestopen.png'
import './ButtonAdtotrunk.css'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';

const AddToTrunk = ({ title, image, autor, published, id }) => {
    const [added, setAdded] = useState(false);   

    useEffect(() => {        
      if (added) {
     

        Axios.post('http://localhost:3000/user/match', 
        {title},
        {
            headers: {'auth-token': window.localStorage.getItem('token')}
        })
        .then((response) => {
            console.log('usersmatch',response)
            
        })
        .catch(err=>{console.log(err)})
           
      
        Axios.post('http://localhost:3000/user/baul',
          { title, image, autor, published, id },
          {
            headers: { 'auth-token' : window.localStorage.getItem('token') },
          }
        ).then((response) => {
          console.log('estarespuuu',response);
          toast.configure();         
          toast.dark("Libro agregado al baul", {              
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
          });
        })
        .catch((error) => {
            if (error.response) {
                console.log('errordata' , error.response.data);
                console.log('errorstaurs', error.response.status);
                console.log('errorheaderss', error.response.headers);
              }
            if(error.response.headers){
            toast.configure();         
            toast.dark('Tenes que iniciar sesión!', {
                position: "top-center",
                autoClose: false,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })} else {
                if(error.response.data){
                    toast.configure();         
                    toast("el libro ya ha sido agregado", {              
                      position: "top-center",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    })
                }
            }
        })
        // TODO agregar catch por si falla. también avisar al usuario del error
      }
      
    }, [added]);
    
    const handleAddChange = () => {
      setAdded(true);
      // TODO setAdded(!added) para que funcione como toggle y pueda quitarlo
    };

    return (
        <div className="tunkConteiner">               
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
                <p className= 'texttunk'>Agregar a Baúl</p>
                
            </div>
        </div>
    );
};

export default AddToTrunk;