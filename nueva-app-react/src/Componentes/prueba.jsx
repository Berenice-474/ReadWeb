import React from 'react';
import './BookCard.css'
import StarRating from './StarRating'
import './ModalBooks.css'


const Prueba= (props) => {
    console.log(props)

    return(
        
        <div className= 'containera'>  
        <div className= 'conteinerb' >          
            <img  className= 'imageCard' src= {props.image} alt="" />
            </div>
            <div className="divdesc">
            <h2 className = 'tituloCard'> Titulo: {props.title}</h2>           
            <p className = "textoCard"> Año de publicación : {props.published}</p>                      
            </div>        
            </div>
    )
}


export default Prueba;