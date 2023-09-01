import express from "express";
import mongoose from "mongoose";
import multer from "multer";
const router=express.Router();

const teacherassignmentSchema= mongoose.Schema({

    enrollNo:{
        type:String,
        // required:true,
    },
    name:{ 
        type:String,
        // required:true,
    },
    image:{
        data:String,
     contentType: String
    }

})

const Teacherassignment=mongoose.model("Teacherassignment",teacherassignmentSchema);
teacherassignmentSchema.plugin(Teacherassignment)

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
    assignment:[
    {
        enrollNo:"1",
        name:"Gowrishankar",
        image:{
            data:"https://i.ibb.co/CtqLGfZ/IMG-1234.jpg",
           contentType:"image/png"
        }
    },
    {
        enrollNo:"2",
        name:"Megha",
        image:{
            data:"https://i.ibb.co/6m0MJ5F/IMG-3901.jpg",
           contentType:"image/png"
        }
    },
    {
        enrollNo:"3",
        name:"Nivesh",
        image:{
            data:"https://i.ibb.co/F442Gpv/IMG-4042.jpg",
           contentType:"image/png"
        }
    },
    {
        enrollNo:"4",
        name:"Aswini",
        image:{
            data:"https://i.ibb.co/T4cpxXj/IMG-4050.jpg",
           contentType:"image/png"
        }
    },
    {
        enrollNo:"5",
        name:"Hari Shankaran",
        image:{
            data:"https://i.ibb.co/V9DgfQ3/IMG-4073.png",
           contentType:"image/png"
        }
    },
    {
        enrollNo:"6",
        name:"Hem Prashanth",
        image:{
            data:"https://i.ibb.co/nD4Lgzv/IMG-4567.jpg",
           contentType:"image/png"
        }
    },
    {
        enrollNo:"7",
        name:"Harish",
        image:{
            data:"https://i.ibb.co/zHqXdsS/IMG-7890.jpg",
           contentType:"image/png"
        }
    },
   
]
}

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
            Teacherassignment.findByID({_id:req.params.id},{
                enrollNo:req.body.enrollNo,
                name:req.body.name,
                
                image:{
                    data:req.image.imagename,
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
            const newFile = new   Teacherassignment({
                enrollNo:req.body.enrollNo,
                name:req.body.name,
                
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
            Teacherassignment.findOneAndUpdate({_id:req.params.id},{
                enrollNo:req.body.enrollNo,
                name:req.body.name,
                
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

// delete

router.delete('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Teacherassignment.deleteOne({_id:req.params.id},{
                enrollNo:req.body.enrollNo,
                name:req.body.name,
                
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

//deleteAll

router.delete('/',async(req,res)=>{
    Teacherassignment.deleteMany({}).then((result) => {
             res.send(result);
         })
     });


export default router;
