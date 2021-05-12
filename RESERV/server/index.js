const express = require('express'); 
const mongoose = require('mongoose'); 
const cors = require('cors'); 
const app = express() ; 
const db = require('./Models/Booking')



mongoose.connect('mongodb://localhost:27017/HOTELBOOKING', {useNewUrlParser: true , useUnifiedTopology: true },()=>{
    console.log('DATABASE CONNECTED!')
});


app.use(express.json());
app.use(express.urlencoded({extended:true})); 


app.get('/achref',(req,res)=>{
    res.send('HELLO FROM THE SERVER SIDE!')
})

app.post('/post', async (req,res)=>{
try {
const postedValue = await db.create(req.body);
res.send('DONE!')   
} catch (error) {
    console.log(error)
}
}); 


const PORT = process.env.PORT || 3900 ; 



app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`)
}); 





