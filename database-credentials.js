// you need this to access environment variables
require('dotenv').config()
let pass = process.env.MONGO_URI

console.log(pass)