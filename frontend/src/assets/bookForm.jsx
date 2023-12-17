import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import handleImage from "./handleImage";

const BookForm = ({ book }) => {
  const [formData, setFormData] = useState({
    title: book?.title || "",
    author: book?.author || "",
    price: book?.price || "",
    published: book?.published || "",
    revised: book?.revised || "",
    description: book?.description || "",
    image: book?.image || "",
  });
  const [getImage, setGetImage] = ("")

  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Handle Image Link 
    const cloud_image_link = handleImage(e);


    setFormData(prev=>
      ({
        ...prev,
          image: cloud_image_link,
      }))
    if (!id) {
      await axios
        .post("/api/v1/book/create", formData)
        .then((res) => console.log(res));
      console.log("Form submitted:", formData);
    } else {
      await axios
        .put(`/api/v1/book/update/${id}`, formData)
        .then((res) => console.log(res));
    }
    navigate("/manage");
    // Reset the form after submission if needed
    setFormData({
      title: "",
      author: "",
      price: "",
      published: "",
      revised: "",
      description: "",
      image: "",
    });
  };
  useEffect(() => {
    // Convert date formats when the component mounts
    if (book?.published) {
      setFormData((prevData) => ({
        ...prevData,
        published: book.published.split("T")[0], // Extract date part
      }));
    }
    if (book?.revised) {
      setFormData((prevData) => ({
        ...prevData,
        revised: book.revised.split("T")[0], // Extract date part
      }));
    }
  }, [book]);

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md transition-transform duration-300 hover:shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
            placeholder="Enter title"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="author"
            className="block text-gray-700 font-bold mb-2"
          >
            Author:
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
            placeholder="Enter author"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Price:
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
            placeholder="Enter price"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="published"
            className="block text-gray-700 font-bold mb-2"
          >
            Published Date:
          </label>
          <input
            type="date"
            id="published"
            name="published"
            value={formData.published}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="revised"
            className="block text-gray-700 font-bold mb-2"
          >
            Revised Date (if any):
          </label>
          <input
            type="date"
            id="revised"
            name="revised"
            value={formData.revised}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
            placeholder="Enter description"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Image URL:
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
            placeholder="Enter image URL"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookForm;
