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

// Serve the static files from the React app
const path = require('path');
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

//mongoose database
async function main() {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.s9dxiuk.mongodb.net/?retryWrites=true&w=majority');
}

//create schemea for the album data
const albumSchema = new mongoose.Schema({
    name: String,
    artist: String,
    artURL: String,
    year: Number,
    rating: Number
});

//create a model from the schemea and the database name
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
//app.use called everytime not just in the method
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//Poster tp send Album Data
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

//Getter to recieve the Json data
app.get("/api/albums", (req, res) => {
    albumModel.find((error, data) => {

        res.json(data);
    })
})

//Getter to reciev an individual album objects data
app.get('/api/albums/:id', (req, res) => {
    console.log(req.params.id)
    albumModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

//Putter to set an individual items data specified by it's id and update it
app.put('/api/albums/:id', (req, res) => {
    console.log("Update: " + req.params.id);

    albumModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (error, data) => {
            res.send(data);
        })
})

//When called will delete the album specified by it's id
app.delete('/api/albums/:id', (req, res) => {
    console.log('Deleting: ' + req.params.id);
    albumModel.findByIdAndDelete({ _id: req.params.id }, (error, data) => {
        if (error) {
            res.status(500).send(error);
        }
        res.status(200).send(data);
    })
})

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../build/index.html'));
    });
    
//Has the app listen at the declared port number
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
