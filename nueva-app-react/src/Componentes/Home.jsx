import React, {useState} from 'react'
import  './home.css'; 
import NavBar from './NavBar';
import Busqueda from './Busqueda';
/* import SearchArea from './SearchArea' */
import Books from './books.jsx'
import Busqueda2 from './Busqueda2';
import Modal from './Modal'
import Company from './Company.png'
import Questions from './Questions.png'
import AboutUs from './AboutUs';


const Home = (props) => {

    

    return(
        <div className='cajaContenedora'>
            <div className='cajaContenedora1' style = { {position: "fixed"} }>
            <div className='component-conteiner' > 
            <NavBar/>  </div>
            <div>           
            <Busqueda/> </div> 
            </div>
           
            <div className='cajaContenedora2'>
      
            <div className='cajaImagen'></div>
             <div className='cajaTexto'><p className='Titulo'>El club de la lectura</p></div>
        
             </div>
             <div className="Blabla">
                 
             <Busqueda2/>     
             
             </div>  
             <div className= 'cajaSearchbar'>
            
           {/*   <Books/> */}</div>
                <div className= 'cajabusqueda'>              
               
                <img className="imgensita" src={Company} />           
               
                 </div>
                 <div>
                 <AboutUs/>
                 </div>
         </div>
    )
}


export default  Home 