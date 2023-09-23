import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios'
import Book from "./Book";

const MainBooks = ({setShowFirstComponent,showFirstComponent,setClickedBook})=>{
 
    const [books,setBooks] = useState([]);
    
    // const [button,setButton]= useState("hii");
    const maxLength = 250;
    useEffect(()=>{

        axios.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=3")
        .then(response => {
            console.log(response.data.items);
            setBooks(response.data.items)
        })
        .catch(err => console.log(err))
    },[])

    console.log("component relaoed",books)

   


    function showBook(){
        setShowFirstComponent(false);
    }


    return (
        <div className="top">
            <div className="top-books">
            {
                books && (
                    books.map(book => (
                        <div className="book">
                            <img src={book.volumeInfo.imageLinks.thumbnail} alt="book" />
                            <div className="book-info">
                                <div className="book-details">
                                    <h2>{book.volumeInfo.title}</h2>
                                    {
                                        book.volumeInfo.description && (
                                            book.volumeInfo.description < maxLength ? <p>{book.volumeInfo.description}</p>:  
                                            <p>{book.volumeInfo.description.slice(0,maxLength-1)}</p> 
                                        )
                                    }
                                </div>
                                <button onClick={()=>{
                                    setClickedBook(book);
                                    setShowFirstComponent(true);
                                }}>Now Read!</button>
                            </div>
                        </div>
                    ))
                )
            }
            </div>
        </div>
    )
}

export default MainBooks;