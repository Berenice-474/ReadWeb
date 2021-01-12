import React  from 'react';
import './ModalBooks.css';
import Prueba from './prueba.jsx';

const ModalBook = (props) => {

    
    
    const { modalEditViewFalse, databook} = props;      
    console.log('acaasito', databook) 
    return (               
        <div className='conteinera'> 
        <button 
        className= 'botonsi'
        onClick={modalEditViewFalse}>cerrar</button>        
                {databook.map((Array,i) => {
                return(   <Prueba
                key = {i}
                id = {Array.idBook}
                image = {Array.image}
                title = {Array.titulo}
                published = {Array.published}
                />) 
                })}
                </div>
                )}

export default ModalBook; 