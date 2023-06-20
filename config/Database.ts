import mongoose, { Mongoose } from "mongoose";
const BookStore="mongodb://127.0.0.1:27017/bookstore"

mongoose.connect(BookStore)
mongoose.connection.once("open",()=>{
    console.log(`database is connected ${mongoose.connection.host}`);
}).on("error",(err)=>{
    console.log("a error has occur",err);
})

export default BookStore