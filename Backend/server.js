import express from 'express'
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRouter.js"
import "dotenv/config"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"



// app config

const app = express()


//middleware
app.use(express.json())
app.use(cors())

// db connction
connectDB()



//api endpoints
app.get('/',(req,res)=> res.send("Api Working"))
app.use("/api/food", foodRouter)
app.use("/images", express.static("uploads"))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)


const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`server starter on http://localhost:${PORT}`);
    
})
