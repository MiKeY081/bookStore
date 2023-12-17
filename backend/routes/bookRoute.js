import { Router } from "express";
import { createBook, deleteBook, getBooks, getDetails, updatetBook } from "../controllers/bookController.js";

const router = Router()

router.post("/create",createBook)
router.get("/get",getBooks)
router.get("/get/:id",getDetails)
router.put("/update/:id",updatetBook)
router.delete("/delete/:id",deleteBook)

export {router as bookRoute}