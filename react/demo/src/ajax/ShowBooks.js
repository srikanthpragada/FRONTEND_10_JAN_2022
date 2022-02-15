

import React, { useState, useEffect } from 'react'
import $ from 'jquery'


export default function ShowBooks() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        $.get("http://localhost:8000/books",
            null,
            (result) => {
                setBooks(result)
            }
        ) // get
       }
    )


    return (
        <>
            <h1>List of Books</h1>
            <ul>
                {
                    books.map((book, index) => <li key={index}>{book.title}</li>)
                }
            </ul>
        </>
    )
}
