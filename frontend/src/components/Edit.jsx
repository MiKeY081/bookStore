import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import BookForm from '../assets/bookForm';

const Edit = () => {
    const {id} = useParams();
    const [book, setBook] = useState()
    useEffect(()=>{
        axios.get(`/api/v1/book/get/${id}`).then(res=>setBook(res.data.book))
    },[id])
    console.log(book)
  return (
    <>
   { book &&
    <BookForm book ={book}/>}
    </>
  )
}

export default Edit