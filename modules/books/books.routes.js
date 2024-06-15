import { Router } from "express";
import { addBooks, deleteBook, getBook, getBooks, updateBook } from "./books.conroller.js";
const bookRouter = Router()


//add new book

bookRouter.post('/books', addBooks)
//get books

bookRouter.get('/books', getBooks)
//get book by id

bookRouter.get('/books/:id', getBook)
//update book by id

bookRouter.patch('/books/:id', updateBook)

//delete book by id

bookRouter.delete('/books/:id', deleteBook)


export default bookRouter