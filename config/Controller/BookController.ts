import express,{Request,Response} from "express"
import model from "../Model/BookModel"
import Bookmodel from "../Model/BookModel";

const getAllBooks = async (req:Request,res:Response):Promise<Response>=>{
    try {
       const allBook = await model.find();
     if (allBook.length>0) {
        return res.status(200).json({
            message:"successfully gotten all books",
            data:allBook,
        })
     } else {
         return res.status(200).json({
            message:"no books found"
         })
     }

       return res.status(201).json({
        message:"successfully gotten all books",
        data:allBook,
       })
    } catch (error) {
      return res.status(404) .json({
        message:"not found getAllBooks",
        data:error,
      }) 
    }
}

const getOneBook = async(req:Request,res:Response):Promise<Response>=>{
    try {
        const userId = req.params.bookId;
         const  singleBook = await model.findById(userId)
         return res.status(200).json({
            message:"successfully get the book",
            data:singleBook
         })
    } catch (error) {
      return res.status(404).json({
        message:"error ti wa getOneBook",
        error:error,
      })
    }
}
 const newBooks = async (req: Request, res: Response) => {
  try {
    const { title, authorName, details, isbn, price, authorEmail } = req.body;
    const getAuthorIndex = await authorName.charAt(0).toUppercase();
    const getIsbn = await `${getAuthorIndex}_${Math.floor(
      Math.random() * 1000
    )}_${Math.floor(Math.random() * 1000)}`;

    const createBook = await Bookmodel.create({
      title,
      authorName,
      details,
      isbn: getIsbn,
      price,
      authorEmail,
    });
    return res.status(201).json({
      message: "Created book successfully",
      data: createBook,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error occures in creating book: newBooks",
    });
  }
};

 const updateBooks = async (req: Request, res: Response) => {
  try {
    const { title, price } = req.body;
    const update = await Bookmodel.findByIdAndUpdate(
      req.params.bookId,
      {
        title,
        price,
      },
      { new: true }
    );
    return res.status(201).json({
      message: "Updated Books successfully",
      data: update,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error occured while updating books",
    });
  }
};

const deleteBooks = async (req: Request, res: Response) => {
  try {
    const deleting = await Bookmodel.findByIdAndDelete(req.params.bookId);
    return res.status(201).json({
      message: "Deleted Books successfully",
      data: deleting,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error occured while deleting books",
    });
  }
};

export  {getAllBooks,getOneBook,newBooks,updateBooks,deleteBooks};