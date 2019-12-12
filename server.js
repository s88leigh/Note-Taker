//Dependencies
var http = require("http");
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
    console.log("your on note taker page");
});

// app.get("/api/notes", (req, res) => {
//     res.sendFile(path.join(__dirname, "db", "db.json"));
//      console.log("db");
// });

// app.post("/api/notes", (req, res) => {
//     var newNotes = req.body;

// })

// app.delete("api/notes/",(req, res) => {

// })
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "public\index.html"));
//     console.log("your index");
// });

