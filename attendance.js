import express from "express";
import Attendance from "./attendanceModel.js";
import multer from "multer";
const router = express.Router();
// import connectDB from "./teachersdb.js";
// connectDB();
Attendance
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

const attendance={
   
studentstotal:"525",
teacherstotal:"20",
staffstotal:"15"


}

router.get('/',(req,res) =>
{
    try{
        res.status(200).send(attendance);
    }
    catch(error){
        res.json({message:"not available"});
    }
});
router.get('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
           Attendance.findById({_id:req.params.id},{
          
            studentstotal:req.body.studentstotal,
            teacherstotal:req.body.teacherstotal,
            staffstotal:req.body.staffstotal
            
               
            })
          
            .then(result=>{
                res.status(200).json({
                   images:result
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
            const newImage = new Attendance({
           
                studentstotal:req.body.studentstotal,
                teacherstotal:req.body.teacherstotal,
                staffstotal:req.body.staffstotal
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
            Attendance.findOneAndUpdate({_id:req.params.id},{
          
                studentstotal:req.body.studentstotal,
                teacherstotal:req.body.teacherstotal,
                staffstotal:req.body.staffstotal
            })
          
            .then(result=>{
                res.status(200).json({
                    updated_image:result       
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
            Attendance.deleteOne({_id:req.params.id},{
               
                studentstotal:req.body.studentstotal,
                teacherstotal:req.body.teacherstotal,
                staffstotal:req.body.staffstotal
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_image:result       
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
    Attendance.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
    

export default router;
// const port=4000;
// app.listen(port,()=>{
//     console.log(`server is running at ${port}`);
//     console.log(image);
// });
