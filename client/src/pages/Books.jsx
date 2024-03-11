import React, { useEffect,useState } from "react";
import NavBar from "../components/NavBar";
import "./style.css";
import axios from "axios";
import { BookSData } from "../booklist";
import BookCard from "../components/BookCard";
function Books() {
  const [books,setBooks]=useState([])
  console.log(books);
  useEffect(()=>{
axios.get("http://localhost:5000/api/books").then((res)=>setBooks(res.data.data)).catch((e)=>console.log(e))

  },[])
  return (
    <div>
      
       
      {/* <MainNavBar /> */}
      <div className="books-container">
  

        <NavBar />


        <div style={ { display:'flex' ,flexWrap:'wrap'}}>

          {books?.map((book)=><BookCard book={book}/>)}
          
        </div>
      </div>
    </div>
  );
}

export default Books;
