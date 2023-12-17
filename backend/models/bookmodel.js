import { Schema, model } from "mongoose";

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    published: {
        type: Date,
        required: true,
    },
    revised: {
        type: Date,
    },
    description: {
        type: String
    },
    image: {
        type: String,
    },
},{
    timestamps: true
})
 
export const BookModel = model("AllBooks",bookSchema)