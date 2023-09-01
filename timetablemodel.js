import mongoose from "mongoose";
const timetableSchema=mongoose.Schema(
    {
 
               
     subject:{
        type:String,
        required:true,
        },
     
     teachers:{
        type:String,
        required:true,
        },
     schedule:{
        type:String,
        required:true,
        }

            
           
     })
const Timetable=mongoose.model("Timetable",timetableSchema);
export default Timetable;

const examresultSchema=mongoose.Schema(
    
        
   {
     examname:{
       type:String,
      required:true,
   },  
     grade:{
       type:String,
      required:true,
   },  
     totalmark:{
       type:String,
      required:true,
   },  
   subject:{
       type:String,
      required:true,
   },  
   mark:{
       type:String,
      required:true,
   },  
  
   remarks:{
       type:String,
      required:true,
   },  
   },
   )
var Examresult = mongoose.model('Examresult', examresultSchema);
upcommingexamSchema.plugin(Examresult);

const upcommingexamSchema=mongoose.Schema(
   {
   examname:{
       type:String,
       required:true,
       },
   time:{
        type:String,
       required:true,
    },
   date: {
       type:String,
      required:true,
   },
   totalmark:{
       type:String,
      required:true,
   },
   passingmark:{
       type:String,
      required:true,
   },            
           
          
    })

var Upcommingexam = mongoose.model('Upcommingexam', upcommingexamSchema);
upcommingexamSchema.plugin(Upcommingexam);
