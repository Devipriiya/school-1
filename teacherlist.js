import express from 'express';

const app = express();
import multer from "multer";
import path from "path";
// connectDB();

const router =express.Router();

import mongoose from "mongoose"
// import connectDB from './appdb.js';
const teacherslistSchema=mongoose.Schema(
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
           
     })

const Teacherslist =mongoose.model("Teacherslist",teacherslistSchema);
teacherslistSchema.plugin(Teacherslist);


const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')
const teacherslist={
teachers:[
    {
        image:{
            data:"https://i.ibb.co/CtqLGfZ/IMG-1234.jpg",
    contentType:"image/png"
        },
        name:"Gowrishankar",
        subject:"For Tamil"
    },
    {
        image:{
            data:"https://i.ibb.co/6m0MJ5F/IMG-3901.jpg",
    contentType:"image/png"
        },
        name:"Megha",
        subject:"For English"
    },
    {
        image:{
            data:"https://i.ibb.co/F442Gpv/IMG-4042.jpg",
    contentType:"image/png"
        },
        name:"Nivesh",
        subject:"For Maths"
    },
    {
        image:{
            data:"https://i.ibb.co/T4cpxXj/IMG-4050.jpg",
    contentType:"image/png"
        },
        name:"Aswini",
        subject:"For Science"
    }, 
    
    {
        image:{
            data:"https://i.ibb.co/V9DgfQ3/IMG-4073.png",
    contentType:"image/png"
        },
        name:"Hari Shankaran",
        subject:"For Social"
    },
    
]
}
router.get('/',(req,res)=>{
    res.send(teacherslist);
})



router.get('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Teacherslist.findById({_id:req.params.id},{
            image:{
                data:req.file.filename,
                contentType:'image/png'
            },   
            name:req.body.name,
            subject:req.body.subject,
               
            })
          
            .then(result=>{
                res.status(200).json({
                    Teacherslist:result
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
            const newImage = new Teacherslist({
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                subject:req.body.subject,
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
            Teacherslist.findOneAndUpdate({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                subject:req.body.subject,
            })
          
            .then(result=>{
                res.status(200).json({
                    updated_Teacherslist:result       
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
            Teacherslist.deleteOne({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                subject:req.body.subject,
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_Teacherslist:result       
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
    Teacherslist.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
    

export default router;
// const port=4000;
// app.listen(port,()=>{
//     console.log(`server is running at ${port}`);
//     console.log(ninth);
// });