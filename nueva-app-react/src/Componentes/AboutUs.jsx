import React , {useState} from 'react';
import './AboutUs.css';
import boxbook from './boxbook.png';
import buscarimg from './buscarimg.png'
import addfile from './addfile.png'
import Conversation from './Conversation.png'
import { Modal } from 'reactstrap';
import ModalBook from './ModalBooks';
import Axios from 'axios';
import {  toast} from 'react-toastify';


const AboutUs = (props) => {   

    const [modalEdit, modalInsertEdit] = useState(false);
    const modalEditView = () => modalInsertEdit(!modalEdit);
    const modalEditViewFalse = () => modalInsertEdit(false);

    const [databook, setdatabook] = useState(['']);

    const userBook = () => {        
        Axios.get('http://localhost:3000/user/books', {
            headers: {
                'auth-token' : window.localStorage.getItem('token')},
        })
             .then((response) => {
                 console.log('acaa', response)  
                 setdatabook([response.data])})
             .catch((error) => { 
              toast.configure();         
              toast.dark("No se ha encontrado el usuario", {              
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
              });  
                   })}             
               

                
    return(
        <section id='nosotros' className='Nosotros'>          
           <div className= 'ConteinerMayor'>
                   <div className='mibaul'>
                   <div>
                   <button 
                   className='botonsiño'
                   onClick={(event) => {                   
                    modalEditView()
                    userBook()
                    event.preventDefault() }}     
                   >Mi baúl</button>                   
                     <Modal isOpen={modalEdit} >                                
                                <ModalBook                                
                                 modalEditViewFalse={modalEditViewFalse}
                                 databook = {databook} />
                            </Modal>
                   </div>
                   <div>
               <input              
               type='image'
                src={boxbook}
               />              
                </div>
               </div>               
               <div className='busca'>
                   <div >
                   <input
                className='buscar1'              
               type='image'
               src={buscarimg}
             />
             </div>
             <div>
                 <p className='texto'> Busca el libro que quieras </p>
             </div>
                   
               </div>
               <div className='guarda'>
               <div >
                   <input
                className='buscar1'              
               type='image'
               src={addfile}
             />
             </div>
             <div>
                 <p className='texto'>AGREGALO A TU BAÚL </p>
             </div>
               </div>
               <div className='uala'>
               <div >
                   <input
                className='buscar1'              
               type='image'
               src={Conversation}
             />
             </div>
             <div>
                 <p className='texto'>CONECTATE CON OTROS</p>
             {/*     <h3 className='textodos'>Si llegan a coincidir 5 libros de tu baúl con el de otro nosotros te avisaremos
                     y se abrirá automaticamente un chat para que puedan intercambiar más intereses y 
                     conocimiento!!
                 </h3> */}
             </div>
               </div>
               <div className='imgtrunk'></div>
           </div>
        </section>

       
        

    )
}


export default AboutUs;