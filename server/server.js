const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./db')
const app = express();
app.use(bodyParser.json());

app.use(cors())

app.post('/accountdata', (req, res)=>{
  console.log(sessions)
    res.send(sessions.username)
})

app.post('/test', (req, res)=>{
    db.test(req.body.name, req.body.password)
    res.send('ffsdgh')
})

app.post('/checkcookie', async (req, res)=>{
  console.log(req.body.cookie)
  const check = await db.checkCookie(req.body.cookie)
  console.log(check)
  if(check){
    res.json(check)
  }
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
  const result = await db.getposts()
  // console.log(result, 'fff')
  res.send(result)
})
app.post('/getsortposts', async (req, res)=>{
  const result = await db.getsortposts(req.body.email)
  console.log(result, 'fff')
  res.send(result)
})

app.post('/addpost', async (req, res)=>{
  console.log("SERVER111")

  await db.addpost(req.body.text, req.body.title, req.body.name)
  console.log("SERVER111")
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