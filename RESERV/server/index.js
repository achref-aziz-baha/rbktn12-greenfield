const express = require('express'); 
const mongoose = require('mongoose'); 
const cors = require('cors'); 
const app = express() ; 
const db = require('./Models/Booking')
const hotelRouter = require('./Routers/hotelRouters')


mongoose.connect('mongodb://localhost:27017/HOTELBOOKING', {useNewUrlParser: true , useUnifiedTopology: true },()=>{
    console.log('DATABASE CONNECTED!')
});

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({extended:true})); 

app.use('/api',hotelRouter) ;


const PORT = process.env.PORT || 3900 ; 



app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`)
}); 





