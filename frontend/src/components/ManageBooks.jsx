import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ManageBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("/api/v1/book/get"); // Adjust the API endpoint accordingly
        setBooks(response.data.books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      // Perform delete request
      await axios.delete(`/api/v1/book/delete/${id}`);
      // Update the state after successful deletion
      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Book List</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Image</th>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Author</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Published Date</th>
            <th className="py-2 px-4 border-b">Revised Date</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td className="py-2 px-4 border-b">
                <img
                  className="w-24 h-32 object-cover"
                  src={book.image}
                  alt={book.title || "No image"}
                />
              </td>
              <td className="py-2 px-4 border-b whitespace-nowrap">
                {book.title}
              </td>
              <td className="py-2 px-4 border-b">{book.author}</td>
              <td className="py-2 px-4 border-b whitespace-nowrap">
                ${book.price}
              </td>
              <td className="py-2 px-4 border-b">
                {new Date(book.published).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </td>
              <td className="py-2 px-4 border-b">
                {book.revised ? (
                  new Date(book.revised).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                ) : (
                  <p>Not revised</p>
                )}
              </td>
              <td className=" py-2 px-4 border-b w-80">
                <div className="line-clamp-3 max-w-prose">
                  {book.description}
                </div>
              </td>
              <td className="py-2 px-4 border-b whitespace-nowrap">
                <Link
                  to={`/edit/${book._id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-lg mr-2 transition duration-300"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(book._id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-lg transition duration-300"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="py-4 px-4 border ">
        <Link
          to={`/create`}
          className="bg-blue-500 text-lg hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-xl  mr-2 transition duration-300"
        >
          Add a new Book info
        </Link>
      </div>
    </div>
  );
};

export default ManageBooks;
