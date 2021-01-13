import React, {useState} from 'react'
import  './home.css'; 
import NavBar from './NavBar';
import Busqueda from './Busqueda';
import Busqueda2 from './Busqueda2';
import Company from './Company.png'
import AboutUs from './AboutUs';
import Axios from 'axios'


const Home = (props) => {

    const LogOut = () => {
        Axios.post('http://localhost:3000/user/logout',               
         {
            headers: {
                'auth-token' : window.localStorage.getItem('token'),                
            },
        }).then((response) => {
            console.log(response)
            window.localStorage.clear('token')
        })
    }  
    

 

    return(
        <div className='cajaContenedora'>
            <div className='cajaContenedora1' style = { {position: "fixed"} }>
            <button type="button"  className="botonlogout"  onClick = {(event) => LogOut()}  > Cerrar sesión </button>
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