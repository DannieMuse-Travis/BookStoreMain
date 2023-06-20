import express from "express"
import { deleteBooks, getAllBooks, getOneBook, newBooks, updateBooks } from "../Controller/BookController";

const router = express.Router();
router.route("/getallBook").get(getAllBooks)
router.route("/getOneBook").get(getOneBook)
router.route("/createbooks").post(newBooks)
router.route("/updatebook").patch(updateBooks)
router.route("/delete").delete(deleteBooks)



export default router