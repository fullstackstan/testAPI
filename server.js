const express = require('express')
const router = express.Router()
const app = express()

require('dotenv').config({path: '.env'})

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running${process.env.PORT}, you better catch it!`)
})   