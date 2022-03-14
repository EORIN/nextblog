const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const db = require('./db')
const session = require('express-session')

const app = express();
app.use(bodyParser.json());

app.use(cors())
app.use(session({secret: 'my-secret'}));

var sessions

app.post('/accountdata', (req, res)=>{
  console.log(sessions)
    res.send(sessions.username)
})

app.post('/test', (req, res)=>{
    db.test(req.body.name, req.body.password)
    res.send('ffsdgh')
})

app.post('/signin', async (req, res)=>{
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    const token = await db.signin(email,  name, password)
    console.log(token)
    return res.json(token)
})

app.post('/signup', async (req, res)=>{
    console.log(req.body)
  await db.validateRegistration(req.body.name, req.body.email, req.body.password, (result)=>{
    if(result){
      db.signup(req.body.name, req.body.email, req.body.password)
    }
    else{
      console.log(':(')
    }
  })
  
    
  res.send('HI')
})

app.post('/getposts', async (req, res)=>{
  const result = await db.getposts(req.body.email)
  console.log(result, 'fff')
  res.send(result)
})

app.post('/addpost', async (req, res)=>{
  console.log(req.body)
  db.addpost(req.body.title, req.body.post, req.body.email)
  res.send('HI')
})

app.get('/home', function (req, res) {
    if(sessions && sessions.username){
      res.sendFile(__dirname + '/../src/home.html');
    }
    else{
      res.send('unauthorized');
    }
  })

app.listen(3005, ()=>{
    console.log("SERVER")
});