const express = require("express");
const cors = require("cors");
const app = express();
const mongodb = require("mongodb").MongoClient;
const dotenv = require("dotenv");
const { MongoErrorLabel, MongoClient } = require("mongodb");
dotenv.config()
const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.5za7dn5.mongodb.net/?retryWrites=true&w=majority`
const PORT = 3000;

app.use(express.json())
app.use(cors())

MongoClient.connect(connectionString)
    .then(client =>{
        console.log("Connected to Database")
        const db = client.db("SheRa-API")
        const infoCollection = db.collection("character-info")

        app.get("/", (req,res)=> {
            res.sendFile(__dirname + "/index.html")
        })
        app.get("/api/",(req,res)=>{
           infoCollection.find().toArray()
           .then(results =>{
               res.json(results)
           })
           .catch(error => console.error(error))
        })
        app.get("/api/:charactername", (req,res)=> { 
            const charactersname = req.params.charactername.toLowerCase()
            infoCollection.findOne({name: charactersname})
           .then(results =>{
               res.json(results)
           })
           .catch(error => console.error(error))
        })
        app.get("/api/characterRole/:role", (req,res)=> {
            const roles = req.params.role.toLowerCase()
            infoCollection.find({role: roles}).toArray()
            .then(results =>{
                res.json(results)
            })
            .catch(error => console.error(error))
        })
    })

app.listen(process.env.PORT || PORT, () =>{
    console.log(`Server is now running on Port ${PORT}`)
})
