import express from 'express'
import { config } from 'dotenv';
import cors from 'cors'

const app=express()
config({path: './config.env'})

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:['POST'],
    credentials:true
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send("Hello From server for gym app");
})

app.listen(process.env.PORT,()=>{
    console.log(`Server Started at http://localhost:${process.env.PORT}`)
})