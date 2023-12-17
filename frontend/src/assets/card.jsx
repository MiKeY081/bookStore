import React from "react";
import { Link, useNavigate } from "react-router-dom";

const BookCard = ({ book }) => {
  const navigate = useNavigate()
  return (
    <div className="max-w-sm h-[600px] rounded overflow-hidden shadow-lg bg-white p-1 hover:scale-105 hover:shadow-2xl transition-all duration-200 mb-4">
      <img
        className="w-full h-3/5 object-cover rounded-xl scale-100 hover:scale-105 hover:rounded-xl transition-all duration-300"
        src={book.image} 
        alt={book.title || "No image"}
        onClick={()=>{navigate(`/details/${book._id}`)}}
      />
      <div className="mx-8 my-4">
        <div className="px-2 py-2">
          <div className="font-bold text-2xl mb-2 text-gray-800 whitespace-normal sm:text-lg">{book.title}</div>
          <p className="text-gray-600 text-base line-clamp-2">{book.description}</p>
        </div>
        <div className="flex gap-2 lg:justify-between sm:flex-col sm:items-start lg:flex-row">
          <p className="text-gray-700 text-base mt-2 whitespace-nowrap">
           <span className="text-lg font-bold">Price:</span>  ${book.price}
          </p>
            <Link
              to={`/details/${book._id}`}
              className="bg-blue-500 hover:bg-blue-700 whitespace-nowrap text-white font-bold py-2 px-4 rounded-full transition duration-300"
            >
              See details
            </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
