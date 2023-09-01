import express from "express";
import mongoose from "mongoose";
import multer from "multer";
// import connectDB from "./db.js";
const router=express.Router();
// connectDB();
const attendSchema= mongoose.Schema({
    attendances:[{
    
   name:{
    type:String,
   },

   rollNo:{
    type:String,
   },

   standard:{
    type:String,
   },

   section:{
    type:String,
   },

   date:{
    type:String,
   },

   attendance:{
    type:String,
   },

   total:{
    type:String,
   },

   image:{
    data:String,
    contentType:String
}, 
}]
    },
 )
 

const Attend=mongoose.model("Attend",attendSchema);
attendSchema.plugin(Attend)

const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')


const user={
    attendances:[{
       
        name:"Harish",
        rollNo:"0001",
        standard:"10'th",
        section:"B",
        date:"16/03/2023",
        attendance:"Present",
        total:"30",
        image:{
            data:"https://i.ibb.co/zHqXdsS/IMG-7890.jpg",
            contentType:"image/png"
        },
    },
    {
        
        name:"Aswini",
        rollNo:"0002",
        standard:"10'th",
        section:"B",
        date:"16/03/2023",
        attendance:"Present",
        total:"30",
        image:{
            data:"https://i.ibb.co/T4cpxXj/IMG-4050.jpg",
            contentType:"image/png"
        },
    },
    {
       
        
        name:"Hem",
        rollNo:"0003",
        standard:"10'th",
        section:"B",
        date:"16/03/2023",
        attendance:"Absent",
        total:"30",
        image:{
            data:"https://i.ibb.co/nD4Lgzv/IMG-4567.jpg",
            contentType:"image/png"
        },
    },
    {
        
        name:"Gowrishankar",
        rollNo:"0004",
        standard:"10'th",
        section:"B",
        date:"16/03/2023",
        attendance:"Present",
        total:"30",
        image:{
            data:"https://i.ibb.co/CtqLGfZ/IMG-1234.jpg",
            contentType:"image/png"
        },
    },
    {
        name:"Hari",
        rollNo:"0005",
        standard:"10'th",
        section:"B",
        date:"16/03/2023",
        attendance:"Present",
        total:"30",
        image:{
            data:"https://i.ibb.co/V9DgfQ3/IMG-4073.png",
            contentType:"image/png"
        },
    },
    {
        name:"Megha",
        rollNo:"0006",
        standard:"10'th",
        section:"B",
        date:"16/03/2023",
        attendance:"Absent",
        total:"30",
        image:{
            data:"https://i.ibb.co/6m0MJ5F/IMG-3901.jpg",
            contentType:"image/png"
        },
    },
    {
        name:"Nivesh",
        rollNo:"0007",
        standard:"10'th",
        section:"B",
        date:"16/03/2023",
        attendance:"Present",
        total:"30",
        image:{
            data:"https://i.ibb.co/F442Gpv/IMG-4042.jpg",
            contentType:"image/png"
        },
    },
   
   
]}

// const app=express();
// app.use(express.json());

// get

router.get('/',(req,res)=>{
    try{
        res.status(200).send(user);
    }
    catch(error){
        res.json({message:"unable to create"});
    }
});

// specificData

router.get('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Attend.findByID({_id:req.params.id},{
                standard:req.body.standard,
                name:req.body.name,
                rollNo:req.body.rollNo,
                standard:req.body.standard,
                section:req.body.section,
                date:req.body.date,
                attendance:req.body.attendance,
                total:req.body.total,
                image:{
                    data:req.file.filename,
                    contentType:'image'
                }
            })
                .then(result=>{
                    res.status(200).json({
                        files:result
                    })
                })
                .catch(err=>{
                    console.log(err);
                    res.status(505).json({
                        error:err
                    })
                }
    )}
    })
})

// post

router.post('/',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            const newFile = new Attend({
                standard:req.body.standard,
                name:req.body.name,
                rollNo:req.body.rollNo,
                standard:req.body.standard,
                section:req.body.section,
                date:req.body.date,
                attendance:req.body.attendance,
                total:req.body.total,
                image:{
                    data:req.file.filename,
                    contentType:'image'
                }
            })
            newFile.save()
        .then(()=>res.send('successfully uploaded')).catch(err=>console.log(err))
        }
    })
    
})


//upload post

router.put('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Attend.findOneAndUpdate({_id:req.params.id},{
                standard:req.body.standard,
                name:req.body.name,
                rollNo:req.body.rollNo,
                standard:req.body.standard,
                section:req.body.section,
                date:req.body.date,
                attendance:req.body.attendance,
                total:req.body.total,
                image:{
                    data:req.file.filename,
                    contentType:'image'
                }
            })
          
            .then(result=>{
                res.status(200).json({
                    updated_user:result       
                 })
            })
            .catch(err=>{
                console.log(err)
                res.status(500).json({
                    error:err
                })
            })
        
        }
    })
    
})

//delete

router.delete('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Attend.deleteOne({_id:req.params.id},{
                standard:req.body.standard,
                name:req.body.name,
                rollNo:req.body.rollNo,
                standard:req.body.standard,
                section:req.body.section,
                date:req.body.date,
                attendance:req.body.attendance,
                total:req.body.total,
                image:{
                    data:req.file.filename,
                    contentType:'image'
                }
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_user:result       
                 })
            })
            .catch(err=>{
                console.log(err)
                res.status(500).json({
                    error:err
                })
            })
        
        }
    })

    
})


//Delete many


router.delete('/',async(req,res)=>{
    Attend.deleteMany({}).then((result) => {
             res.send(result);
         })
     });


export default router;