import express from "express";
import mongoose from "mongoose";
import multer from "multer";
// import connectDB from "./appdb.js";
// import connectDB from "./librarydb.js";

// connectDB();
const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')
const router =express.Router();
const studenttimetableSchema=mongoose.Schema({
 
    // id:{
    //     type:String,
    //     required:true,
    // },
    
    teacher:{
        type:String,
       required:true,
    },
 
    subject:{
        type:String,
       required:true,
    },
    schedule:{
        type:String,
       required:true,
}
    
        
})
const Studenttimetable=mongoose.model("Studenttimetable",studenttimetableSchema);
studenttimetableSchema.plugin(Studenttimetable);

const studenttimetable=[
    // standard:"1st standard",
    {
        id:101,
    day:[
       
        {
    teacher:"Aswini",
    subject:"Tamil",
    schedule:"10.00-10.30"
    },
  {
        teacher:"Pavithra",
        subject:"English",
        schedule:"10.30-11.00"
    },
    {
        teacher:"Karthiga",
        subject:"Evs",
        schedule:"11.30-12.00"
    },
 {
        teacher:"Preethi",
        subject:"Maths",
        schedule:"1.00-1.30"
    }
  

]
   
    },
    {
        id:102,
    day:[
        {
            teacher:"Pavithra",
            standard:"2nd standard",
            subject:"English",
            schedule:"10.00-10.30"
        },
            
    {
        teacher:"Preethi",
        standard:"2nd standard",
        subject:"Maths",
        schedule:"10.30-11.00"
    },
    {
        teacher:"Aswini",
        standard:"2nd standard",
        subject:"Tamil",
        schedule:"11.30-12.00"
    },
    {
        teacher:"Naveen",
        standard:"2nd standard",
        subject:"Hindi",
        schedule:"1.00-1.30"
    },

]
   
    },
    {
        id:103,
    day:[
        {
            teacher:"Karthiga",
            standard:"3rd standard",
            subject:"Evs",
            schedule:"10.00-10.30"
        },
        {
            teacher:"Naveen",
            standard:"3rd standard",
            subject:"Hindi",
            schedule:"10.30-11.00"
        },
        {
            teacher:"Preethi",
            standard:"3rd standard",
            subject:"Maths",
            schedule:"11.30-12.00"
        },
        {
            teacher:"Pavithra",
            standard:"3rd standard",
            subject:"English",
            schedule:"1.00-1.30"
        },
     
    {
        teacher:"Aswini",
        standard:"3rd standard",
        subject:"Tamil",
        schedule:"1.30-2.00"
    },

]
   
    },
    {
        id:104,
    day:[
        {
            teacher:"Preethi",
            standard:"4th standard",
            subject:"Maths",
            schedule:"10.00-10.30"
        },
   {
        teacher:"Aswini",
        standard:"4th standard",
        subject:"Tamil",
        schedule:"10.30-11.00" 
    },
{
        teacher:"Pavithra",
        standard:"4th standard",
        subject:"English",
        schedule:"11.30-12.00"
    },
 
    {
        teacher:"Sowmiya",
        standard:"4th standard",
        subject:"GK",
        schedule:"1.00-1.30"
    }

]
   
    },
    {
        id:105,
    day:[
        {
            teacher:"Naveen",
            standard:"5th standard",
            subject:"Hindi",
            schedule:"10.00-10.30"
        },
        {
            teacher:"Karthiga",
            standard:"5th standard",
            subject:"Evs",
            schedule:"10.30-11.00"
        
        },
        {
            teacher:"Sowmiya",
            standard:"5th standard",
            subject:"GK",
            schedule:"11.30-12.00"
        },
        {
            teacher:"Preethi",
            standard:"5th standard",
            subject:"Maths",
            schedule:"12.00-12.30"
        },
     {
        teacher:"Pavithra",
        standard:"5th standard",
        subject:"English",
        schedule:"1.30-2.00"
    },

]
   
    },
    {
        id:106,
    day:[
        {
            teacher:"Kalai",
            standard:"6th standard",
            subject:"English",
            schedule:"9.45-10.30"
        },
        {
            teacher:"Hari",
            standard:"6th standard",
            subject:"Social",
            schedule:"10.30-11.15"
        },
            {
                teacher:"Megha",
                standard:"6th standard",
                subject:"Tamil",
                schedule:"11.30-12.15"
            },
          
            {
                teacher:"Priya",
                standard:"6th standard",
                subject:"Maths",
                schedule:"12.15-1.00"
            },
           {
                teacher:"Jothi",
                standard:"6th standard",
                subject:"Science",
                schedule:"2.00-2.45"
            }, 
         
           {
                teacher:"Divya",
                standard:"6th standard",
                subject:"PT",
                schedule:"2.45-2.30"
            },
]
   
    },
    {
        id:107,
    day:[
        {
            teacher:"Megha",
            standard:"7th standard",
            subject:"Tamil",
            schedule:"3.30-4.15"
        },
       {
            teacher:"Kalai",
            standard:"7th standard",
            subject:"English",
            schedule:"12.15-1.00"
        },
       {
            teacher:"Preethi",
            standard:"7th standard",
            subject:"Maths",
            schedule:"10.30-11.15"
        },
       {
            teacher:"Jothi",
            standard:"7th standard",
            subject:"Science",
            schedule:"9.45-10.30"
        },
     {
            teacher:"Hari",
            standard:"7th standard",
            subject:"Social",
            schedule:"11.30-12.15"
        },
     {
            teacher:"Divya",
            standard:"7th standard",
            subject:"PT",
            schedule:"2.00-2.45"
        },
    ]    
   
    },
    {
        id:108,
    day:[
        {
            teacher:"Megha",
            standard:"8th standard",
            subject:"Tamil",
            schedule:"12.15-1.00"
        },
       {
            teacher:"Kalai",
            standard:"8th standard",
            subject:"English",
            schedule:"10.30-11.15"
        },
      {
            teacher:"Preethi",
            standard:"8th standard",
            subject:"Maths",
            schedule:"9.45-10.30"
        },
        {
            teacher:"Jothi",
            standard:"8th standard",
            subject:"Science",
            schedule:"3.30-4.15"
        },
       {
            teacher:"Hari",
            standard:"8th standard",
            subject:"Social",
            schedule:"2.00-2.45"
        },
        {
            teacher:"Divya",
            standard:"8th standard",
            subject:"PT",
            schedule:"11.30-12.15"
        },
    ]    
   
    },

    {
        id:109,
    day:[
        {
            teacher:"Hari",
            standard:"9th standard",
            subject:"Social",
            schedule:"9.45-10.30",
        }, 
        {
            teacher:"Jothi",
            standard:"9th standard",
            subject:"Science",
            schedule:"10.30-11.15"
        },
        {
            teacher:"Kalai",
            standard:"9th standard",
            subject:"English",
            schedule:"11.30-12.15"
        },
        {
            teacher:"Divya",
            standard:"9th standard",
            subject:"PT",
            schedule:"12.15-1.00"
        },
    {
        teacher:"Megha",
        standard:"9th standard",
        subject:"Tamil",
        schedule:"2.00-2.45"
    },
     {
        teacher:"Preethi",
        standard:"9th standard",
        subject:"Maths",
        schedule:"3.30-4.15"
    },
 
    ]    
   
    },
    {
        id:108,
    day:[
        {
            teacher:"Megha",
            standard:"8th standard",
            subject:"Tamil",
            schedule:"12.15-1.00"
        },
       {
            teacher:"Kalai",
            standard:"8th standard",
            subject:"English",
            schedule:"10.30-11.15"
        },
      {
            teacher:"Preethi",
            standard:"8th standard",
            subject:"Maths",
            schedule:"9.45-10.30"
        },
        {
            teacher:"Jothi",
            standard:"8th standard",
            subject:"Science",
            schedule:"3.30-4.15"
        },
       {
            teacher:"Hari",
            standard:"8th standard",
            subject:"Social",
            schedule:"2.00-2.45"
        },
        {
            teacher:"Divya",
            standard:"8th standard",
            subject:"PT",
            schedule:"11.30-12.15"
        },
    ]    
   
    },

    {
        id:109,
    day:[
       
        {
            teacher:"Hari",
            standard:"9th standard",
            subject:"Social",
            schedule:"9.45-10.30",
        }, 
        {
            teacher:"Jothi",
            standard:"9th standard",
            subject:"Science",
            schedule:"10.30-11.15"
        },
        {
            teacher:"Kalai",
            standard:"9th standard",
            subject:"English",
            schedule:"11.30-12.15"
        },
        {
            teacher:"Divya",
            standard:"9th standard",
            subject:"PT",
            schedule:"12.15-1.00"
        },
    {
        teacher:"Megha",
        standard:"9th standard",
        subject:"Tamil",
        schedule:"2.00-2.45"
    },
     {
        teacher:"Preethi",
        standard:"9th standard",
        subject:"Maths",
        schedule:"3.30-4.15"
    },
 
    ]    
   
    },
    

    {
        id:110,
    day:[
       
        {
            teacher:"Divya",
            standard:"10th standard",
            subject:"PT",
            schedule:"9.45-10.30"
        },
    {
        teacher:"Megha",
        standard:"10th standard",
        subject:"Tamil",
        schedule:"10.30-11.15"
    },
    {
        teacher:"Preethi",
        standard:"10th standard",
        subject:"Maths",
        schedule:"11.30-12.15"
    },
   
    {
        teacher:"Jothi",
        standard:"10th standard",
        subject:"Science",
        schedule:"12.15-1.00"
    },
  
    {
        teacher:"Kalai",
        standard:"10th standard",
        subject:"English",
        schedule:"2.00-2.45"
    },
   {
        teacher:"Hari",
        standard:"10th standard",
        subject:"Social",
        schedule:"3.30-4.15"
    },
 
    ]    
   
    },
    

    {
        id:111,
    day:[
       
        
        {
            teacher:"Priyadharshini",
            standard:"11th standard",
            subject:"Maths",
            schedule:"9.45-10.30"
        },
        {
            teacher:"Gowrishankar",
            standard:"11th standard",
            subject:"Chemistry",
            schedule:"10.30-11.15"
        },
        {
            teacher:"Harish",
            standard:"11th standard",
            subject:"English",
            schedule:"11.30.-12.15"
        },
       {
            teacher:"Damodharan",
            standard:"11th standard",
            subject:"Tamil",
            schedule:"12.15.-1.00"    
       },
       {
        teacher:"Karthik",
        standard:"11th standard",
        subject:"Computer Science",
        schedule:"2.00-2.45"
    },
    {
        teacher:"Dheeran",
        standard:"11th standard",
        subject:"PT",
        schedule:"2.45-3.30"
    },
    {
        teacher:"Diya",
        standard:"11th standard",
        subject:"Physics",
        schedule:"3.30-4.15"
    },
 
    ]    
   
    },
    {
        id:112,
    day:[
       
        {
            teacher:"Harish",
            standard:"12th standard",
            subject:"English",
            schedule:"9.45-10.30"
        }, 
        {
            teacher:"Karthik",
            standard:"12th standard",
            subject:"Computer Science",
            schedule:"10.30-11.15"
        },
    {
        teacher:"Damodharan",
        standard:"12th standard",
        subject:"Tamil",
        schedule:"11.30.-12.15"    
    },
    
    {
        teacher:"Diya",
        standard:"12th standard",
        subject:"Physics",
        schedule:"12.15-1.00"   
    },
    {
        teacher:"Gowrishankar",
        standard:"12th standard",
        subject:"Chemistry",
        schedule:"2.00-2.45"
    },
   
    {
        teacher:"Dheeran",
        standard:"12th standard",
        subject:"PT",
        schedule:"2.45-3.30"
    },
    {
        teacher:"Priyadharshini",
        standard:"12th standard",
        subject:"Maths",
        schedule:"3.30-4.15"
    },
 
    ]    
   
    },

]


