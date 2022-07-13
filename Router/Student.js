const express=require('express');
const Student=require('../model/Student')
const router=express.Router();

router.get('/',async(req,res)=>{
    
    try{
        const student=await Student.find();
        res.json(student);
    }catch(err){
        res.send(err);
    }
})
router.post('/',async(req,res)=>{
    const {Name,Email,Collage_id,Registration_id,Password}=req.body;
    if(!Name){
        res.send({
            Message:"Name is missing"
        })
    }
    if(!Email){
        res.send({
            Message:"Email is missing"
        })
    }
    if(!Collage_id){
        res.send({
            Message:"Collage_id is missing"
        })
    }
    if(!Registration_id){
        res.send({
            Message:"Registration_id is missing" 
        })
    }
    if(!Password){
        res.send({
            Message:"Password is missig"  
        })
    }
    console.log(req.body);
    const student=new Student({
       Name:Name,
       Email:Email,
       Collage_id: Collage_id,
       Registration_id:Registration_id,
       Password:Password
    })
    try{
       const s1=await student.save();
       res.json(s1);
    }catch(err){
        res.send(err);
    }
})

module.exports=router;