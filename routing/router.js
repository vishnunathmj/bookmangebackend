const express = require('express')
// import controller
const bookController = require('../controller/bookController')

const routes = new express.Router()

// Add books
routes.post('/books',bookController.addBooks)

// get all books
routes.get('/books',bookController.getAllBooks)

// get single books
routes.get('/books/:id',bookController.getSingleBooks)

// edit single book 
routes.put('/edit-books/:id',bookController.editBooks)

// delete single book 
routes.delete('/books/:id',bookController.deleteBooks)

module.exports = routes