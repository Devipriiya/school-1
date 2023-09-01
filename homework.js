import express, { Router } from "express";
import mongoose from "mongoose";
import multer from "multer";
const router=express.Router();
const app=express();
app.use(express.json());
const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')
mongoose.set("strictQuery", false);
app.set("view engine","ejs");

app.use(express.static("public"));
router.get('/data',(req,res)=>{
res.render("data");
})
router.get('/download-file',(req,res)=>{
    res.download("./book/homework.pdf");
})
const homeworkSchema=mongoose.Schema({

            monthAndYear:{
                type:String,
                required:true
            },
            standard :{
                type:String,
                required:true
            },
            subject :{
                type:String,
                required:true
            },
            dateOfHomework:{
                type:String,
                required:true
            },
            dateOfSubmit:{
                type:String,
                required:true
            },
            status :{
                type:String,
                required:true
            }
        }
    
)

const Homework=mongoose.model("Homework",homeworkSchema);
homeworkSchema.plugin(Homework);
const homework={
    homeworklist:[
        {
          monthAndYear          :"January",
          standard              :"1st Standard",
          subject               :"English",
          dateOfHomework        :"23-9-2022",
          dateOfSubmit          :"25-9-2022",
          status                :"pending"          
      },
      {
        monthAndYear   :"February",
        standard       :"1st Standard",
        subject        :"English",
        dateOfHomework :"23-9-2022",
        dateOfSubmit   :"25-9-2022",
        status         :"pending"          
    },
   {
         monthAndYear   :"March",
         standard       :"1st Standard",
         subject        :"English",
         dateOfHomework :"23-9-2022",
         dateOfSubmit   :"25-9-2022",
          status        :"pending"          
   }
]
}

//download


// app.use(express.json());
router.get("/",(req,res)=>{
    try{
        res.status(200).send(homework);
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
            Homework.findById({_id:req.params.id},{
                monthAndYear          :req.body.monthAndYear,
                standard              :req.body. standard ,
                subject               :req.body.subject,
                dateOfHomework        :req.body.dateOfHomework,
                dateOfSubmit          :req.body.dateOfSubmit,
                status                :req.body.status  
            })
          
            .then(result=>{
                res.status(200).json({
                   homework:result
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
            const newImage = new Homework({
                monthAndYear          :req.body.monthAndYear,
                standard              :req.body.standard ,
                subject               :req.body.subject,
                dateOfHomework        :req.body.dateOfHomework,
                dateOfSubmit          :req.body.dateOfSubmit,
                status                :req.body.status  
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
            Homework.findOneAndUpdate({_id:req.params.id},{
                monthAndYear          :req.body.monthAndYear,
                standard              :req.body.standard ,
                subject               :req.body.subject,
                dateOfHomework        :req.body.dateOfHomework,
                dateOfSubmit          :req.body.dateOfSubmit,
                status                :req.body.status  
            })
          
            .then(result=>{
                res.status(200).json({
                    updated_homework:result       
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
            Homework.deleteOne({_id:req.params.id},{
                monthAndYear          :req.body.monthAndYear,
                standard              :req.body.standard ,
                subject               :req.body.subject,
                dateOfHomework        :req.body.dateOfHomework,
                dateOfSubmit          :req.body.dateOfSubmit,
                status                :req.body.status  
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_homework:result       
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
    Homework.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
    

export default router;