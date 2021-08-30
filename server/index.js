
const middlewares = require('../server/middlewares/middlewares');
const handlePostMiddleware = middlewares.handlePostMiddleware;

require('dotenv').config()
const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const app = express()
const port = 4000
const db = require('./db');
app.use(bodyParser.json());

app.use(cors());




app.get('/users', handlePostMiddleware ,async (req, res) => {
    const results = await  db.query('SELECT * from users');
  res.json(results.rows)
});



app.post("/login",  async (req, res) => {
  console.log(req.body)
  const results = await db.query('SELECT * from users');
  let userAvailable = await results.rows.find(user => {
    return  user.email == req.body.emailValue
  });
   
  console.log(userAvailable)
 
})




app.post("/users", async (req, res) => {

  const username = req.body.username;

  const email = req.body.email;
  const password = req.body.password;
  const createdAt = req.body.createdAt;
  try {
    const results = await db.query('INSERT INTO users(username, email,password,created) VALUES($1,$2,$3,$4)', [username, email, password, createdAt]);
    console.log(results);
    
    res.json({
      status: "success",
      data: {
        restaurant: results

      },
    })
  } catch (e) {
  console.log(e);
  }
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});


