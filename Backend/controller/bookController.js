const BookModel = require("../model/bookmodel");

// read the books from database - Read
//
getAllBooks = async(req,res)=>{
    try{
         const books= await BookModel.find({});
        return res.status(201).json({
            count:books.length,
            data:books,
        });
    }
    catch(error)
    {
        return res.status(501).send({
            message:error.message
        })
    }

};
getBooks = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await BookModel.findById(id);
    return res.status(201).json(books);
  } catch (error) {
    return res.status(501).send({
      message: error.message,
    });
  }
};
// Create the books -POST Method
uploadBooks = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Send all required fields : title , author , publishyear",
      });
    }
    const newBooks = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const book = await BookModel.create(newBooks);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: error.message,
    });
  }
};
updateBooks = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Send all required fields : title , author , publishyear",
      });
    }
    const {id} =req.params;
    const updatedata = req.body;
    const result =await BookModel.findByIdAndUpdate(id,updatedata);
 
    if(!result)
        {
            return res.status(404).json({message:"Books Not Found"})
        }
        return res.status(201).json({message:"Books updated sucessfully",
            data:updatedata
        })

  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: error.message,
    });
  }
};
deleteBooks = async (req, res) => {
    try {
      
      const {id} =req.params;
      const deletedata = req.body;
      const result =await BookModel.findByIdAndDelete(id,deletedata);
   
      if(!result)
          {
              return res.status(404).json({message:"Books Not Found"})
          }
          return res.status(201).json({message:"Books  deleted sucessfully",
              data:deletedata,
          })
  
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: error.message,
      });
    }
  };

module.exports = { uploadBooks, getBooks, updateBooks,deleteBooks,getAllBooks };
