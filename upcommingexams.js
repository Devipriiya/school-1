import e from "express";
import express from "express";
import mongoose from "mongoose";
import multer from "multer";
// import connectDB from "./db.js";
const router=express.Router();
// app.use(express.json());

// connectDB();
const Storage = multer.diskStorage({
    // destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')
const exam={
    upcommingexam:[
       {
              examname:"Annual Exam",
              time:"10.00AM to 12.30PM",
              dateto:"1/3/2023 to 10/3/2023",
              total_mark:"100",
              passing_mark:"35",
              viewtimetable:[{
                     date:"1/3/2023",
                     subject:"Language 1",
                     syllabus:"5 units"
    
              }]
  
       }
 
         ]}


const upcommingexamSchema=mongoose.Schema({
 
        examname:{
            type:String,
           required:true,
        },            
        time:{
            type:String,
        },            
        dateto:{
        type:String,
        },  

    total_mark:{
        type:String,

    },            
    passing_mark:{
        type:String,

    },    
    viewtimetable:[{
        date:{
              type:String},
    subject:{
            type:String
            } ,
     syllabus:{
              type:String
            },
        }]
})
 
 var Upcommingexam = mongoose.model('Upcommingexam', upcommingexamSchema);
 upcommingexamSchema.plugin(Upcommingexam);
 


 router.get("/",(req,res)=>{
    try{
        res.status(200).send(exam);
    }catch(error)
    {
        res.json({message:"unable to create"});

    }

});
// specific data
router.get('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Upcommingexam.findById({_id:req.params.id},{
                examname:req.body.examname,           
                time:req.body.time,            
                dateto:req.body.dateto, 
                total_mark:req.body.total_mark,             
                passing_mark:req.body.passing_mark,     
                viewtimetable:{
                    date:req.body.date,
                    subject:req.body.subject,
                    syllabus:req.body.syllabus
    
             }
            })
          
            .then(result=>{
                res.status(200).json({
                    upcommingexam:result
                })
            })
            .catch(err=> {
            console.log(err);
            res.status(505).json({
                error:err
            })
            }
          )
        }
    })
})
router.post('/',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            const newImage = new Upcommingexam({
                examname:req.body.examname,           
                time:req.body.time,            
                dateto:req.body.dateto, 
                total_mark:req.body.total_mark,             
                passing_mark:req.body.passing_mark,     
                viewtimetable:{
                    date:req.body.date,
                    subject:req.body.subject,
                    syllabus:req.body.syllabus
    
             }
            })
            newImage.save()
        .then(()=>res.send('successfully uploaded')).catch(err=>console.log(err))
        }
    })
    
})
router.put('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Upcommingexam.findOneAndUpdate({_id:req.params.id},{
                examname:req.body.examname,           
                time:req.body.time,            
                dateto:req.body.dateto, 
                total_mark:req.body.total_mark,             
                passing_mark:req.body.passing_mark,     
                viewtimetable:{
                    date:req.body.date,
                    subject:req.body.subject,
                    syllabus:req.body.syllabus
    
             }
            })
          
            .then(result=>{
                res.status(200).json({
                    updated_upcomingexam:result       
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
router.delete('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Upcommingexam.deleteOne({_id:req.params.id},{
                examname:req.body.examname,           
                time:req.body.time,            
                dateto:req.body.dateto, 
                total_mark:req.body.total_mark,             
                passing_mark:req.body.passing_mark,     
                viewtimetable:{
                    date:req.body.date,
                    subject:req.body.subject,
                    syllabus:req.body.syllabus
    
             }
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_upsomingexam:result       
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


router.delete("/",async(req,res)=>{
    Upcommingexam.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
    

export default router;
// const port=4000;
// app.listen(port,()=>{
//     console.log(`server is running at ${port}`);
//     console.log(ninth);
// });