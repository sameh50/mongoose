import express, { json } from 'express'
import { dbconnection } from './database/dbConnection.js'
import bookRouter from './modules/books/books.routes.js'
import authorRouter from './modules/author/author.routes.js'
dbconnection
const app = express()
const port = 3500

app.listen(port, () => console.log(`server is running on port ${port}`))
app.use(express.json())
app.listen(3000)


app.use("/", bookRouter)

app.use("/", authorRouter)