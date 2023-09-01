import express from "express";

import mongoose from "mongoose";

import multer from "multer";
const router=express.Router();

const app=express();
app.use(express.json())
const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage');
const user={

    enroll_No:"1",
    student_Name:"Aswini",
    class:"1st Standard",
    section:"A",
    father_Name:"Raj",
    email:"aswini@gmail.com",
    blood_group:"A+",
    phone_No:"9978563490",
    address:"krishnagiri"
    }
const registrationSchema=mongoose.Schema(
    {
enroll_No:{
    type:Number,

},
student_Name:{
    type:String,
   required:true,
},
class:{
    type:String,
   required:true,
},
section:{
    type:String,
   required:true,
},
father_Name:{
    type:String,
   required:true,
}, 
email:{
    type:String,
   required:true,
},
blood_group:{
    type:String,
   required:true,
},
phone_No:{
    type:String,
   required:true,
},
address:{
    type:String,
   required:true,
},
     })

const Registration =mongoose.model("Registration",registrationSchema);
registrationSchema.plugin(Registration);
router.get('/',(req,res)=>{
    try{
        res.status(200).send(user);
    }
    catch(error){
        res.json({message:"unable to create"});
    }
});
// app.use(express.json());
router.post('/',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            const newFile = new Registration({
                // image:{
                //     data:req.file.filename,
                //     contentType:'image'
                // },
                enroll_No:req.body.enroll_No,
                student_Name:req.body.student_Name,
                class:req.body.class,
                section:req.body.section,
                father_Name:req.body.father_Name,
                email:req.body.email,
                blood_group:req.body.blood_group,
                phone_No:req.body.phone_No,
                address:req.body.address,
                
              
            })
            newFile.save()
        .then(()=>res.send('successfully uploaded')).catch(err=>console.log(err))
        }
    })
    
})
// app.post("/registration",async(req,res)=>{
//     try{
//         const details={
//             enroll_No:req.body.enroll_No,
//             student_Name:req.body.student_Name,
//             class:req.body.class,
//             section:req.body.section,
//             father_Name:req.body.father_Name,
//             email:req.body.email,
//             blood_group:req.body.blood_group,
//             phone_No:req.body.phone_No,
//             address:req.body.address,
            
//         };
//         console.log(details);
//         const user=new Registration(details);
// const registrationCreated=await user.save();
// if(registrationCreated){
//     console.log("created");
// res.status(201).json({message:"successfully created"});
// }
// else{
//     res.status(401);
//     throw new error("not found ");
// }
// }catch(err){
//     return res.status(500).json({message:err.message});
// }}
// );
//update

            
        
        export default router;
   