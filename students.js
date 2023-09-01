import express from "express";
import multer from "multer";
import mongoose from "mongoose";
// import connectDB from "./studentsdb.js";
const router =express.Router();
// connectDB();
// Students
const studentsSchema=mongoose.Schema(
    {
    studentslist:[{
        image:{
            data:String,
         contentType: String
        },
        name:{
        type:String,
       
        },
    rollno:{
         type:String,
      
     },
           }]          })

var Students = mongoose.model('Students', studentsSchema);
studentsSchema.plugin(Students);


const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')

const students={
  studentslist:[ {
    image:{
        data:"C:\Users\DELL\Desktop\school management\profile\IMG_1234.jpg",
contentType:"image/png"
    },
    name:"Gowrishankar",
    rollno:"1"
},
{
    image:{
        data:"C:\Users\DELL\Desktop\school management\profile\IMG_3901.JPG",
contentType:"image/png"
    },
    name:"Megha",
    rollno:"2"
},
{
    image:{
        data:"C:\Users\DELL\Desktop\school management\profile\IMG_4042.JPG",
contentType:"image/png"
    },
    name:"Nivesh",
    rollno:"3"
},
{
    image:{
        data:"C:\Users\DELL\Desktop\school management\profile\IMG_4050.JPG",
contentType:"image/png"
    },
    name:"Aswini",
    rollno:"4"
}, 

{
    image:{
        data:"C:\Users\DELL\Desktop\school management\profile\IMG_4073.png",
contentType:"image/png"
    },
    name:"Hari Shankaran",
    rollno:"5"
},
{
    image:{
        data:"C:\Users\DELL\Desktop\school management\profile\IMG_4567.jpg",
contentType:"image/png"
    },
    name:"Hem prashanth",
    rollno:"6"
},
{
    image:{
     data:"C:\Users\DELL\Desktop\school management\profile\IMG_7890.jpg",
contentType:"image/png"
    },
    name:"Harish",
    rollno:"7"
},
// {
//     image:{
//         data:"https://png.pngtree.com/png-clipart/20220628/original/pngtree-male-student-lineal-icon-back-to-school-vector-illustration-png-image_8240269.png",
// contentType:"image/png"
//     },
//     name:"naveen",
//     rollno:"8"
// },
]
}
// connectDB();
const app=express();
app.use(express.json());




router.get('/',(req,res) =>
{
    try{
        res.status(200).send(students);
    }
    catch(error){
        res.json({message:"not available"});
    }
});



router.get('/:id',(req,res)=>{
    console.log(req.params.id);
   Students.findById(req.params.id)
    
    .then(result=>{
        res.status(200).json({
            students:result
        })
    })
    .catch(err=> {
    console.log(err);
    res.status(505).json({
        error:err
    })
    }
  )
})

router.post('/',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            const newImage = new Students({
               studentslist:req.body.studentslist
            })
            newImage.save()
        .then(()=>res.send('successfully uploaded')).catch(err=>console.log(err))
        }
    })
    
})

router.put('/:id',(req,res)=>{
    console.log(req.params.id);
    Students.findOneAndUpdate({_id:req.params.id},{
        $set:{
            studentslist:req.body.studentslist
          

        }
    })
    .then(result=>{
        res.status(200).json({
            updated_students:result       
         })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
    })
    router.delete('/:id',(req,res)=>{
        console.log(req.params.id);
        Students.deleteOne({_id:req.params.id},{
            $set:{
               
                studentslist:req.body.studentslist
    
            }
        })
        .then(result=>{
            res.status(200).json({
                deleted_students:result       
             })
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json({
                error:err
            })
        })
        })
      router.delete("/",async(req,res)=>{
          Students.deleteMany({}).then((result) => {
                     res.send(result);
                 })
             });

        export default router;
        // const port=4000;
        // app.listen(port,()=>{
        //     console.log(`server is running at ${port}`);
        //     console.log(students);
        // });