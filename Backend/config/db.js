import mongoose from "mongoose";


export const connectDB = async () => {
  await mongoose.connect("mongodb+srv://jahidulhassa777:98904544@cluster0.z9uxm.mongodb.net/food-del").then(()=>console.log("Database connected"));
}
