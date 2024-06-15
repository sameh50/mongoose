

import { Books } from "../../database/models/book.model.js"



//add new book
export const addBooks = async (req, res) => {

    const { title, content, author, publishDate } = req.body
    const newBook = await Books.insertMany({ title, content, author, publishDate })
    return res.json({ msg: "add success", newBook })


}

//get all books
export const getBooks = async (req, res) => {

    const getBooks = await Books.find()
    return res.json({ msg: "get success", getBooks })


}
//get book by id
export const getBook = async (req, res) => {

    const book = await Books.findById(req.params.id)
    return res.json({ msg: "get success", book})


}

//update book by id
export const updateBook = async (req, res) => {

    const bookupdate= await Books.findByIdAndUpdate(req.params.id,req.body)
    return res.json({ msg: "update success", bookupdate})


}
//delete book by id
export const deleteBook = async (req, res) => {

    const bookdelete= await Books.deleteOne({_id:req.params.id})
    return res.json({ msg: "delete success", bookdelete})


}

