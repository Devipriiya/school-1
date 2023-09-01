import express from 'express';

const app = express();
import multer from "multer";
import path from "path";
// connectDB();

const router = express.Router();

import mongoose from "mongoose"
// import connectDB from './appdb.js';
const studentprofileSchema = mongoose.Schema(
    {


        image: {
            data: String,
            contentType: String
        },
        Name: {
            type: String,
            required: true,
        },
        RollNo   :{
            type: Number,
            required: true,

        },
            ContactNo:{
                type: Number,
                required: true,
    
            },
            standard :{
                type: String,
                required: true,
            },
            section  :{
                type: String,
                required: true,
            },
            BloodGroup:{
                type: String,
                required: true,
            },
            FatherName:{
                type: String,
                required: true,
            },
            Address :{
                type: String,
                required: true,
            },
           isDeleted:{
            type:Boolean,
            default:false
        }

    })

const Studentprofile = mongoose.model( "studentprofiles",studentprofileSchema);
// studentlistSchema.plugin(Studentlist);


const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({
    storage: Storage,

}).single('testImage')


router.get('/', async (req, res) => {

    let filter = {isDeleted:false}

    if(req.query.standard){
        filter.standard = req.query.standard
    }

    let list = await Studentprofile.find(filter)
    console.log("successfully")
    res.send(list);
})



router.get("/:id", async(req, res) => {
    try {
        let student = await Studentprofile.find({_id:req.params.id,isDeleted:false})
//     .
        
        if (student) {
            res.json(student);
        } else {
            res.status(404).json({ message: "Not found" });
        }
    } catch (error) {
        res.json({ message: 505 });
    }
});

router.post('/', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err)
        }
        else {
            const newImage = new Studentprofile({
                image: {
                    data: req.file.filename,
                    contentType: 'image/png'
                },
                Name: req.body.Name,
                RollNo   :req.body.RollNo,
                    ContactNo:req.body.ContactNo,
                    standard :req.body.standard,
                    section  :req.body.section,
                    BloodGroup:req.body.BloodGroup,
                    FatherName:req.body.FatherName,
                    Address :req.body.Address,
              

            })
            newImage.save()
                .then(() => res.send('successfully uploaded')).catch(err => console.log(err))
        }
    })

})
router.put('/:id', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err)
        }
        else {
            Studentprofile.findOneAndUpdate({ _id: req.params.id }, {

                Name: req.body.Name,
                RollNo   :req.body.RollNo,
                    ContactNo:req.body.ContactNo,
                    standard :req.body.standard,
                    section  :req.body.section,
                    BloodGroup:req.body.BloodGroup,
                    FatherName:req.body.FatherName,
                    Address :req.body.Address,
            })

                .then(result => {
                    res.status(200).json({
                        updated_image: result
                    })
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json({
                        error: err
                    })
                })

        }
    })

})
router.delete('/:id', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err)
        }
        else {
            Studentprofile.deleteOne({ _id: req.params.id }, {

                Name: req.body.Name,
                RollNo   :req.body.RollNo,
                    ContactNo:req.body.ContactNo,
                    standard :req.body.standard,
                    section  :req.body.section,
                    BloodGroup:req.body.BloodGroup,
                    FatherName:req.body.FatherName,
                    Address :req.body.Address,
            })

                .then(result => {
                    res.status(200).json({
                        deleted_image: result
                    })
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json({
                        error: err
                    })
                })

        }
    })


})


router.delete("/", async (req, res) => {
    Studentprofile.deleteMany({}).then((result) => {
        res.send(result);
    })
});


export default router;

