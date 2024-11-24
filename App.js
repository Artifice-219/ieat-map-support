const express = require('express')
const app = express();
const path = require('path')
// this shit is needed to parse post request
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// defining route for the pages
// 'pages' here is a virtual path
// TODO 22 : WHATEVER IS THE SIGNIFICANCE OF THIS STATIC SHIT HERE
app.use('/static', express.static(__dirname + '/frontend'))
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

// login route
app.post('/login', (req, res) => {
    const userName = req.body.username;
    const passWord = req.body.password;

    console.log(`dirname = ${__dirname}`)

    // respond with dashbord
    res.sendFile(path.join(__dirname, 'frontend/pages/dashboard/studDashboard.html'))
}
)

// signup route
app.post('/signup', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const gender = req.body.gender;
    const age = req.body.age;
    const studentNumber = req.body.number;
    const password = req.body.password;
    
    res.json({
        username : username,
        email : email,
        gender : gender,
        age : age,
        studentNumber : studentNumber,
        password : password
    })
})




// keep this at the last line
module.exports = app;