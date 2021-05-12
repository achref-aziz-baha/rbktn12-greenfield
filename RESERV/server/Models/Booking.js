const mongoose = require('mongoose'); 
const { Schema } = mongoose ; 



const hotelSchema = new Schema({
 
    name : String, 
    adresse : String, 
    starts : Number ,
    img : String , 
    description : String, 
    room :[
        {
            img : String , 
            price : Number , 
            dataI : Date , 
            dataO : Date , 
        }
    ]
  
}); 


module.exports = mongoose.model('DB',hotelSchema); 
