import express from "express";

import mongoose from "mongoose";
// import router from "./teachers";
// import connectDB from "./appdb.js";
// connectDB();
const router =express.Router();
const app=express();
app.use(express.json());
const studentfees={
    standard:"1st standard",
    feeslist:[{ 
   
   admission_fees:"5000",
   bus_fees:"3000",
   note_book_fees:"5000",
   other_course_fees:"2000",
   extra_curiculam_fees:"5000",
   total_fees:"20000"
}]
}
const studentfeesSchema=mongoose.Schema(
    {
        standard:{
            type:String,
           required:true,
        },
feeslist:[{
        admission_fees:{
            type:String,
           required:true,
        },
        bus_fees:{
            type:String,
           required:true,
        },
        note_book_fees:{
            type:String,
           required:true,
        },
        other_course_fees:{
            type:String,
           required:true,
        },
        extra_curiculam_fees:{
            type:String,
           required:true,
        },
        total_fees:{
            type:String,
           required:true,
        },
    }]

     })

const Studentfees =mongoose.model("Studentfees",studentfeesSchema);
studentfeesSchema.plugin(Studentfees);
// app.use(express.json());
router.get("/",(req,res)=>{
    try{
        res.status(200).send(studentfees);
    }catch(error)
    {
        res.json({message:"unable to create"});

    }

});
router.post("/",async(req,res)=>{
    try{
        const details={
            standard:req.body.standard,
            feeslist:req.body.feeslist
            
        };
        console.log(details);
        const fees=new Studentfees(details);
const studentfeesCreated=await fees.save();
if(studentfeesCreated){
    console.log("created");
res.status(201).json({message:"successfully created"});
}
else{
    res.status(401);
    throw new error("not found ");
}
}catch(err){
    return res.status(500).json({message:err.message});
}}
);
//update
router.put('/:id',(req,res)=>{
    console.log(req.params.id);
    Studentfees.findOneAndUpdate({_id:req.params.id},{
        $set:{
            standard:req.body.standard,
            feeslist:req.body.feeslist
           
        }
    })
    .then(result=>{
        res.status(200).json({
            updated_studentfees:result       
         })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
    })
    //delete
    router.delete('/:id',(req,res)=>{
        console.log(req.params.id);
        Studentfees.findByIdAndRemove({_id:req.params.id},{
            $set:{
                standard:req.body.standard,
                feeslist:req.body.feeslist
            }
        })
        .then(result=>{
            res.status(200).json({
                Deleted_studentfees:result       
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
            Studentfees.deleteMany({}).then((result) => {
                     res.send(result);
                 })
             });
            
        
        export default router;
        // const port=4000;
        // app.listen(port,()=>{
        //     console.log(`server is running at ${port}`);
        //     console.log(firstfees);
        // });