import React from "react";
import { useState } from "react";




const Book = ({clickedBook})=>{

    const [book,setBook] = useState(clickedBook);
    console.log("clickd book in book.js",clickedBook)

    const maxLength = 350;
    return (


        <div className="book-panel">
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="book" />
            <div className="book-info">
                <div className="book-details">
                    <h2>{book.volumeInfo.title}</h2>
                    <p>{book.volumeInfo.authors[0]}</p>
                    {
                        book.volumeInfo.description <= maxLength ? <p>{book.volumeInfo.description}</p> : <p>{book.volumeInfo.description.slice(0,maxLength)}</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Book;