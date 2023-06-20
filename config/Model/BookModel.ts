import mongoose from "mongoose";

interface Ibook{
    book_Title:string;
    author_name:string;
    description:string;
    author_image:string;
    email:string;
    views:[];
    ibsn:string;
    cover_image:string;
}

// interface bookstore extends Ibook,mongoose.Document{}
interface bookstore extends Ibook,Document{}

const  Bookscheme = new mongoose.Schema<Ibook>({
 book_Title:String,
 author_name:String,
 description:String,
 author_image:String,
 email:String,
 views:[],
 ibsn:String,
 cover_image:String,


})

const  Bookmodel=mongoose.model<bookstore>("BookStorecollections",Bookscheme);
export  default Bookmodel;