import { BookModel } from "../models/bookmodel.js";

const createBook = async (req, res) => {
  try {
    console.log(req.body);
    const { title, author, price, published, revised, description, image } =
      req.body;
    const bookExist = await BookModel.findOne({
      $and: [{ title, author, published }],
    });
    if (!bookExist) {
      const book = await BookModel.create({
        title,
        author,
        price,
        published,
        revised,
        description,
        image,
      });
      res.status(200).send({
        success: true,
        message: "Book created successfully!!",
      });
    } else {
      res.status(200).send({
        success: false,
        message: "Book already exist",
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await BookModel.find();
    res.status(200).send({
      books,
      success: true,
      message: "Books recieved",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

const getDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookModel.findById(id);
    res.status(200).send({
      book,
      success: true,
      message: "Book recieved",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

const updatetBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, price, published, revised, description, image } =
      req.body;
    const book = await BookModel.findByIdAndUpdate(
      id,
      { title, author, price, published, revised, description, image },
      { new: true }
    );
    res.status(200).send({
      book,
      success: true,
      message: "Book recieved",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookModel.findByIdAndDelete(id);
    res.status(200).send({
      book,
      success: true,
      message: "Book deleted",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

export { createBook, getBooks, getDetails, updatetBook, deleteBook };
