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

    useEffect(()=> {
      if(added) {
        Axios.get('http://localhost:3000/user/match', 
                {
          headers: {'auth-token': window.localStorage.getItem('token')}
        })
        .then((response) => {
            console.log('usersmatch',response)            
        })
        .catch(err=>{console.log(err)})
      }

    },[added])
    
    const handleAddChange = () => {
      setAdded(true);
     
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