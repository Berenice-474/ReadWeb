import React from 'react';
import './BookCard.css'
import StarRating from './StarRating'
import './ModalBooks.css'



const Prueba= (props) => {

    return(
        <div className= 'containera'>  
        <div className= 'conteinerb' >          
            <img  className= 'imageCard' src= {props.image} alt="" />
            </div>
            <div className="div desc">
            <h2 className = 'tituloCarda'> Titulo: {props.title}</h2>           
            <p className = "textoCard"> Año de publicación : {props.published}</p>                      
            </div>        
            </div>
    )
}


export default Prueba;