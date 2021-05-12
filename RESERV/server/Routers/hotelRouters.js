const express = require('express'); 
const hotelRouter = express.Router() ; 
const db = require('../Models/Booking')


hotelRouter.get('/getall', async (req,res)=>{
try {
const database = await db.find(); 
res.send(database)   
} 
catch (error) {
console.log(error)
}
}); 

hotelRouter.get('/getone/:id',async (req,res)=>{
try {
const found = await db.findById({ _id : req.params.id }) 
res.send(found)

} 
catch (error) {
        console.log(error)
    }
})




module.exports = hotelRouter ; 