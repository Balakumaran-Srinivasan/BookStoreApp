const express = require('express');
const { uploadBooks, getBooks, updateBooks, deleteBooks, getAllBooks } = require('../controller/bookController');


const bookRouter = express.Router();





bookRouter.post('/',uploadBooks);
bookRouter.get('/',getAllBooks);
bookRouter.get('/:id',getBooks);
bookRouter.put('/:id',updateBooks);
bookRouter.delete('/:id',deleteBooks);




module.exports = bookRouter;
