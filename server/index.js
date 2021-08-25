require('dotenv').config()
const express = require('express');
var bodyParser = require('body-parser')


const db = require('./db');
const app = express();
app.use(bodyParser.json());

app.get('/users', async function  (req, res) {
try{
    const results = await db.query('SELECT * FROM restaurants');
    console.log(results)
    res.send("hi")
}catch(e){
console.log(e)
}
})

app.listen(3000,()=>console.log('server running on 3000'))