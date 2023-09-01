import express from "express";
// import connectDB from "./librarydb.js";
import multer from "multer";

const router =express.Router();
// connectDB();

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
import mongoose from "mongoose"
const bookdetailsSchema=mongoose.Schema(
    [{
  
   id: {
   type:String,
   required:true
   },
image:{
    data:String,
    contentType: String
},
bookname:{
    type:String,
    required:true
    },
authorname:{
    type:String,
    required:true
    },
about:{
    type:String,
    required:true
    },
authorabout:{
    type:String,
    required:true
    },
description:{
    type:String,
    required:true
    }
            
           
     }])

const Bookdetails=mongoose.model("Bookdetails ",bookdetailsSchema);
bookdetailsSchema.plugin(Bookdetails);

const book=[
{   
    id:1001 ,
    image:{
    data:"https://mlhshv2aawfz.i.optimole.com/w:600/h:600/q:mauto/f:avif/https://mbabookstore.com/wp-content/uploads/2022/02/the-blue-book.png" , 
    contentType:"image/png" 
    },
    bookname:"Bluebook",
    authorname:"steephan",
    about:"About Author",
    authorabout:"Stephen William Hawking (8 January 1942 – 14 March 2018) was an English theoretical physicist, cosmologist, and author who, at the time of his death, was director of research at the Centre for Theoretical Cosmology at the University of Cambridge.",
    description:"The Bluebook: A Uniform System of Citation is a style guide that prescribes the most widely used legal citation system in the United States. It is taught and used at a majority of U.S. law schools and is also used in a majority of federal courts. Legal publishers also use several house citation styles in their works",

},
{
    id:1002 ,
    image:{
        data:"https://ramapublishinghouse.com/wp-content/uploads/2021/02/310-1.png",
        contentType:"image/png"
    },
    bookname:"planatation",
    category:"science",
    authorname:"josh evans",
    about:"About Author",
    authorabout:"Joshua A. Evans (born January 16, 1971) is an American filmmaker, screenwriter, author and actor best known for his role in Born on the Fourth of July (1989).",
    description:"The Plantation is book one in the Payne and Jones series by Chris Kuzneski. When Ariane Walker, disappeared her boyfriend Jonathon Payne asked for help from his friend PI David Joseph Jones. During their investigation, they found out that Ariane Walker was not the first person to be kidnapped.",
},
{
    id:1003 ,
    image:{
        data:"https://e7.pngegg.com/pngimages/919/266/png-clipart-catrike-brand-logo-appseconnect-mockup-success-stories-text-bicycle-thumbnail.png",
        contentType:"image/png"
    },
    bookname:"the key of success",
    category:"story",
    authorname:"jerry clifford",
    about:"About Author",
    authorabout:"Dr Jerry Clifford is the co-founder and CEO of Valitacell, a company that creates and commercialises analytical (reagents and data) solutions for the biopharmaceutical industry.",
    description:"You must develop self worth, self value. I believe that the greatest deterioration of self esteem comes through lack of simple disciplines. Lack of discipline erodes self esteem. Society will not chastise you if you go soft on yourself, but neglect will destroy us all."
},
{
    id:1004 ,
    image:{
        data:"https://n1.sdlcdn.com/imgs/j/p/6/The-Discovery-of-India-by-SDL953668032-1-27cfd.png",
        contentType:"image/png"
    },
    bookname:"Discovery of India",
    category:"history",
    authorname:"Jawaharlal Nehru",
    about:"About Author",
    authorabout:"Jawaharlal Nehru (/ˈneɪru/ or /ˈnɛru/;[1] Hindi: [ˈdʒəʋɑːɦəɾˈlɑːl ˈneːɦɾuː] (listen); juh-WAH-hurr-LAHL NE-hǝ-ROO; 14 November 1889 – 27 May 1964) was an Indian anti-colonial nationalist, secular humanist, social democrat,[2] and author who was a central figure in India during the middle third of the 20th century.",
    description:"The book is a broad view of Indian history, culture and philosophy, the same can also be seen in the television series. The book is considered as one of the finest writing om Indian History."
},
{
    id:1005 ,
    image:{
        data:"https://m.media-amazon.com/images/I/5153EFaOnXL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
        contentType:"image/png"
    },
    bookname:"The magic mango",
    category:"picture book",
    authorname:"josh evans",
    about:"About Author",
    authorabout:"On August 5, 2002, Evans died during a medical procedure in San Diego from complications related to a congenital heart condition. He was 20 years old.",
    description:"It is the story of two siblings, Tara and Arun, who discover an old newspaper in their grandmother's attic. They open it and embark on a historical adventure about a magic mango seed and a little boy who tried to telegraph it from India to London at the end of the nineteenth century."
},
{
    id:1006 ,
    image:{
        data:"https://n1.sdlcdn.com/imgs/k/f/z/WORD-POWER-MADE-EASY-Norman-SDL961987150-4-1c1d0.png",
        contentType:"image/png"
    },
    bookname:"Word power made easy",
    category:"vocabulary",
    authorname:"Norman lewis",
    about:"About Author",
    authorabout:"Norman Lewis, a leading African-American painter, was an important member of the Abstract Expressionism movement, and he also used representational strategies to focus on black urban life and his community's struggles.",
    description:"Word Power Made Easy is a comprehensive vocabulary‑building system created by legendary grammarian Norman Lewis that provides a simple, step‑by‑step method to increase your knowledge and mastery of the English language. ",
},
{ 
    id:1007,
    image:{
        data:"https://99bookscart-assets.s3.ap-south-1.amazonaws.com/9788183225090.png",
        contentType:"image/png"
    },
    bookname:"Believe in Yourself",
    category:"biography",
    authorname:"josheph murphy",
    about:"About Author",
    authorabout:"A native of Ireland who resettled in America, Joseph Murphy, Ph. D., D.D., (1898-1981) was a prolific and widely admired New Thought minister and writer, best known for his motivational classic The Power of Your Subconscious Mind, an international bestseller since it first appeared onto the self-help scene in 1963.",
    description:"In Believe in Yourself, Dr. Joseph Murphy stresses about having faith in ones abilities, believing in the inner self and in having the courage to chase your dream, come what may."
},

{
    id:1008,
    image:{
        data:"https://0.academia-photos.com/attachment_thumbnails/43972911/mini_magick20190215-18997-1cwtgzv.png?1550238059",
        contentType:"image/png",
    },
    bookname:"polynomials",
    category:"mathematics",
    authorname:"Victory V.Prasolov",
    about:"About Author",
    authorabout:"Victor Prasolov, born 1956, is a permanent teacher of mathematics at the Independent University of Moscow. He published two books with Springer, Polynomials and Algebraic Curves.",
    description:"The book extends the high school curriculum and provides a backdrop for later study in calculus, modern algebra, numerical analysis, and complex variable theory."
}

]

