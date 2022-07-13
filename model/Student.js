const mongoose=require('mongoose');
require('mongoose-type-email');
const StudentSChema=new mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    Email:{
        type:  mongoose.SchemaTypes.Email,
        require:true
    },
    Collge_id:{
        type:Number,
        require:true
    },
    Registration_id:{
        type:Number,
        require:true
    },
    Password:{
     type: String, 
     required: true }
    

})

module.exports=mongoose.model('Student',StudentSChema);