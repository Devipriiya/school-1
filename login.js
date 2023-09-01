import express from 'express'
import connectDB from './librarydb.js'
import mongoose from 'mongoose';
const app = express()
connectDB();
Login
// const url = "mongodb://localhost:27017"

app.use(express.json())

// mongoClient.connect(url, (err, db) => {

//     if (err) {
//         console.log("Error while connecting mongo client")
//     } else {

//         const myDb = db.db('myDb')
//         const collection = myDb.collection('myTable')
const login=
{
    name:"priya",
    email:"kvs@gmail.com",
    password:"ssdsk12345"
}
const loginSchema=mongoose.Schema(
    {
        name:{
            type:String,
           required:true,
        },
        email:{
            type:String,
           required:true,
        },
        password:{
            type:String,
           required:true,
        },
     })

     var Login = mongoose.model('Login', loginSchema);
     loginSchema.plugin(Login);
app.post("/api/login", (req, res) => {

            const newUser = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const query = { email: newUser.email }

            Login.findOne(query, (err, result) => {

                if (result == null) {
                    // Login.insertOne(newUser, (err, result) => {
                    //     res.status(200).send(newUser)
                    // })
                } else {
                    res.status(400).send()
                }

            })

        })

        app.post('/login', (req, res) => {

            const query = {
                email: req.body.email, 
                password: req.body.password
            }

           login.findOne(query, (err, result) => {

                if (result != null) {

                    const objToSend = {
                        name: result.name,
                        email: result.email
                    }

                    res.status(200).send(JSON.stringify(objToSend))

                } else {
                    res.status(404).send()
                }

            })

        })

//     }

// })

const port=4000;
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
    console.log(login);
});