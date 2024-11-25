const express = require("express");
const app = express();
const path = require("path");
// this shit is needed to parse post request
const bodyParser = require("body-parser");
const Student = require("./backend/model/studentModel.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// defining route for the pages
// 'pages' here is a virtual path
// TODO 22 : WHATEVER IS THE SIGNIFICANCE OF THIS STATIC SHIT HERE
app.use("/static", express.static(__dirname + "/frontend"));
// another static route to served the sign/login shit from the SignIn&SignUp folder
// app.use(express.static(path.join(__dirname , 'SignIn&SignUp')))

// session fucking middleware
// use this shit to store logged in user data
app.use(session({
  // TODO 27 : REPLACE THIS FUCKER ONCE EVERTHING IS GOODS AND DONE
  secret : 'fuck_me',
  resave : false,
  saveUninitialized: true, 
  cookie: { secure: false } 
}))
// root leve middleware logger
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${__dirname + req.url}`);
  next();
});
// serving the index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// serving the login/signup page
app.get("/SignIn&SignUp/SignUp.html", (req, res) => {
  res.sendFile(path.join(__dirname, "SignIn&SignUp", "SignUp.html"));
});

// login route
app.post("/login",async (req, res, next) => {
    // TODO 26 : THIS WORKS BUT YOU ARE NOT UTILIZING THE RETURN DATA FROM THE DB, IT SHOULD BE USE TO FILL IN THE DATA IN DASHBOARD
  const email = req.body.email;
  const password = req.body.password;

  const mongoose = require("mongoose");
  const mongo_uri ="mongodb+srv://johnphillipmalbasdev:JA7RY5uorElI2cYg@cluster0.9pms9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  mongoose.connect(mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try{
    const studentFound = await Student.findOne({email : email});

    if(!studentFound){
        return res.status(404).send({
            message : 'Student not found'
        })
    }
    // res.send(studentFound);,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  }catch(err){
    console.error(`Error finding student ${err}`);
    res.status(500).send({
        message : 'Internal Server error'
    })

  }
  next();
  // respond with dashbord
//   res.sendFile(
//     path.join(__dirname, "frontend/pages/dashboard/studDashboard.html")
//   );
},(req, res , next)=>{
  // this shit handles sessions
  req.session.email = 'This email is from youre fucking session bobo'
  next();
},
(req, res) => {
    // render a dashboard
    res.sendFile(path.join(__dirname, "frontend/pages/dashboard/studDashboard.html"))
});

// signup route
app.post("/signup", async (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const gender = req.body.gender;
  const age = req.body.age;
  const studentNumber = req.body.number;
  const password = req.body.password;
    // TODO 23 : HAVE THIS CONNECTION LOGIC ON ITS FILE PARA DI MAGULO
  const mongoose = require("mongoose");
  const mongo_uri ="mongodb+srv://johnphillipmalbasdev:JA7RY5uorElI2cYg@cluster0.9pms9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  mongoose.connect(mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

//   TODO 24 : HAVE THIS LOGIC ON ITS FILE PARA DI MAGULO   
  // saved all this shit to the database
  try {
    const newStudent = new Student({
      firstName: username,
      lastName: "you have no last name param",
      email : email,
      age: age,
      gender: gender,
      studentNumber: studentNumber,
      password : password
    });

    const savedStudent = await newStudent.save();
    // res.json(savedStudent)
  } catch (err) {
    console.error(`Cannot save student :  ${err}`);
  }
  next();
},(req, res) =>{
    res.sendFile(path.join(__dirname, "frontend/pages/dashboard/studDashboard.html"))
}
);

// keep this at the last line
module.exports = app;
