import React from 'react'
import React, {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link, useMatch,}  from 'react-router-dom';

const Edit = () => {
    const dispatch = useDispatch();
    const [newBook, setNewBook] = useState({
      title: "",
      category: "",
      authors: "",
      image:"",
      description:"",
    });
    const match = useMatch("/edit/:id");
    const handleChange = (e) => {
        setNewBook({...newBook, [e.target.name]: e.target.value});
    }
    }
    return (
        <div className='edit'>
            <h1>Edit book</h1>
                <from>
                    <input type="text"  name="title"  value={newBook.title}  onChange={{handleChange}} />
                    <input type="text" name="category" value={newBook.category} onChange={{handlechange}} />
                    <input type="text" name="authors " value={newBook.authors} onChange={{handlechange}} />
                    <input type="text" name="image" value={newBook.image} onChange={{handlechange}} />   
                    <input type="text" name="description" value={newBook.description} onChange={{handlechange}}/>
                    </from>
            <Link to='/'><Button className='btn-edit' variant="primary" type="submit" onClick={handleEdit}>Edit book</Button></Link>
        </div>
    )
    

export default Edit;
