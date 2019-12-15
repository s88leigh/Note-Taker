//Dependencies
const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();

//Sets an initial port.
const PORT = process.env.PORT || 8000;

//Sets up initial app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//links to css in the public folder
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

app.get("/api/notes", (err, res) => {
    let newNotes;
    try {
        newNotes = fs.readFileSync("db/db.json", "utf8");
        newNotes = JSON.parse(newNotes);
        console.log(newNotes);

    }
    catch (err) {
        console.log("\n error(in app.get.catch):");
        console.error(err);
    }
    res.json(newNotes);

});

//saving the notes to the database
app.post("/api/notes", (req, res) => {

    try {

        newNotes = fs.readFileSync("db/db.json", "utf8");

        newNotes = JSON.parse(newNotes);

        //adds notes to the body
        newNotes.push(req.body)

        newNotes = JSON.stringify(newNotes);

        //Json turns parsed notes into a string for user
        fs.writeFile("db/db.json", newNotes, "utf8", function (err) {
            if (err) throw err;
        });

        console.log(newNotes);

    }
    catch (err) {
        console.log("\n error(in app.post.catch):");
        console.error(err);
    }
    res.json(JSON.parse(newNotes));

});


//deletes notes from the database
app.delete("/api/notes/:id", (req, res) => {

    let newNotes = []
    newNotes.splice(req.params.id);
    fs.writeFile("db/db.json", JSON.stringify(newNotes), "utf8", function (err) {
        console.log(err);
    });
    res.json(newNotes);
});

//Listener will start our server
app.listen(PORT, () => {
    console.log("the server is listening on PORT: " + PORT);
});

