import { dbconnection } from "../dbConnection.js";
import mongoose, { Model, Schema, Types, model, now } from 'mongoose'

export const Book = new Schema({
    title: {
        type: String,
        required: true

    },
    content: {
        type: String,
        required: true

    },


    author: {
        type: String,
        required: true

    },
    publishDate: {
        type: Date,
        default: Date.now,

    }


})
export const Books = model('book', Book)