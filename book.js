import express from "express";
import connectDB from "./librarydb.js";
import multer from "multer";

const router =express.Router();
connectDB();

const app=express();
app.use(express.json());

const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')

const book={
books:[
    {
    image:{
    data:"https://mlhshv2aawfz.i.optimole.com/w:600/h:600/q:mauto/f:avif/https://mbabookstore.com/wp-content/uploads/2022/02/the-blue-book.png" , 
    contentType:"image/png" 
    },
    bookname:"Bluebook",
    category:"Grammer",
    authorname:"steephan"
},
{
    image:{
        data:"https://ramapublishinghouse.com/wp-content/uploads/2021/02/310-1.png",
        contentType:"image/png"
    },
    bookname:"planatation",
    category:"science",
    authorname:"josh evans"
},
{
    image:{
        data:"https://e7.pngegg.com/pngimages/919/266/png-clipart-catrike-brand-logo-appseconnect-mockup-success-stories-text-bicycle-thumbnail.png",
        contentType:"image/png"
    },
    bookname:"the key of success",
    category:"story",
    authorname:"jerry clifford"
},
{
    image:{
        data:"https://n1.sdlcdn.com/imgs/j/p/6/The-Discovery-of-India-by-SDL953668032-1-27cfd.png",
        contentType:"image/png"
    },
    bookname:"Discovery of India",
    category:"history",
    authorname:"Jawaharlal Nehru"
},
{
    image:{
        data:"https://m.media-amazon.com/images/I/5153EFaOnXL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
        contentType:"image/png"
    },
    bookname:"The magic mango",
    category:"picture book",
    authorname:"josh evans"
},
{
    image:{
        data:"https://n1.sdlcdn.com/imgs/k/f/z/WORD-POWER-MADE-EASY-Norman-SDL961987150-4-1c1d0.png",
        contentType:"image/png"
    },
    bookname:"Word power made easy",
    category:"vocabulary",
    authorname:"Norman lewis"
},
{
    image:{
        data:"https://99bookscart-assets.s3.ap-south-1.amazonaws.com/9788183225090.png",
        contentType:"image/png"
    },
    bookname:"Believe in Yourself",
    category:"biography",
    authorname:"josheph murphy"
},
{
    image:{
        data:"https://0.academia-photos.com/attachment_thumbnails/43972911/mini_magick20190215-18997-1cwtgzv.png?1550238059",
        contentType:"image/png",
    },
    bookname:"polynomials",
    category:"mathematics",
    authorname:"Victory V.Prasolov"
}
]
}

app.set("view engine","ejs");

app.use(express.static("public"));
router.get('/data',(req,res)=>{
res.render("data");
})
router.get('/upload-file',(req,res)=>{
    res.download("./book/Nodejs contents 1.pdf");
})



       export default router;
const port=4000;
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
    // console.log(library);
});