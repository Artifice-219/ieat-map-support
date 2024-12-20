const express = require("express");
const app = express();
const path = require("path");
const session = require('express-session')
const bodyParser = require("body-parser");
const Student = require("./backend/model/studentModel.js");
const conn = require('./backend/config/dbconn.js')
const saveStudent = require('./backend/controller/database/saveStudent.js')
const updateStudent_Subject = require('./backend/controller/database/updateSubject.js');
const { default: mongoose } = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/static", express.static(__dirname + "/frontend"));
// for json request
app.use(express.json())


app.use(session({
  // TODO 41 : REPLACE THIS FUCKER ONCE EVERTHING IS GOODS AND DONE
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

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/SignIn&SignUp/SignUp.html", (req, res) => {
  res.sendFile(path.join(__dirname, "SignIn&SignUp", "SignUp.html"));
});

app.post("/login",async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;


  conn()

  try{
    const studentFound = await Student.findOne({email : email});

    if(!studentFound){
        return res.status(404).send({
            message : 'Student not found'
        })
    }
   
    req.session.email = email;
    
  }catch(err){
    console.error(`Error finding student ${err}`);
    res.status(500).send({
        message : 'Internal Server error'
    })

  }
  next();
},
(req, res) => {

    res.sendFile(path.join(__dirname, "frontend/pages/dashboard/studDashboard.html"))
});


app.post("/signup", async (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const gender = req.body.gender;
  const age = req.body.age;
  const studentNumber = req.body.number;
  const password = req.body.password;

  conn()
  // saved all this shit to the database
  saveStudent(username, email, age, gender, studentNumber, password)
  next();
},(req, res) =>{
    res.sendFile(path.join(__dirname, "frontend/pages/dashboard/studDashboard.html"))
}
);

// use this fucking route to query the database
app.get('/user', async (req, res ) => {
  let email = req.session.email;

      conn()

      // query the database using the email on the route param
      try{

        const studentFound = await Student.findOne({email : email});

        if(!studentFound){
          return res.status(404).send({
            message : 'Fucker not found'
          });
        };

        res.send(studentFound);
        console.error(email)

      }catch(error){
        console.error(`An error occured because you suck as a programmer ${error}`)
        res.status(500).send({
          message : `'An internal server error occured because the programmer is gay as fuck' ${error}`
        });
      };
})

// for the adding of subjects
app.post('/add-subject/:db_id', async (req, res) => {
  const { db_id } = req.params;
  const { name, instructor, schedule, startTime, endTime, days } = req.body;

  const subject_name = name;
  const studentDb_id = db_id
  conn();

  const updated_data = {
    schedule: {
      [subject_name]: {
        days: days,
        startTime: startTime,
        endTime: endTime
      }
    }
  };
  
  updateStudent_Subject(studentDb_id, subject_name, updated_data);

  res.json({
    message : "okay"
  })

})
// keep this at the last line
module.exports = app;
