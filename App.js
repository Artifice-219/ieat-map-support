const express = require('express')
const app = express();
const path = require('path')

// defining route for the pages
app.use('pages',express.static(__dirname + '/frontend'))
// serving the index.html

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'))
})




// keep this at the last line
module.exports = app;