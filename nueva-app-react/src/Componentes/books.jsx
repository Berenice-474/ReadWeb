import React, {Component}from 'react'
import SearchArea from './SearchArea'
import request from 'superagent'
import BookList from './BookList'
import './books.css'



class Books extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books : [],        //clean data =======> lo que busco de la api
            searchField: '',   // busqueda
            sort: ""   //nuevo, viejo 
        }}

    handleSort = (e) =>{
            this.setState({
            sort: e.target.value })}

    cleanData = (data) => {
        const cleanDate = data.body.items.map((book) => {
            if(book.volumeInfo.hasOwnProperty('publishedDate') === false){
                book.volumeInfo['publishedDate'] = '000';
            } else if(book.volumeInfo.hasOwnProperty('imageLinks') === false){
                book.volumeInfo['imageLinks'] = {thumbnail: 'https://i.pinimg.com/originals/74/cc/8a/74cc8a346b601afc543014d29c6e3aa0.jpg'}
            } 
            return book;
        })
        return cleanDate;
    }

    searchBook = (e) => {
        e.preventDefault()
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchField})
            .then((data)=> {
                const cleanData = this.cleanData(data);
                this.setState({books: cleanData})
            })
    }

    handleSearch = (e) => {
    this.setState({ searchField : e.target.value}) // busqueda    
    }

    render(){
        const sortedBooks = this.state.books.sort((a,b) => {
            if(this.state.sort === "Newest"){
                return parseInt(b.volumeInfo.publishedDate.substring(0,4)- parseInt(a.volumeInfo.publishedDate.substring(0,4)))
            } else if (this.state.sort === "Oldest"){
                return parseInt(a.volumeInfo.publishedDate.substring(0,4)- parseInt(b.volumeInfo.publishedDate.substring(0,4)))}
        })
        return (
            <div className= "plup">
            <SearchArea  searchBook = {this.searchBook} handleSearch={this.handleSearch} handleSort={this.handleSort}/>
            <BookList  books={sortedBooks}/>    
        </div>
        )}}



export default Books;

