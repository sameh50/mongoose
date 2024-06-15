import { dbconnection } from "../dbConnection.js";
import mongoose, { Model, Schema, Types, model, now } from 'mongoose'

export const author = new Schema({
    name: {
        type: String,
        required: true

    },
    bio: {
        type: String,


    },
    birthDate: {
        type: Date

    },

    books: [{
        type: mongoose.Types.ObjectId,
        ref: 'book'

    }],

}
)
export const authors = model('author', author)