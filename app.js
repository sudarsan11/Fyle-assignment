const express = require('express');
const app     = express();

const branchRoutes = require('./routes/branches');

app.use ((req,res,next) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE" );
  
    next();
  })

  
app.use('/api/bank/branches', branchRoutes);

module.exports = app;
