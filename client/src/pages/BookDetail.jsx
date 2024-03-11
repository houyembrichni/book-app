import React from 'react'
import {useParams } from 'react-router-dom'
import BookCard from '../components/BookCard';


function BookDetail() {
  const { id } = useParams();
const Book = Book.find((elt) => elt.id === id);
  return (
    <div>
      {Book.title}
      {Book.description}
      {Book.authors}
      {Book.category}
    </div>
  );
}

export default BookDetail;
 
 
  