//Load Data

const notesData = require("../data/notesData");

//Routing
module.exports = function(app) {

    app.get("/api/data", function(req, res) {
        res.json(Data);
    });

    app.post("/appData", function(req, res) {
        if (Data) {
            notesData.push(req.body);
            res.json(true);
        }
        else {
            throw error(error, "notepad is empty")
            console.log("error")
        }
    })
}