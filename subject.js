import express from "express";
import mongoose from "mongoose";
import multer from "multer";
const router=express.Router();
const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')
const subjectSchema=mongoose.Schema(
    {
        subjectName:{
            type:String,
            required:true
                 },
        subjectTeacher:{
             type:String,
             required:true
                },
        schedule:[
            {
                task:{
                    type:String,
                    required:true
                },
                unit:{
                    type:String,
                    required:true
                },
                name:{
                    type:String,
                    required:true
                },
                startdate:{
                    type:String,
                    required:true
                },
                session:{
                    type:String,
                    required:true
                },
                image:{
                    data:String,
                    contentType: String
                },
            }],
            testname:{
                type:String,
                required:true
            },
            examdate:{
                type:String,
                required:true
            },
            mark:{
                type:String,
                required:true
            },
            result:{
                type:String,
                required:true
            },
            description:{
                type:String,
                required:true
            },
            definition:{
                type:String,
                required:true
            }
        
    }
)

const Subject=mongoose.model("Subject",subjectSchema);
subjectSchema.plugin(Subject);

const subjects={
    subjectlist:[
     {
       subjectName   : "Tamil",
       subjectTeacher: "Mr.Damodaran",
       schedule:[
        {
            task:"Upcomming Task",
            unit:"Unit-3",
            name:"Lesson-1",
            startdate:"9/6/2023",
            session:"2.00pm",
            image:{
               data:"https://edge.uacdn.net/73CZDWLFGU72I6K6JB6W/images/2.jpeg?fm=jpg&w=480",
            contentType:"image/png"
               
            },
        },
        {
            task:"Completed Task",
            unit:"Unit-2",
            name:"Lesson-2",
            startdate:"09-06-2023",
            session:"2.00pm",
            image:{
               data:"https://edge.uacdn.net/73CZDWLFGU72I6K6JB6W/images/2.jpeg?fm=jpg&w=480",
            contentType:"image/png"
               
            }
        },
        {
            task:"Upcomming Test",
            unit:"Unit-3",
            name:"Lesson-3",
            startdate:"09-06-2023",
            session:"2.00pm",
            image:{
               data:"https://edge.uacdn.net/73CZDWLFGU72I6K6JB6W/images/2.jpeg?fm=jpg&w=480",
            contentType:"image/png"
               
            }
        }
       ],
       testname:"Tamil",
       examdate:"09-06-2023",
       mark:"60/100",
       result:"Pass",
       description:"Description or Remarks",
       definition:"A student is a person who is attending classes at a school or university. The word 'student' can actually be used to describe someone who is learning anything, and at any stage in their life though."
        
     }
]
}
//all data
// app.use(express.json());
router.get('/',(req,res)=>{
    res.send(subjects);
})



router.get('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
          Subject.findById({_id:req.params.id},{
            subjectName   :req.body.subjectName,
            subjectTeacher:req.body.subjectTeacher,
            schedule:{
                task:req.body.task,
                unit:req.body.unit,
                name:req.body.name,
                startdate:req.body.startdate,
                session:req.body.session,
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                }
            },
            testname:req.body.testname,
            examdate:req.body.examdate,
            mark:req.body.mark,
            result:req.body.result,
            description:req.body.description,
            definition:req.body.definition
               
            })
          
            .then(result=>{
                res.status(200).json({
                    subject:result
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
            const newImage = new Subject({
                subjectName   :req.body.subjectName,
                subjectTeacher:req.body.subjectTeacher,
                schedule:{
                    task:req.body.task,
                    unit:req.body.unit,
                    name:req.body.name,
                    startdate:req.body.startdate,
                    session:req.body.session,
                    image:{
                        data:req.file.filename,
                        contentType:'image/png'
                    }
                },
                testname:req.body.testname,
                examdate:req.body.examdate,
                mark:req.body.mark,
                result:req.body.result,
                description:req.body.description,
                definition:req.body.definition
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
            Subject.findOneAndUpdate({_id:req.params.id},{
                subjectName   :req.body.subjectName,
                subjectTeacher:req.body.subjectTeacher,
                schedule:{
                    task:req.body.task,
                    unit:req.body.unit,
                    name:req.body.name,
                    startdate:req.body.startdate,
                    session:req.body.session,
                    image:{
                        data:req.file.filename,
                        contentType:'image/png'
                    }
                },
                testname:req.body.testname,
                examdate:req.body.examdate,
                mark:req.body.mark,
                result:req.body.result,
                description:req.body.description,
                definition:req.body.definition
            })
          
            .then(result=>{
                res.status(200).json({
                    updated_subject:result       
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
            Subject.deleteOne({_id:req.params.id},{
                subjectName   :req.body.subjectName,
                subjectTeacher:req.body.subjectTeacher,
                schedule:{
                    task:req.body.task,
                    unit:req.body.unit,
                    name:req.body.name,
                    startdate:req.body.startdate,
                    session:req.body.session,
                    image:{
                        data:req.file.filename,
                        contentType:'image/png'
                    }
                },
                testname:req.body.testname,
                examdate:req.body.examdate,
                mark:req.body.mark,
                result:req.body.result,
                description:req.body.description,
                definition:req.body.definition
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_subject:result       
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
    Subject.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
    

export default router;
