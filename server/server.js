
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

app.post('/signin', async (req, res)=>{
    sessions=req.session;
    const email = req.body.email;
    const password = req.body.password;
    
    await db.validateSignIn(email, password, (result)=>{
        if(result){
            sessions.username = req.body.email;
            res.send('success');
          }
        else{
            res.send('Wrong username password')
          }
    })
})

app.post('/getposts', async (req, res)=>{
  console.log(req.body.email, 'fdshfgew')
  await db.getposts(req.body.email)
})
app.post('/registration', async (req, res)=>{
    
  await db.validateRegistration(req.body.name, req.body.email, req.body.password, (result)=>{
    if(result){
      db.registration(req.body.name, req.body.email, req.body.password)
    }
    else{
      console.log(':(')
    }
  })
  
    
  res.send('HI')
})

app.post('/addpost', async (req, res)=>{
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