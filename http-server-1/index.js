const express = require('express');
const port = 3000;

const app = express();


app.get("/request-handler", function(req, res) {
    //HEADER , BODY , QUERY PARAMETER
    //DO MACHINE LEARNING MODEL

    res.json({
        name:"Aditya Jaiswal",
        age:20,
        city:"New York"
    })
})

app.get('/', function(req, res) {

    res.send('<h1>Hello World</h1>'); // This is a string
    // Backend can return html also 
})

app.get('/about', function(req,res){
    // const loveOfLife = req.query.loveOfLife;
    // const time = req.query.time;
    // const location = req.query.location;

    res.json({
        loveOfLife: "Ankusha",
        time: "5Months",
        location: "Aditya's Tent"
    })
})

app.listen(port, function() {
    console.log(`Server is running on port ${port}`);
})

//Homework:
//1. Create a todo app that allows you to add, delete, and view todos.
