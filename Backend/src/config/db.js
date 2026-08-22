import mongoose from "mongoose";
import dns from "dns";

dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])

const DBConnect=async()=>{
    const uri = process.env.MONGO_URI?.trim()
    if (!uri) {
        throw new Error("mongo uri is required")
    }
   const conn=await mongoose.connect(uri)
   console.log("mongoDB connected successfully",conn.connection.host);
   

}
export default DBConnect