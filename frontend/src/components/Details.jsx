import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`/api/v1/book/get/${id}`);
        setBook(response.data.book);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, [id]);
  console.log(book);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row flex-1 justify-center items-center">
      <div className="lg:w-1/2 lg:h-3/4 w-3/4 h-1/2 overflow-hidden lg:ml-8 rounded-2xl hover:rounded-2xl">
        <img
          className="w-full h-auto scale-100 hover:scale-105 rounded-2xl hover:rounded-3xl transition-all duration-300"
          src={book.image}
          alt={book.title || "No image"}
        />
      </div>
      <div className="lg:w-1/2 p-8">
        <h2 className="text-4xl font-bold mb-4 text-center">{book.title}</h2>
        <p className="text-gray-800 text-base mb-6 line-clamp-[20]">{book.description}</p>
        <div className="grid lg:grid-cols-2 gap-4 mb-6 ">
          <p className="text-gray-700 text-base mb-2 lg:mb-0 lg:mr-4">
            <span className="text-lg font-bold mr-3">Author:</span> {book.author}
          </p>
          <p className="text-gray-700 text-base"> <span className="text-lg font-bold mr-3">Price:</span> ${book.price}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 mb-6 ">
          <p className="text-gray-700 text-base mb-2 lg:mb-0 lg:mr-4">
             <span className="text-lg font-bold mr-3">Published:</span>{new Date(book.published).toLocaleDateString('en-US',{
              year: 'numeric',
              month: 'short',
              day: "2-digit"
             })}
          </p>
          {book.revised && (
            <p className="text-gray-700 text-base">
               <span className="text-lg font-bold mr-3">Revised:</span> {new Date(book.revised).toLocaleDateString('en-US',{
              year: 'numeric',
              month: 'short',
              day: "2-digit"
             })}
            </p>
          )}
        </div>
        <div className="grid lg:grid-cols-2 gap-4 mb-6 ">
          <p className="text-gray-700 text-base mb-2 lg:mb-0 lg:mr-4">
             <span className="text-lg font-bold mr-3">Uploaded At:</span> {new Date(book.createdAt).toLocaleDateString('en-US',{
              year: 'numeric',
              month: 'short',
              day: "2-digit"
             })}
          </p>
          {book.revised && (
            <p className="text-gray-700 text-base">
              <span className="text-lg font-bold mr-3">Re-Uploaded At: </span> {new Date(book.updatedAt).toLocaleDateString('en-US',{
              year: 'numeric',
              month: 'short',
              day: "2-digit"
             })}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
