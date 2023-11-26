const express = require('express');
const cors = require('cors')
require('dotenv').config


const app = express();
var corOptions = {
    origin: 'http://localhost:3000'
}

app.use(cors(corOptions))
const studentRoute = require('./routes/studentRoutes');

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(studentRoute);

app.use((req, res, next) => {
    console.log(`Received ${req.method} request at ${req.path}`);
    next();
  });
  
const PORT = process.env.PORT || 4001

app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`)
})
    
