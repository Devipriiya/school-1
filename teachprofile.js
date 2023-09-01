import express from "express";
import mongoose from "mongoose";
import multer from "multer";
const router=express.Router();

const teachprofileSchema=mongoose.Schema({
    image:{
        data:String,
     contentType: String
    },
    name:{
        type:String,
        // required:true
    },
    contactNo:{
        type:String,
    },
    faculty:{
        type:String,
        // required:true
    },
    department:{
        type:String,
        // required:true
    },
    bloodGroup:{
        type:String,
        // required:true
    },
    dob:{
        type:String,
        // required:true
    },
    fatherName:{
        type:String,
        // required:true
    },
    email:{
        type:String,
        // required:true
    },
    address:{
        type:String,
        // required:true
    },
  


})
const Teachprofile = mongoose.model('Teachprofile',teachprofileSchema);
teachprofileSchema.plugin(Teachprofile);

const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')


const user={
    profilelist:[{
    id:1,
    image:{
        data:"https://i.ibb.co/zHqXdsS/IMG-7890.jpg",
       contentType:"image/png"
    }, 
    name     :"Harish",
    contactNo:"9577543261",
    faculty   :"Tamil",
    department:"CSE",
    bloodGroup    :"B'+ve",
    dob  :"23/04/1998",
    fatherName:"Kasi",
    email     :"harishhsdp@gmail.com",
    address   :"Chennai",
},
{
    id:2,
    image:{
        data:"https://i.ibb.co/nD4Lgzv/IMG-4567.jpg",
       contentType:"image/png"
    }, 
    name     :"Hem prashanth",
    contactNo:"9876543210",
    faculty   :"Computer Science",
    department:"CSE",
    bloodGroup    :"O'+ve",
    dob  :"23/04/1999",
    fatherName:"Selvam",
    email     :"hemprashanthhsdp@gmail.com",
    address   :"Krishnagiri",
},
{
    id:3,
    image:{
        data:"https://i.ibb.co/CtqLGfZ/IMG-1234.jpg",
       contentType:"image/png"
    }, 
    name     :"Gowrishankar",
    contactNo:"9975543218",
    faculty   :"Physics",
    department:"CSE",
    bloodGroup    :"A'+ve",
    dob  :"03/07/1998",
    fatherName:"Sundharam",
    email     :"gowrishankarhsdp@gmail.com",
    address   :"Chennai",
},
{
    id:4,
    image:{
        data:"https://i.ibb.co/6m0MJ5F/IMG-3901.jp",
       contentType:"image/png"
    }, 
    name     :"Megha",
    contactNo:"9765432109",
    faculty   :"English",
    department:"CSE",
    bloodGroup    :"O'+ve",
    dob  :"03/06/2001",
    fatherName:"Krisjnan",
    email     :"meghahsdp@gmail.com",
    address   :"Krishnagiri",
},
{
    id:5,
    image:{
        data:"https://i.ibb.co/F442Gpv/IMG-4042.jpg",
       contentType:"image/png"
    }, 
    name     :"Nivesh",
    contactNo:"9779542210",
    faculty   :"Maths",
    department:"CSE",
    bloodGroup    :"A'+ve",
    dob  :"23/04/1995",
    fatherName:"Srinivasan",
    email     :"niveshhsdp@gmail.com",
    address   :"Chennai",
},
{
    id:6,
    image:{
        data:"https://i.ibb.co/T4cpxXj/IMG-4050.jpg",
       contentType:"image/png"
    }, 
    name     :"Aswini",
    contactNo:"9967890510",
    faculty   :"Science",
    department:"CSE",
    bloodGroup    :"A'+ve",
    dob  :"28/04/1999",
    fatherName:"Gunasekaran",
    email     :"aswinihsdp@gmail.com",
    address   :"Tiruppur",
},
{
    id:7,
    image:{
        data:"https://i.ibb.co/V9DgfQ3/IMG-4073.png",
       contentType:"image/png"
    }, 
    name     :"Harishankaran",
    contactNo:"9876543210",
    faculty   :"Social",
    department:"CSE",
    bloodGroup    :"B'+ve",
    dob  :"09/08/1999",
    fatherName:"Shankar",
    email     :"harihsdp@gmail.com",
    address   :"Krishnagiri",
},
],

}


// const app=express();
// app.use(express.json());

// get

router.get('/',(req,res)=>{
    try{
        res.status(200).send(user);
    }
    catch(error){
        res.json({message:"unable to create"});
    }
});

// specificData

router.get("/:id", (req, res) => {
    try {
        const individualImage =user.profilelist.find(
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
//post

router.post('/',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            const newFile = new Teachprofile({
                image:{
                    data:req.file.filename,
                    contentType:'image'
                },
                name:req.body.name,
                contactNo:req.body.contactNo,
                faculty:req.body.faculty,
                department:req.body.department,
                bloodGroup:req.body.bloodGroup,
                dob:req.body.dob,
                fatherName:req.body.fatherName,
                email:req.body.email,
                address:req.body.address,
                
              
            })
            newFile.save()
        .then(()=>res.send('successfully uploaded')).catch(err=>console.log(err))
        }
    })
    
})

 //put

 router.put('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Teachprofile.findOneAndUpdate({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image'
                },
                name:req.body.name,
                contactNo:req.body.contactNo,
                faculty:req.body.faculty,
                department:req.body.department,
                bloodGroup:req.body.bloodGroup,
                dob:req.body.dob,
                fatherName:req.body.fatherName,
                email:req.body.email,
                address:req.body.address,
             
            })
          
            .then(result=>{
                res.status(200).json({
                    updated_user:result       
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
            Teachprofile.deleteOne({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image'
                },
                name:req.body.name,
                contactNo:req.body.contactNo,
                faculty:req.body.faculty,
                department:req.body.department,
                bloodGroup:req.body.bloodGroup,
                dob:req.body.dob,
                fatherName:req.body.fatherName,
                email:req.body.email,
                address:req.body.address,
              
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_user:result       
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


//Delete many
    
router.delete('/',async(req,res)=>{
    Teachprofile.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
  

// const port=9532;
// app.listen(port,()=>{
//     console.log(`server is running at ${port}`);
//     console.log(profile);
// });
export default router;