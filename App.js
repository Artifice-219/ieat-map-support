const express = require('express')
const app = express();
const path = require('path')

// defining route for the pages
// 'pages' here is a virtual path
app.use('pages',express.static(__dirname + 'frontend'))
// another static route to served the sign/login shit from the SignIn&SignUp folder
// app.use(express.static(path.join(__dirname , 'SignIn&SignUp')))
// root leve middleware logger 
app.use((req, res, next) => {
    console.log(`${req.method} request made to ${__dirname + req.url}`);
    next();
})
// serving the index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'))
})

// serving the login/signup page
app.get('/SignIn&SignUp/SignUp.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'SignIn&SignUp', 'SignUp.html'));
  });




// keep this at the last line
module.exports = app;