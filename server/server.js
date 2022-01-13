require("dotenv").config()
const morgan = require('morgan')
const db = require('./db')

const express = require('express')
const app = express()

app.use(morgan('dev'))

//get all restaurants
app.get("/api/v1/restaurants",async(req,res)=>{
    try{
        const results = await db.query("select * from restaurants;")
        res.status(200).json({
            status:'success',
            results: results.rows.length,
            data:{
                restaurants: results.rows
            }
        })
    
    }catch(err){
        console.log(err)
    }
})


const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`server is up and listening on port ${PORT}`)
})