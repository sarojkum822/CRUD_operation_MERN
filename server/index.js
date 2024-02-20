const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const UserModal = require('./modals/Users');


const app = express();
app.use((cors()));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/studentInfo");

const db = mongoose.connection;

db.on('connected', () => {                  //to show in console that the database is connected
    console.log('MongoDB connected');
});

db.on('error', (err) => {                   //if any error will detected
    console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {               //if database get disconnected
    console.log('MongoDB disconnected');
});

//Making of API from here
//post is to create or it will take data from web page and push it into the database

app.post('/createUser', (req, res) => {     //
    UserModal.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err));
})

app.get("/", (req, res) => {
    UserModal.find({})
        .then(users => res.json(users))
        .catch(err => console.log(err));
})

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModal.findById({ _id:id })
        .then(users => res.json(users))
        .catch(err => res.json(err));
})

app.put('/updateUser/:id', (req, res)=>{
    const id = req.params.id;
    UserModal.findByIdAndUpdate({_id: id }, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    })
        .then(users => res.json(users))
        .catch(err => res.json(err));
})

app.delete('/deleteUser/:id',(req,res)=>{
    const id = req.params.id;
    UserModal.findByIdAndDelete({_id: id })
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running");
});

