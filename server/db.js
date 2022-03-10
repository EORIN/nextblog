const MongoClient = require("mongodb").MongoClient;
    
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url);
 
module.exports = {
    // mongoconnect: async ()=>{
    //     await mongoClient.connect();
    //     const db = mongoClient.db("usersdb");
    //     const collection = db.collection("users");
    // },
    registration: async function(name, email, password) {
    try {
        await mongoClient.connect();
        const db = mongoClient.db("usersdb");
        const collection = db.collection("users");
        await collection.insertOne({name, email, password, posts: []})
    }catch(err) {
        console.log(err);
    } finally {
        await mongoClient.close();
    }
},
    addpost: async function(title, post, email){
        await mongoClient.connect();
        const db = mongoClient.db("usersdb");
        const collection = db.collection('users')
        await collection.updateOne({email: `${email}`}, {$push: {posts: {title: title, post: post}}})
    },
    getposts: async function(email){
        await mongoClient.connect();
        const db = mongoClient.db("usersdb");
        const collection = db.collection('users')
        const profile = await collection.findOne({email: email})
        console.log(profile.posts)
        } 
    ,
    signin: async function(name, password) {
        await mongoClient.connect();
        const db = mongoClient.db("usersdb");
        const collection = db.collection("users");
        await collection.findOne({email: name, password: password}, (err, result)=>{
            if (result){
                console.log(':)')
            }
            else{
                console.log(':(')
                // res.send
            }
        })
    },
    validateSignIn: async function(email, password, callback){
        await mongoClient.connect();
        const db = mongoClient.db("usersdb");
        
            db.collection('users').findOne( { email : email, password: password 
            },function(err, result){
                // console.log(result)
                if(result==null){
                    callback(false)
                }
                else{
                    callback(true)
                }
            });
        ;
    },
    validateRegistration: async function(email, name, password, callback){
        await mongoClient.connect();
        const db = mongoClient.db("usersdb");
        const emailVarification = await db.collection('users').findOne({email: email})
        const nameVarification = await db.collection('users').findOne({name: name})
        if(!emailVarification && !nameVarification){
            console.log(emailVarification, nameVarification)
            callback(true)
        }
        else{
            callback(false)
        }

    }    
} 