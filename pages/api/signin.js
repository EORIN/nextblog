export default async function signin(req, res) {

    const MongoClient = require("mongodb").MongoClient;

    const es = require('express-session')
    

    app.use(session({secret: 'my-secret'}));

    var sessions

    sessions=req.session;

    console.log(sessions)

    app.listen(3000)
    

    const url = "mongodb://localhost:27017/";
    const mongoClient = new MongoClient(url);

    await mongoClient.connect();
    const db = mongoClient.db("usersdb");
    const collection = db.collection("users");
    await collection.findOne({email: req.body.email, password: req.body.password}, (err, result)=>{
        if (result){
            // sessions = req.session
            // sessions.username = req.body.email
            console.log(session)
            res.send(':)')
        }
        else{
            console.log(':(')
        }
    })
  }
  