
const express = require('express')
const cors = require('cors')
const req = require('express/lib/request')
const res = require('express/lib/response')



const app= express()

/* var corOptions ={
      origin : 'http://localhost:8000'
} */



//middleware

//app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({extended :true}))

app.use('/images', express.static('images'))



//routers


const UserRouter =require('./routes/SellerRouter')
app.use('/api/users',UserRouter)

const AddRouter =require('./routes/AddRouter')
app.use('/api/adds',AddRouter)


//port

const PORT = process.env.PORT ||8000

//server

app.listen(PORT,() =>{
    console.log(`server is runing port ${PORT}`)
})