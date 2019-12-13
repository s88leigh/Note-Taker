//Dependencies
const fs = require("fs");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

var newNotes = fs.readFileSync("db.json");
var data = JSON.parse(newNotes);
console.log(db);



//Sets an initial port.
const PORT = process.env.PORT || 8000;


//Sets up initial app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

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
// app.get("/api/notes", (req, res) => {
    
//     res.sendFile(path.join(__dirname, "db", "db.json"));
//     console.log("you're in db");

// });


//saving the notes to the database
// not sure if this will work
// app.post("/api/notes", urlencodedParser,(req, res) => {
//     console.log(req.body);
//     const newNotes = req.body;
//   res.json( newNotes);
//     fs.writeFile(path.join(__dirname, "public", "notes.html"))
// });


//deleting notes from the database
app.delete("api/notes/:id",(req, res) => {
    res.send('DELETE NOTES!')
    
});


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

//Listener will start our server
app.listen(PORT, () => {
    console.log("the server is listening on PORT: " + PORT);
});

//to do:
//delete route needs to be able to pass an id into it; look at last weeks notes about creating id route parameters

//progress:  index, notes pages displays with css.  Delete