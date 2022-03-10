export default async function signup(req, res) {
    const MongoClient = require("mongodb").MongoClient;
    
    const url = "mongodb://localhost:27017/";
    const mongoClient = new MongoClient(url);
    await mongoClient.connect();
    const db = mongoClient.db("usersdb");
    const collection = db.collection("users");

    const emailVarification = await db.collection('users').findOne({email: req.body.email})
    const nameVarification = await db.collection('users').findOne({name: req.body.name})

    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    if(!emailVarification && !nameVarification){
        await collection.insertOne({name, email, password, posts: []})  
        }
    else{
        console.log(':(')
        }

    await mongoClient.close();
}