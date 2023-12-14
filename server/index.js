// const express = require('express');
// const path = require('path');

// const app = express();

// // Serve the static files from the React app
// // app.use(express.static(path.join(__dirname, '/build')));
// app.use('/static', express.static(path.join(__dirname, '../client/build//static')));

// // Handles any requests that don't match the ones above
// app.get('/', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/build/index.html'));
// });

// app.get('/resume', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/build/index.html'));
// });


// const port = process.env.PORT || 5000;
// app.listen(port);

// console.log('App is listening on port ' + port);







const path = require("path");
const express = require("express");
const app = express(); // create express app

// add middlewares
app.use(express.static(path.join(__dirname, "build")));
// app.use(express.static("public"));

app.use((req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });


console.log("from the server")



// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});