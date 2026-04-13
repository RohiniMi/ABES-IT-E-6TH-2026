import mongoose from 'mongoose';
const MONGO_URI = "mongodb+srv://user:admin@crud.gkja2gf.mongodb.net/Users?appName=crud";
const dbConnect = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("DB connection is established successfully.");
    } catch (error) {
        console.log("DB Connection error", error.message);
    }
}
// dbConnect();
export default  dbConnect;