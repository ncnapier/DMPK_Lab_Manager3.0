const express = require('express');
const req = require('express/lib/request');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const PORT = 8000;

require('dotenv').config();

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'new-database';

MongoClient.connect(dbConnectionStr, {useUnifiedTopology: true})
    .then(client => {
        console.log(`connected to ${dbName} Database`)
        db = client.db('new-database');
    });

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`server running on ort ${PORT}`);
});
//generic getter- get info from mongodb
app.get('/', (req, res) =>{
    db.collection('').find().toArray()
    .then(data =>{
        res.render('index.ejs', {info: data})
    })
    .catch(error => console.error(error));
});

// get instrument info from mongodb
app.get('/', (req, res) =>{
    db.collection('instruments').find().toArray()
    .then(data =>{
        res.render('index.ejs', {info: data})
    })
    .catch(error => console.error(error));
});

//generic post- send to mongodb
app.post('/', (req, res)=>{
    db.collection('').insertOne(req.body)
    .then(results =>{
        res.redirect('/index.html')
        
    })
});

// send instrument info
app.post('/instrumentSend', (req, res)=>{
    db.collection('instruments').insertOne(req.body)
    .then(results =>{
        res.redirect('/index.html')
        
    })
});

//generic delete- delete from mongodb
app.delete('/', (req, res) => {
    db.collection('').deleteOne({})
    .then(result => {
        console.log('deleted');
        res.json('deleted');
    })
    .catch(error => console.error(error));
});