app.set("view engine","ejs");

app.use(express.static("public"));
router.get('/data',(req,res)=>{
res.render("data");
})
router.get('/upload-file',(req,res)=>{
    res.download("./book/Nodejs contents 1.pdf");
})

router.get('/',(req,res)=>{
    res.send(book);
})

router.get("/:id", (req, res) => {
    try {
        const individualImage =book.find(
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
            const newImage = new Bookdetails({
                id:req.body.id,
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },
                bookname:req.body.bookname,
                category:req.body.category,
                authorname:req.body.authorname,
                about:req.body.about,
                authorabout:req.body.authorabout,
                description:req.body.description
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
            Bookdetails.findOneAndUpdate({_id:req.params.id},{
                id:req.body.id,
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },
                bookname:req.body.bookname,
                category:req.body.category,
                authorname:req.body.authorname,
                about:req.body.about,
                authorabout:req.body.authorabout,
                description:req.body.description
            })
          
            .then(result=>{
                res.status(200).json({
                    updated_bookdetails:result       
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
            Bookdetails.deleteOne({_id:req.params.id},{
                id:req.body.id,
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },
                bookname:req.body.bookname,
                category:req.body.category,
                authorname:req.body.authorname,
                about:req.body.about,
                authorabout:req.body.authorabout,
                description:req.body.description
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_bookdetails:result       
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
    Bookdetails.deleteMany({}).then((result) => {
             res.send(result);
         })
     });





       export default router;
// const port=4000;
// app.listen(port,()=>{
//     console.log(`server is running at ${port}`);
   
// });