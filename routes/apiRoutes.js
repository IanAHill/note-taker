const router = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../utils/util');
// const { router } = require('./apiRoutes');


router.get("/notes", (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

router.post("/notes", (req, res) => {
    readAndAppend(req.body, './db/db.json');
})

// router.delete("/notes/:id", (req, res) => {
//     let currentNote = readFromFile('./db/db.json').then((data) => (JSON.parse(data).then(data => data.map((item, idx) => idx !== req.id ))));
    
//     console.log(currentNote);
//     writeToFile("./db/db.json", currentNote);
// });
  
  
  module.exports = router;