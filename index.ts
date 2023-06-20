import express,{Application,Request,Response} from "express"
import cors from "cors"
const port:number = 5000;
const app:Application = express()

app.use(cors()).use(express())
.get("/",(req:Request,res:Response)=>{
    try {
         return res.status(200).json({
            message:"successful"
         })
    } catch (error) {
        return res.status(404).json({
            message:"not found",
            data:error
        })
    }
})
const server= app.listen(port,()=>{
    console.log("server is live");
})

process.on("uncaughtException",(error)=>{
    console.log("ncaughtException");
    console.log("ncaughtException",(error));
    process.exit(1)
})
 process.on("unhandledRejection",(reason)=> {
    console.log("unhandledRejection");
    console.log("unhandledRejection",(reason));
    server.close(()=>{
        process.exit(1)
    })
 })