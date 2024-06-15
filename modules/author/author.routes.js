import { Router } from "express";
import { addAuthor, deleteAuthor_id, getAuthor, getAuthor_books, getAuthor_id, getAuthors_books, updateAuthor_id } from "./author.controller.js";
const authorRouter = Router()

//add new author
authorRouter.post('/authors', addAuthor)

//get authors
authorRouter.get('/authors/', getAuthor)
//get author with id
authorRouter.get('/authors/:id', getAuthor_id)
//update author with id
authorRouter.patch('/authors/:id', updateAuthor_id)
//delete author with id
authorRouter.delete('/authors/:id', deleteAuthor_id)

/************************bouns tasks ********************************/


//Add pagination to the GET endpoints for retrieving all books and authors.

authorRouter.get('/authors_books/', getAuthors_books)







//get one author with books
authorRouter.get('/authors/:author', getAuthor_books)
export default authorRouter