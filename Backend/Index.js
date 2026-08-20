import express from "express";
import dotenv from "dotenv"
dotenv.config();

const app = express();

app.get("/",(req,res)=>{
    res.send("Testing for route")
})
const port = process.env.PORT || 3000
app.listen(port , (req,res)=>{
    console.log(`server is listening on port ${port}`)
})
