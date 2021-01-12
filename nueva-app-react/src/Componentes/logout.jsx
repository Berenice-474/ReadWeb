import React, {useState} from 'react';
import Axios from 'axios';


export default function  userLogged(props) {               
        const LogOut = () => {
            Axios.post('http://localhost:3000/user/logout',               
             {
                headers: {
                    'auth-token' : window.localStorage.getItem('token'),                
                },
            }).then((response) => {
                console.log(response)
                window.localStorage.removeItem('token')
            })
        }    
        return(
        <div >
         {/*    <div className = "botonLogOut" >
            <button    
             onClick = { e => {LogOut()}}
            >   CerrarSesión           
            </button>
            </div> */}
            Holaaa
             </div>
    )
}


