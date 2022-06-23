const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../utils/util');
const { router } = require('./apiRoutes');

//create a get route to "/notes.html" 

//create a get route to "/index.html"



notes.get('/', (req, res) => {
  // Make this go to index.html
    console.log("Yay!!")
    // readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });


router.get('/notes', (req, res) => {
// Make this go to notes.html! 
  })


router.get("*", (req, res) => {
  // Make this go to index.html!
})
//notes.post

//notes.delete
  
  
  
  module.exports = notes;