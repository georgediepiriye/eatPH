require("dotenv").config()
const morgan = require('morgan')
const db = require('./db')

const express = require('express')
const app = express()

//middleware for logging
app.use(morgan('dev'))

//middleware to help send json objects in the req.body 
app.use(express.json())


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

//get a single restaurant
app.get("/api/v1/restaurants/:id", async(req,res)=>{
    try {
        const results = await db.query("select * from restaurants where id = $1",[req.params.id])
        res.status(200).json({
            status:'success',
            data:{
                restaurants: results.rows[0]
            }
        })
    } catch (err) {
        console.log(err)
        
    }
})

//create a restaurant 
app.post("/api/v1/restaurants",async(req,res)=>{
    console.log(req.body)
    try {
        const results = await db.query("insert into restaurants(name,location,price_range)values($1,$2,$3) returning *",
        [req.body.name, req.body.location, req.body.price_range])
        res.status(201).json({
            status:"success",
            data:{
                restaurant: results.rows[0]
            }

        })
    } catch (error) {
        console.log(error)
    }
})

//update a restaurant
app.put("/api/v1/restaurants/:id",async(req,res)=>{
    try {
       const results = await db.query("update restaurants set name= $1, location=$2,price_range=$3 where id = $4 returning * ",
       [req.body.name, req.body.location, req.body.price_range, req.params.id]) 
       res.status(201).json({
           status: "success",
           data:{
               restaurant: results.rows[0]
           }
       })
    } catch (err) {
        console.log(err)
    }
})

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`server is up and listening on port ${PORT}`)
})