require("dotenv").config()
const morgan = require('morgan')
const db = require('./db')

const express = require('express')
const app = express()

app.use(morgan('dev'))



const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`server is up and listening on port ${PORT}`)
})