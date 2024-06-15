

import { authors } from "../../database/models/author.model.js"


//add author

export const addAuthor = async (req, res) => {
    const { name, bio, birthDate, books } = req.body
    const newAuthor = authors.insertMany({ name, bio, birthDate, books })
    return res.json({ msg: "add success", newAuthor })
}


//get authors

export const getAuthor = async (req, res) => {

    const Authorsget = await authors.find()
    return res.json({ msg: "get success", Authorsget })
}

//get author ny id

export const getAuthor_id = async (req, res) => {

    const Authorsget_id = await authors.findById(req.params.id)
    return res.json({ msg: "get success", Authorsget_id })
}


//update author by id

export const updateAuthor_id = async (req, res) => {

    const Authors_update_id = await authors.findByIdAndUpdate(req.params.id,req.body)
    return res.json({ msg: "update success", Authors_update_id })
}

//delete author by id

export const deleteAuthor_id = async (req, res) => {

    const Authors_delete_id = await authors.deleteOne({_id:req.params.id})
    return res.json({ msg: "deldte success", Authors_delete_id })
}





















/****************** bouns tasks apis*****************/


//Add pagination to the GET endpoints for retrieving all books and authors.

export const getAuthors_books= async (req, res) => {

    const all_Authorsget_books = await authors.find().populate('books')
    return res.json({ msg: "get success", all_Authorsget_books })
}




//get author with books

export const getAuthor_books= async (req, res) => {

    const Authorsget_books = await authors.findOne({ name: req.params.author }).populate('books', ['-_id', '-author', '-__v'])
    return res.json({ msg: "get success", Authorsget_books })
}

