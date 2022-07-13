const express=require('express');
const mongoose=require('mongoose');
const url='mongodb://localhost:27017';
const PORT=9000;
const app=express();
app.listen(PORT,function(err){
    if(err) console.log(err)
    else{
        console.log("Server is listening on PORT",PORT);
    }
});
mongoose.connect(url,{useNewUrlParser:true});
const con=mongoose.connection
con.on('open',function(){
    console.log("DataBase Connected");
})
app.use(express.json());

const Router=require('./Router/Student');
app.use('/Student',Router);