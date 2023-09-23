import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios'
import Book from "./Book";

const MainBooks = ({setShowFirstComponent,showFirstComponent})=>{
 
    const [books,setBooks] = useState([]);
    const [clickedBook,setClickedBook] = useState({});
    // const [button,setButton]= useState("hii");
    const maxLength = 350;
    useEffect(()=>{

        axios.get("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes&maxResults=3")
        .then(response => {
            console.log(response.data);
            setBooks(response.data.items)
        })
        .catch(err => console.log(err))
    },[])

    console.log("component relaoed",books)

    console.log("clicked book in main bbook .js",clickedBook)


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
                                        book.volumeInfo.description <= maxLength ? <p>{book.volumeInfo.description}</p> : <p>{book.volumeInfo.description.slice(0,maxLength)}</p>
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
            
            {
                showFirstComponent && <Book clickedBook ={clickedBook}/>
            }
        </div>
    )
}

export default MainBooks;