import React from 'react'
import './Bookstyle.css'
import { Link } from 'react-router-dom';

function BookCard({book}) {
    console.log("🚀 ~ BookCard ~ book:", book)

  
  return (
    
    <div className='carditem'  >
      <Link to={`/card/${book._id}`}><img  src={book.image} /></Link>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <p>{book.authors}</p>
    </div>
  );
}

export default BookCard