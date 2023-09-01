import  express  from "express";
import mongoose from "mongoose";
import multer from "multer";
// import connectDB from "./db.js";
const router=express.Router();
mongoose.set("strictQuery", false);
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
const sportsSchema=mongoose.Schema([{
        image:{
            data:String,
            contentType: String
        },
    events:{
        type:String,
        required:true
         },
    recentEvent:{
        type:String,
        required:true
    },
    venue:{
            type:String,
            required:true
        },
    achievement:{
        type:String,
        required:true
            },
    position:{
        type:String,
        required:true
         }       
         }])

 const Sports=mongoose.model('Sports',sportsSchema);
 sportsSchema.plugin(Sports);

const sports={
    sportslist:[{
        image:{
            data:"https://i.ibb.co/xDsKn52/side-view-male-swimmers-swimming-pool.jpg",
            contentType:"image/png",
        },
       events:"Upcomming Competitions",
       recentEvent:"Swimming contest",
       venue:"Star Stadium",
       achievement:"Running Race",
       position:"1st place"
},
{
    image:{
        data:"https://i.ibb.co/Lxwnmsc/basketball-players-big-professional-arena-during-game.jpgg",
        contentType:"image/png",
    },
   events:"Upcomming Competitions",
   recentEvent:"Basketball contest",
   venue:"Star Stadium",
   achievement:"Running Race",
   position:"1st place"
},

{
    image:{
        data:"https://i.ibb.co/12WhQMF/female-professional-volleyball-players-action-3d-stadium.jpg",
        contentType:"image/png",
    },
   events:"Upcomming Competitions",
   recentEvent:"volleyball contest",
   venue:"Star Stadium",
   achievement:"Running Race",
   position:"1st place"
},
{
    image:{
        data:"https://i.ibb.co/72XdDc2/three-white-shuttlecocks-badminton-racquet.jpg",
        contentType:"image/png",
    },
   events:"Upcomming Competitions",
   recentEvent:"badminton contest",
   venue:"Star Stadium",
   achievement:"Running Race",
   position:"1st place"
},
    ]
}

//get
// app.use(express.json());
router.get('/',(req,res)=>{
    res.send(sports);
})

// specific data
router.get('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Sports.findById({_id:req.params.id},{
            image:{
                data:req.file.filename,
                contentType:'image/png'
            },   
            events:req.body.events,
            recentEvent:req.body.recentEvent,
            venue:req.body.venue,
            achievement:req.body.achievement,
            position:req.body.position
               
            })
          
            .then(result=>{
                res.status(200).json({
                    sports:result
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
//post
router.post('/',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            const newImage = new Sports({
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                events:req.body.events,
                recentEvent:req.body.recentEvent,
                venue:req.body.venue,
                achievement:req.body.achievement,
                position:req.body.position
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
            Sports.findOneAndUpdate({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
            events:req.body.events,
            recentEvent:req.body.recentEvent,
            venue:req.body.venue,
            achievement:req.body.achievement,
            position:req.body.position
            })
          
            .then(result=>{
                res.status(200).json({
                    updated_sports:result       
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
       
  //delete
  router.delete('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Sports.deleteOne({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                events:req.body.events,
                recentEvent:req.body.recentEvent,
                venue:req.body.venue,
                achievement:req.body.achievement,
                position:req.body.position,
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_sports:result       
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
    Sports.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
    

export default router;
