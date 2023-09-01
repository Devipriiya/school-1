import express from 'express';

const app = express();
import multer from "multer";
import path from "path";
// connectDB();

const router =express.Router();

import mongoose from "mongoose"
// import connectDB from './appdb.js';
const classperiodSchema=mongoose.Schema(
    {
 
   
image:{
    data:String,
    contentType: String
},
name:{
    type:String,
   required:true,
},
     
subject:{
    type:String,
   required:true,
},
time:{
    type:String,
}
           
     })

const Classperiod =mongoose.model("Classperiod ",classperiodSchema);
classperiodSchema.plugin(Classperiod);


const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')
const image={
classsperiod:[{
 
    image:{
        data:"https://i.ibb.co/zHqXdsS/IMG-7890.jpg",
contentType:"image/png"
    },
    name:"Harish",
    subject:"English",
    time:"8.30am to 9.15am"
},
{
    image:{
        data:"https://i.ibb.co/nD4Lgzv/IMG-4567.jpg",
contentType:"image/png"
    },
    name:"Prashanth",
    subject:"Science",
    time:"9.15am to 10.00am"
},
{
    image:{
        data:"https://i.ibb.co/T4cpxXj/IMG-4050.jpg",
contentType:"image/png"
    },
    name:"Aswini",
    subject:"Tamil",
    time:"10.30am to 11.15am"
},
{
    image:{
        data:"https://i.ibb.co/CtqLGfZ/IMG-1234.jpg",
contentType:"image/png"
    },
    name:"Gowrishankar",
    subject:"Social",
    time:"11.15am to 12.00am"
}, 

{
    image:{
        data:"https://i.ibb.co/F442Gpv/IMG-4042.jpg",
contentType:"image/png"
    },
    name:"Nivesh",
    subject:"Maths",
    time:"12.00am to 12.45am"
},
{
    image:{
        data:"https://i.ibb.co/V9DgfQ3/IMG-4073.png",
contentType:"image/png"
    },
    name:"Hari shankaran",
    subject:"Hindi",
    time:"1.30am to 2.15am"
},


]

}
router.get('/',(req,res)=>{
    res.send(image);
})



router.get('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
           Classperiod.findById({_id:req.params.id},{
   
            image:{
                data:req.file.filename,
                contentType:'image/png'
            },   
            name:req.body.name,
            subject:req.body.subject,
            time:req.body.time
               
            })
          
            .then(result=>{
                res.status(200).json({
                   classperiod:result
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
            const newImage = new Classperiod({
              
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                subject:req.body.subject,
                time:req.body.time
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
            Classperiod.findOneAndUpdate({_id:req.params.id},{
             
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                subject:req.body.subject,
                time:req.body.time
            })
          
            .then(result=>{
                res.status(200).json({
                    updated_classperiod:result       
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
            Classperiod.deleteOne({_id:req.params.id},{
               
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                subject:req.body.subject,
                time:req.body.time
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_classperiod:result       
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
    Classperiod.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
    

export default router;
// const port=4000;
// app.listen(port,()=>{
//     console.log(`server is running at ${port}`);
//     console.log(image);
// });
