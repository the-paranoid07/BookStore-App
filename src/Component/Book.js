import React from "react";
import { useState } from "react";




const Book = ({clickedBook})=>{

    const [book,setBook] = useState(clickedBook);
    console.log("clickd book in book.js",clickedBook)

    const maxLength = 250;
    return (


        <div className="book-panel">
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="book" />
            <div className="book-info">
                <div className="book-details">
                    <div className="book-details-header">
                        <h2>{book.volumeInfo.title}</h2>
                        <h2>{book.volumeInfo.publishedDate}</h2>
                    </div>
                    <p>{book.volumeInfo.authors[0]}</p>
                    {
                        book.volumeInfo.description < maxLength ? <p>{book.volumeInfo.description}</p>:  
                        <p>{book.volumeInfo.description.slice(0,maxLength)}</p>  
                    }
                    <div className="book-details-footer">
                        <span>Avg Rating : {book.volumeInfo.averageRating} </span>
                        <span>Rating Count : {book.volumeInfo.ratingsCount} </span>
                        <span>Publisher : {book.volumeInfo.publisher} </span>
                        <span>Language : {book.volumeInfo.language} </span>
                    </div>
                    <div className="book-links">
                        <a href={book.volumeInfo.previewLink}>Read Now!</a>
                        <a href={book.volumeInfo.infoLink}>More Info</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book;