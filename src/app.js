import express from "express";
import userRouter from "./routes/users.routes.js"

const app = express();
app.use(express.json())

app.use("/users",userRouter)

app.listen(3000,()=>{
    console.log("Rodando liso na porta 3000")
})
