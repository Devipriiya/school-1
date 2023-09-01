import express from "express";

import mongoose from "mongoose";
// import connectDB from "./appdb.js";
// connectDB();
const router =express.Router();
const app=express();
app.use(express.json());
const twelfthfees=[
    { 
   admission_fees:"15000",
   bus_fees:"15000",
   note_book_fees:"30000",
   other_course_fees:"22000",
   extra_curiculam_fees:"17000",
   total_fees:"99000"
}
]
const twelfthfeesSchema=mongoose.Schema(
    {
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

     })

const Twelfthfees =mongoose.model("Twelfthfees",twelfthfeesSchema);
twelfthfeesSchema.plugin(Twelfthfees);
// app.use(express.json());
router.get("/",(req,res)=>{
    try{
        res.status(200).send(twelfthfees);
    }catch(error)
    {
        res.json({message:"unable to create"});

    }

});
router.post("/",async(req,res)=>{
    try{
        const details={
            admission_fees:req.body.admission_fees,
            bus_fees:req.body.bus_fees,
            note_book_fees:req.body.note_book_fees,
            other_course_fees:req.body.other_course_fees,
            extra_curiculam_fees:req.body.extra_curiculam_fees,
            total_fees:req.body.total_fees
            
        };
        console.log(details);
        const twelfth=new Twelfthfees(details);
const twelfthfeesCreated=await twelfth.save();
if(twelfthfeesCreated){
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
    Twelfthfees.findOneAndUpdate({_id:req.params.id},{
        $set:{
            admission_fees:req.body.admission_fees,
            bus_fees:req.body.bus_fees,
            note_book_fees:req.body.note_book_fees,
            other_course_fees:req.body.other_course_fees,
            extra_curiculam_fees:req.body.extra_curiculam_fees,
            total_fees:req.body.total_fees
        }
    })
    .then(result=>{
        res.status(200).json({
            updated_twelfthtandardfees:result       
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
        Twelfthfees.findByIdAndRemove({_id:req.params.id},{
            $set:{
               
                admission_fees:req.body.admission_fees,
                bus_fees:req.body.bus_fees,
                note_book_fees:req.body.note_book_fees,
                other_course_fees:req.body.other_course_fees,
                extra_curiculam_fees:req.body.extra_curiculam_fees,
                total_fees:req.body.total_fees
            }
        })
        .then(result=>{
            res.status(200).json({
                Deleted_twelfthstandardfees:result       
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
            Twelfthfees.deleteMany({}).then((result) => {
                     res.send(result);
                 })
             });
            
        
        export default router;
        // const port=4000;
        // app.listen(port,()=>{
        //     console.log(`server is running at ${port}`);
        //     console.log(twelfthfees);
        // });