import express from 'express';
import mongoose from "mongoose";
const app = express();
import multer from "multer";
import path from "path";

const router =express.Router();



const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')

const gallerySchema=mongoose.Schema(
    {
 
//    id:{
//     type:String,
//     required:true,
//    },
image:{
    data:String,
    contentType: String
},
day:{
    type:String,
    required:true,
},
name:{
    type:String,
   required:true,
},
    
description:{
    type:String,
    required:true,
}


           
     })
     
const Gallery =mongoose.model("Gallery",gallerySchema);
gallerySchema.plugin(Gallery);



const gallerypage={
   gallerylist:[
            {
            id:1 ,
            image:{
                
                data:"https://i.ibb.co/WFWjMT8/IMG-1.jpg",
                contentType:"image/png"
            },
            day:"Workshop",
            name:"By Harish",
            description:"This image was taken in the year 2023 during the workshop which was held at Krishnagiri"
        },
        {
               
              id:2,
                image:{
                    
                    data:"https://i.ibb.co/Q60kc55/IMG-2.jpg",
                    contentType:"image/png"
                
            } , 
            day:"Workshop",
            name:"By Harish",
            description:"This image was taken in the year 2023 during the workshop which was held at Krishnagiri"
        },
       
        {
           id:3,
            image:{
                
        data:"https://i.ibb.co/TH7sPfD/IMG-3.jpg",
        contentType:"image/png"
            },
            day:"Workshop",
            name:"By Harish",
            description:"This image was taken in the year 2023 during the workshop which was held at Krishnagiri"
        },
        {
           id:4,
            image:{
                
        data:"https://i.ibb.co/N1HwW8w/IMG-4.jpg",
        contentType:"image/png"
            },
            day:"Workshop",
            name:"By Harish",
            description:"This image was taken in the year 2023 during the workshop which was held at Krishnagiri"
        },{
           id:5,
            image:{
                
                data:"https://i.ibb.co/bBkTNQj/Whats-App-Image-2023-02-24-at-11-39-33-AM-5.jpg",
                contentType:"image/png"
                    },
                    day:"Workshop",
                    name:"By Harish",
                    description:"This image was taken in the year 2023 during the workshop which was held at Krishnagiri" 
        },
        
        {
           id:6,
            image:{
                
                data:"https://i.ibb.co/mFcf5S9/Whats-App-Image-2023-02-24-at-11-39-33-AM-15.jpg",
                contentType:"image/png"
                    } ,
                    day:"Workshop",
                    name:"By Harish",
                    description:"This image was taken in the year 2023 during the workshop which was held at Krishnagiri"
        },
        {   
           id:7,
            image:{
                
                data:"https://i.ibb.co/w60b2Tm/Whats-App-Image-2023-02-24-at-11-39-33-AM-32.jpg",
                contentType:"image/png"
                    } ,
                    day:"Workshop",
                    name:"By Harish",
                    description:"This image was taken in the year 2023 during the workshop which was held at Krishnagiri"
        },
        {   
           id:8,
            image:{
                
                data:"https://i.ibb.co/1vsDh3Z/Whats-App-Image-2023-02-24-at-11-39-33-AM-28.jpg",
                contentType:"image/png"
                    } ,
                    day:"Workshop",
                    name:"By Harish",
                    description:"This image was taken in the year 2023 during the workshop which was held at Krishnagiri"
        },
        {    
           id:9,
            image:{
                
                data:"https://i.ibb.co/txFD1yt/IMG-3982.jpg",
                contentType:"image/png"
                    },
                    day:"Workshop",
                    name:"By Harish",
                    description:"This image was taken in the year 2023 during the workshop which was held at Krishnagiri" 
        },
        {   
           id:10,
            image:{
                
                data:"https://i.ibb.co/nwfjYx4/Whats-App-Image-2023-02-24-at-11-39-33-AM-8.jpg",
                contentType:"image/png"
                    } ,
                    day:"Workshop",
                    name:"By Harish",
                    description:"This image was taken in the year 2023 during the workshop which was held at Krishnagiri"
        },
        {   
           id:11,
            image:{
                
                data:"https://i.ibb.co/2dFknWn/Whats-App-Image-2023-02-24-at-11-39-33-AM-11.jpg",
                contentType:"image/png"
                    } ,
                    day:"Workshop",
                    name:"By Harish",
                    description:"This image was taken in the year 2023 during the workshop which was held at Krishnagiri"
        },
        {   
           id:12,
            image:{
                
                data:"https://i.ibb.co/hMszNhP/Whats-App-Image-2023-02-24-at-11-39-33-AM-12.jpg",
                contentType:"image/png"
                    } ,
                    day:"Workshop",
                    name:"By Harish",
                    description:"This image was taken in the year 2023 during the workshop which was held at Krishnagiri"
        },
        {   
           id:13,
            image:{
                
                data:"https://i.ibb.co/Vx2gVXV/Whats-App-Image-2023-02-24-at-11-39-33-AM-20.jpg",
                contentType:"image/png"
                    } ,
                    day:"Workshop",
                    name:"By Harish",
                    description:"This image was taken in the year 2023 during the workshop which was held at Krishnagiri"
        },
        {   
           id:14,
            image:{
                
                data:"https://i.ibb.co/sFxQXR8/Whats-App-Image-2023-02-24-at-11-39-33-AM-30.jpg",
                contentType:"image/png"
                    },
                    day:"Workshop",
                    name:"By Harish",
                    description:"This image was taken in the year 2023 during the workshop which was held at Krishnagiri" 
        }
]
}
router.get('/',(req,res)=>{
    res.send(gallerypage);
})

router.get("/:id", (req, res) => {
    try {
        const individualImage = gallerypage.gallerylist.find(
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
                const newImage = new Gallery({
                  
                    image:{
                        data:req.file.filename,
                        contentType:'image/png'
                    },
                    day:req.body.day,
                    name:req.body.name,
                    description:req.body.description,
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
          Gallery.findOneAndUpdate({_id:req.params.id},{
          
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },
                day:req.body.day,
                name:req.body.name,
                description:req.body.description,
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
           Gallery.deleteOne({_id:req.params.id},{
       
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },
                day:req.body.day,
                name:req.body.name,
                description:req.body.description,
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

router.delete('/',async(req,res)=>{
   Gallery.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
export default router;

