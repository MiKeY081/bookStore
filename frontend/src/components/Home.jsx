import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../assets/card";

const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios.get("/api/v1/book/get").then((res) => setBooks(res.data.books));
  }, []);
  console.log(books);
  return (
    <>
      <h1 className="text-3xl font-bold shadow-neutral-500 text-center p-4 m-4">
        All books
      </h1>
      <div className="grid grid-cols-2 md:grid-col-2 lg:grid-cols-3 gap-4  border-none ">
        {books?.map((book) => (
          <BookCard book={book} key={book._id} />
        ))}
      </div>
    </>
  );
};

export default Home;
