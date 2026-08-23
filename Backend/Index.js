import express from "express";
import dotenv from "dotenv";
import authRoutes from "./src/routes/authRoutes.js"
import DBConnect from "./src/config/db.js"
import aiRoutes from "./src/routes/aiRoutes.js"

dotenv.config();

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/api/user",authRoutes)
app.use("/api/ai",aiRoutes)

const port = process.env.PORT || 3000
app.listen(port , ()=>{
    DBConnect()
    console.log(`server is listening on port ${port}`)
})
