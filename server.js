const express = require('express')
const app = require('./App')
const port = process.env.PORT || 3000 

app.listen(port, ()=>{
    console.log(`Server is listening at port ${port}`)
});