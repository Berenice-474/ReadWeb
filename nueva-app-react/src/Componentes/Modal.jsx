import React, {useState} from 'react';
import './Modal.css';
import Books from './books'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileExcel, faRulerHorizontal,faWindowClose,faTimesCircle} from '@fortawesome/free-solid-svg-icons';


const MODAL_STYLES = {
    /* position: "fixed", */
    top: "50%",
  left: "50%", 
    translate: "translate(-700%, -70%)",
    backgroundColor: "#FFF",
   
 padding: '50xp',
    zindex: 1000 
}

export default function Modal({ open, books, onClose}) {
    if(!open)     return null

    return(
        <div /*  style={MODAL_STYLES}  */>
            <div className = "botonClose" >
            <button onClick={onClose}   /* className = "botonClose" */>              
            <FontAwesomeIcon  icon= {faWindowClose} style = {{fontSize : "3em", color: "#446647", top: "50%", opacity: "0.2"}}/>
            </button>
            </div>
            <Books/>
            {books}
        </div>
    )
}

