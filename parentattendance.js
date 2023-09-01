import express from "express";
import mongoose from "mongoose";
const router=express.Router();
import multer from "multer";
mongoose.set("strictQuery", false);
const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')
const parentattendanceSchema=mongoose.Schema( {

            totalWorkingDays:{
                type:String,
                required:true
            },
            attendedDays :{
                type:String,
                required:true
            },
            absentDays  :{
                type:String,
                required:true
            },
            schedule:[{
                monthAndYear:{
                    type:String,
                    required:true
                },
                totalDays:{
                    type:String,
                    required:true
                },
                officialLeaves:{
                    type:String,
                    required:true
                },
    }]
             
            })

const Parentattendance=mongoose.model("Parentattendance",parentattendanceSchema);
parentattendanceSchema.plugin(Parentattendance);
const attendanceFile={
  
              totalWorkingDays:"100",
              attendedDays:"74",
              absentDays:"3",
              schedule:[{
                monthAndYear:"June 2022",
                totalDays:"26 Days",
                officialLeaves:"6 Days"
              },
            {
              monthAndYear:"June 2022",
              totalDays:"26 Days",
              officialLeaves:"6 Days"
            }]
        }


// app.use(express.json());
router.get('/',(req,res)=>{
    res.send(attendanceFile);
})
// specific data
router.get('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Parentattendance.findById({_id:req.params.id},{

                totalWorkingDays:req.body.totalWorkingDays,
                attendedDays:req.body.attendedDays,
                absentDays:req.body.absentDays,
                schedule:{
                    monthAndYear:req.body.monthAndYear,
                    totalDays:req.body.totalDays,
                    officialLeaves:req.body.officialLeaves
                }
            })
          
            .then(result=>{
                res.status(200).json({
                    parentattendance:result
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
            const newImage = new Parentattendance({
                totalWorkingDays:req.body.totalWorkingDays,
                attendedDays:req.body.attendedDays,
                absentDays:req.body.absentDays,
                schedule:{
                    monthAndYear:req.body.monthAndYear,
                    totalDays:req.body.totalDays,
                    officialLeaves:req.body.officialLeaves
                }
            })
            newImage.save()
        .then(()=>res.send('successfully uploaded')).catch(err=>console.log(err))
        }
    })
    
})
//update
router.put('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
          Parentattendance.findOneAndUpdate({_id:req.params.id},{
            totalWorkingDays:req.body.totalWorkingDays,
            attendedDays:req.body.attendedDays,
            absentDays:req.body.absentDays,
            schedule:{
                monthAndYear:req.body.monthAndYear,
                totalDays:req.body.totalDays,
                officialLeaves:req.body.officialLeaves
            }
            })
          
            .then(result=>{
                res.status(200).json({
                    updated_parentattendance:result       
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
           Parentattendance.deleteOne({_id:req.params.id},{
             
            totalWorkingDays:req.body.totalWorkingDays,
            attendedDays:req.body.attendedDays,
            absentDays:req.body.absentDays,
            schedule:{
                monthAndYear:req.body.monthAndYear,
                totalDays:req.body.totalDays,
                officialLeaves:req.body.officialLeaves
            }
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_parentattendance:result       
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

router.delete('/',async(req,res)=>{
   Parentattendance.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
export default router;

