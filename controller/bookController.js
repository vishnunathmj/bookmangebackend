const books = require('../model/bookModel')

//  create or add book 
exports.addBooks = async(req,res)=>{
    console.log("inside add book controller");
    const {title,author,bookId,publishedYear,genre}= req.body
    try{
        const existingBook = await books.findOne({bookId})
        if(existingBook){
            res.status(409).json("Book Already exist")
        }else{
            const newBook = new books({title,author,bookId,publishedYear,genre})
            await newBook.save()
            res.status(201).json(newBook)
        }
    }catch(error){
        res.status(500).json(error)
        console.log(error);
    }
}

// get all books
exports.getAllBooks = async(req,res)=>{
    console.log("inside get all book controller");
    try{
        const allBooks = await books.find()
        res.status(200).json(allBooks)
    }catch(error){
        res.status(500).json(error)
        console.log(error);
    }
}


// get single books
exports.getSingleBooks = async(req,res)=>{
    console.log("inside get single book controller");
    const {id}= req.params
    try{
        const allBooks = await books.findOne({_id:id})
        res.status(200).json(allBooks)
    }catch(error){
        res.status(500).json(error)
        console.log(error);
    }
}

// edit single book 
exports.editBooks = async(req,res)=>{
    console.log("inside edit book controller");
    const {id}= req.params
    const {title,author,bookId,publishedYear,genre} = req.body
    try{
        const editBooks = await books.findByIdAndUpdate({_id:id},{title,author,bookId,publishedYear,genre},{new:true})
        res.status(200).json(editBooks)
    }catch(error){
        res.status(500).json(error)
        console.log(error);
    }
}


// delete single book 
exports.deleteBooks = async(req,res)=>{
    console.log("inside delete single book controller");
    const {id}= req.params
    try{
        const deleteBooks = await books.findByIdAndDelete({_id:id})
        res.status(200).json(deleteBooks)
    }catch(error){
        res.status(500).json(error)
        console.log(error);
    }
}
