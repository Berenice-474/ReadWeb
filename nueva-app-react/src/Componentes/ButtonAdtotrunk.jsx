import React , {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons';
import chestopen from './chestopen.png'
import './ButtonAdtotrunk.css'
import boxbook from './boxbook.png'
import BookCard from './BookCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Axios from 'axios';


const Addtotrunk = (props) => {         
    const trunkdata = () => {
        Axios.post('http://localhost:3000/user/baul', {            
            titulo: Libro.titulo,
            image: Libro.image,
            autor: Libro.autor,
            published: Libro.published,
            id: Libro.id
        }, {
            headers: {
                'auth-token' : window.localStorage.getItem('token'),                
            },
        }).then((response) => {
            console.log(response)
        })
    }         
  
    const [Libro, setLibro] = useState({
        titulo : '',
        image : '',
        autor: '',
        published: '',
        id:''
    })

    const handleBookChange = () => {
        toast.configure()        
        toast("Libro agregado al baul", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }); 

        setLibro({
            titulo : props.titulo,
            image: props.image,
            autor: props.autor,
            published: props.published,
            id: props.id
        })
    }
    console.log('titu', Libro)    
    

    return (
        <div className= "tunkConteiner">
            <div className='Eyee'>         
            <FontAwesomeIcon  icon= {faEye} style = {{fontSize : "2em"}}/>
            <p className= 'texttunk'>Ver más</p>   
            </div> 
            <div className="addStyle" >
            <input 
             className="addStyle" 
             type="image" 
             src={chestopen} 
             onClick={ 
                trunkdata(),                 
                handleBookChange}
               /> 
            <p className= 'texttunk'>Agregar a Baúl</p>        
            </div>
            </div> )
}


export default  Addtotrunk;