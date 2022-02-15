

import React, { useState} from 'react'
import $ from 'jquery'


export default function ListBooks() {
    const [books, setBooks] = useState([])

    function getBooks() {
        $.get("http://localhost:8000/books", null,
            (result) => {
                 setBooks(result)
             }
        )
    }


    return (
      <>
            <h1>List of Books</h1>
            <button onClick={getBooks}>Get Books</button>
            <p></p>
            <ul>
            {
                    books.map((book, index) => <li key={index}>{book.title}</li>)
            }
            </ul>
        </>
  )
}
