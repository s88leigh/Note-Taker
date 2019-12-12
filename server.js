//Dependencies
const fs = require("fs");
const path = require("path");
const express = require("express");

// var data = fs.readFileSync("db.json");
// var db = JSON.parse(data);
// console.log(db);

const app = express();

//Sets an initial port.
const PORT = process.env.PORT || 8000;


//Sets up initial app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//displays homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

//displays the note's list
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "notes.html"));
    console.log("your on note taker page");
});

//api route getting all the notes as json in the database
app.get("/api/notes", (req, res) => {
    // res.sendFile(path.join(__dirname, "db", "db.json"));
    //  console.log("db");
});

//saving the notes to the database
app.post("/api/notes", (req, res) => {
    var newNotes = req.body;

})

//deleting notes from the database
app.delete("api/notes/",(req, res) => {

})

// app.get("*", (req, res) => {

// });

//Listener will start our server
app.listen(PORT, () => {
    console.log("the server is listening on PORT: " + PORT);
});

//to do:
//delete route needs to be able to pass an id into it; look at last weeks notes about creating id route parameters
//need to create new route for serving static files for css and index.js