const express = require('express')
const app = express();
var addDays = require('date-fns/addDays');
app.get("/",(request,response)=>{
    let date = new Date();
    let targetDate = addDays(date,100);
    response.send(`${targetDate.getDate()}/${targetDate.getMonth()+1}/${
        targetDate.getFullYear()}`);
  
});

module.exports = app;
app.listen(3000);