//import express
const express = require('express')
//declare express app
const app = express()
//local host port number
//different port number from the main app so the server can be seperate
const port = 4000
//another way of importing the bodyparser to parse the app and jsopn files
const bodyParser = require("body-parser");

//import mongoose
const mongoose = require('mongoose');
main().catch(err => console.log(err));

//mongoose database
async function main() {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.s9dxiuk.mongodb.net/?retryWrites=true&w=majority');
}

//create scheme for the data
const albumSchema = new mongoose.Schema({
    name: String,
    artist: String,
    artURL: String,
    year: Number,
    rating: Number
});

const albumModel = mongoose.model('albums', albumSchema);


//Code taken form lab sheet
//adding this codes allows avoidance of a CORS error
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//APP USERS
//parse application/x-www-form-urlencoded
//app.use called everytime not just in the method
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.post('/api/Albums', (req, res) => {
    console.log(req.body);

    albumModel.create({
        name: req.body.name,
        artist: req.body.artist,
        artURL: req.body.artURL,
        year: req.body.year,
        rating: req.body.rating
    })
    res.send("Data Recieved")
})

//app getters
app.get("/api/albums", (req, res) => {
    albumModel.find((error, data) => {

        res.json(data);
    })
})


app.get('/api/albums/:id', (req, res) => {
    console.log(req.params.id)
    albumModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

app.put('/api/albums/:id', (req, res)=>{
    console.log("Update: "+req.params.id);
  
    albumModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
      (error,data)=>{
        res.send(data);
      })
  })

  app.delete('/api/albums/:id',(req, res)=>{
    console.log('Deleting: '+req.params.id);
    albumModel.findByIdAndDelete({_id:req.params.id},(error,data)=>{
      if(error){
        res.status(500).send(error);
      }
      res.status(200).send(data);
    })
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
