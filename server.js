
// creating a server
//in node.js whatever dependancies we have added if we want to use that then we have to use
//the function called require
const express = require('express');

//bringing express to the use
//app is the central character
//app got created when we call express
//app allows us to creater server,do middlewares,injecting securities
//app is the security guard

const app = express();



//starting the server
//server is running on the port number 3333
// ()=>{} it is a call back funciton
//if the server chalu ho jaaye then call this function
app.listen(3333,()=>{
    console.log("server started");
})