const app=express();
app.use(express.json());



router.get('/',(req,res)=>{
    res.send(studenttimetable);
})
// specific data
router.get("/:id", (req, res) => {
    try {
        const individualImage =studenttimetable.find(
          (c) => c.id === Number(req.params.id)
        );
        if (individualImage) {
            res.json(individualImage);
          } else {
            res.status(404).json({ message: "Not found" });
          }
        } catch (error) {
          res.json({ message: 505 });
        }
    });

router.post('/',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            const newImage = new Studenttimetable({
            
                // standard:req.body.standard,
                // id:req.body.id,
               
                teacher:req.body.teacher,
                subject:req.body.subject,
                schedule:req.body.schedule
                
                
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
          Studenttimetable.findOneAndUpdate({_id:req.params.id},{
            // standard:req.body.standard,
        
            // id:req.body.id,
            //     day:{
                teacher:req.body.teacher,
                subject:req.body.subject,
                schedule:req.body.schedule
                }
          )
          
            .then(result=>{
                res.status(200).json({
                    updated_studenttimetable:result       
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
           Studenttimetable.deleteOne({_id:req.params.id},{
             
            // standard:req.body.standard,
         
                teacher:req.body.teacher,
                subject:req.body.subject,
                schedule:req.body.schedule
                
            
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_studenttimetable:result       
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
   Studenttimetable.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
export default router;

        // const port=4000;
        // app.listen(port,()=>{
        //     console.log(`server is running at ${port}`);
        //     console.log(firsttimetable);
        // });