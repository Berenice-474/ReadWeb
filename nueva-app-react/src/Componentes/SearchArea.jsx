import React, {useState} from 'react'
import './SearchArea.css'




const SearchArea = (props) => {

    return(
        <div className = 'cajaSearchArea'>
            <form onSubmit ={props.searchBook} action="">
                <input  onChange={props.handleSearch} className= "texto22" placeholder="¿Que estas buscando?"  type='text'/>
                {/* <button type="submit"  > Search </button>   */} 
                <select defaultValue="Sort" onChange={props.handleSort} className= "texto22">
                    <option  disabled value="Sort" className= "texto22">Sort</option>
                    <option  value="Newest" className= "texto22">Newest</option>
                    <option  value="Oldest" className= "texto22">Oldest</option>
                </select>
                
            </form>
        </div>
    )
}




export default SearchArea;