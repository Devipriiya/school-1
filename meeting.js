import express from "express";
// import connectDB from "./db.js";
import mongoose from "mongoose";
import multer from "multer";
const router=express.Router();
mongoose.set("strictQuery", false);
//connectDB();

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
const meetingSchema=mongoose.Schema([
    {
       toMeet:{
            type:String,
            required:true
           },
        reason:{
            type:String,
            required:true
           },
        date:{
            type:String,
            required:true
           },
        time:{
            type:String,
            required:true
           }
        
    }]
)

const Meeting=mongoose.model("Meeting",meetingSchema);
meetingSchema.plugin(Meeting);

const meeting=[{
    toMeet:"principal",
    reason:"leave",
    date :"01.03.2023",
    time:"1 clk"
}]
     

// app.use(express.json());
router.get('/',(req,res)=>{
    res.send(meeting);
})
// specific data
router.get('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Meeting.findById({_id:req.params.id},{
                toMeet:req.body.toMeet,
                reason:req.body.reason,
                date :req.body.date,
                time:req.body.time
            })
          
            .then(result=>{
                res.status(200).json({
                    meeting:result
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
            const newImage = new Meeting({
            
                toMeet:req.body.toMeet,
            reason:req.body.reason,
            date :req.body.date,
            time:req.body.time
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
          Meeting.findOneAndUpdate({_id:req.params.id},{
          
            toMeet:req.body.toMeet,
            reason:req.body.reason,
            date :req.body.date,
            time:req.body.time
            })
          
            .then(result=>{
                res.status(200).json({
                    updated_meeting:result       
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
           Meeting.deleteOne({_id:req.params.id},{
             
            toMeet:req.body.toMeet,
            reason:req.body.reason,
            date :req.body.date,
            time:req.body.time
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_meeting:result       
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
   Meeting.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
export default router;

