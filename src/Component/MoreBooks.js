import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios'



const MoreBooks = ()=>{
 
    const [books,setBooks] = useState([]);
    // const [button,setButton]= useState("hii");

    useEffect(()=>{

        axios.get("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes")
        .then(response => {
            console.log(response.data.items);
            setBooks(response.data.items)
        })
        .catch(err => console.log(err))
    },[])

    console.log("component relaoed",books)



    return (
        <div className="bottom">
            <h1>More Books</h1>
            <div className="books-container">
                {
                    books && (
                        books.map(book => (
                            <img src={book.volumeInfo.imageLinks.thumbnail} alt="book" />
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default MoreBooks;