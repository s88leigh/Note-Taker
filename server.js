//Dependencies
var http = require("http");
const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();

//Sets an initial port.
const PORT = process.env.PORT || 8000;


//Sets up initial app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Listener will start our server
app.listen(PORT, () => {
    console.log("the server is listening on PORT: " + PORT);
});
//Router
//require("./routes/apiRoutes")(app);
//require("./routes/htmlRoutes")(app);
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "Develop","public", "index.html")
    );
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "Develop", "public", "notes.html"));
    console.log("your index");
});

// app.get("/notes", (req, res) => {
//     res.sendFile(path.join(__dirname, "public\notes.html"));
//      console.log("/notes");
// });

// app.get("/db", (req, res) => {
//     res.json("notesArray");
// });

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "public\index.html"));
//     console.log("your index");
// });

