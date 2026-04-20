import mongoose from "mongoose";
const MONGO_URI = "mongodb+srv://user:admin@crud.gkja2gf.mongodb.net/?appName=crud";

const dbConnect = async()=>{
    try {
        await mongoose.connect(MONGO_URI);
        console.log("DB connection established successfully");
    } catch (error) {
        console.log("DB connection Error");        
    }
}
export default dbConnect;