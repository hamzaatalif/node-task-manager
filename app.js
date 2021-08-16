const express = require('express');
const app = express();

const tasks = require('./routes/tasks')
const notFound = require("./middleware/not-found")

const connectDB = require("./db/connect")

require("dotenv").config()

const port = process.env.Port || 3000 ;

// middleware
app.use(express.static("./public"))
app.use(express.json());
app.use(notFound)

// initial router

// app.get("/hello",(req,res)=>{
//     res.send("Task Manager Api");
// })

app.use("/api/v1/tasks",tasks)

app.all("*",(req,res)=>{
    res.status(404).send("<h2>Resource not found.</h2>")
})


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start();