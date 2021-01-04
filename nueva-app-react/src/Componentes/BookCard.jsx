import React from 'react';
import './BookCard.css'

import StarRating from './StarRating'
import Addtotrunk from './ButtonAdtotrunk'


const BookCard = (props) => {




    return(

        <div className= 'container'>
            
            <img  className= 'imageCard' src= {props.image} alt="" />
            <div className="div desc">
            <h2 className = 'tituloCard'> Titulo: {props.title}</h2>
            <h3 className = "textoCard">Autor : {props.author} </h3>
            <p className = "textoCard"> Año de publicación : {props.published === "000" ? 'No se encontró' : props.published.substring(0,4)}</p>
            {/* <button type="button" className="btn btn-dark">Dark</button> */}
            <StarRating/>
            <Addtotrunk  titulo = {props.title} image= {props.image} autor={props.author} published={props.published}/>
            
        </div>
        
        </div>
    )
}


export default BookCard;