const MongoClient = require("mongodb").MongoClient; 
var mongoDB = 'mongodb://localhost:27017/'
const mongoClient = new MongoClient(mongoDB);
const bcrypt = require('bcrypt')
const jsw = require('jsonwebtoken')
const {secret} = require('../config')
const jwt_decode = require('jwt-decode');
const { ObjectId } = require("mongodb");

const generateAccssToken = (id, name)=>{
    const payload = {id, name}
    return jsw.sign(payload, secret, {expiresIn: "24"})
}
 
module.exports = {
    test: async function(name, password){
        await mongoose.connect(mongoDB)
        console.log('gdsh')
        const db = mongoose.db("usersdb");
        const collection = db.collection("users");
        await User.create({name: name, password: password, posts: {title: '', text: ''}})
        
    },

    signup: async function(name, email, password) {
    try {
        await mongoClient.connect()
        const hashPassword = bcrypt.hashSync(password, 3)
        const db = mongoClient.db("usersdb");
        const collection = db.collection('users')
        await collection.insertOne({name, email, hashPassword, posts: []})
    }catch(err) {
        console.log(err);
    } finally {
    }
},
    addpost: async function(title, post, email){
        await mongoClient.connect();
        const db = mongoClient.db("usersdb");
        const collection = db.collection('users')
        const collectionPosts = db.collection('posts')
        // await db.createCollection('posts')
        await collectionPosts.insertOne({name: email, title: title, post: post, time: new Date})
        // await collectionPosts.updateOne({email: `${email}`}, {$push: {posts: {title: title, post: post, time: new Date}}})
        await collection.updateOne({email: `${email}`}, {$push: {posts: {title: title, post: post, time: new Date}}})

    },

    checkCookie: async function(cookie){
        console.log(cookie)
        const decode = jwt_decode(cookie)
        await mongoClient.connect();
        const db = mongoClient.db("usersdb");
        const collection = db.collection('users')
        console.log(decode, ObjectId(decode.id))
        const user = await collection.findOne({_id: ObjectId(decode.id)})
        console.log(user)
        if(user){
            return user
        }
        else{
            console.log('HUI')
        }

    }
    ,
    getsortposts: async function(){
        await mongoClient.connect();
        const db = mongoClient.db("usersdb");
        const collection = db.collection('posts')
        const data = await collection.find({}).toArray()
        const result = await collection.find({}).sort({time: -1}).toArray()
        console.log(data, 'dfhaergh', result)
        return(result)
        } 
    ,
    signin: async function(email, name, password) {
        await mongoClient.connect();
        const db = mongoClient.db("usersdb");
        const collection = db.collection("users");
        const user = await collection.findOne({email: email})
        console.log(email, password, user)
        if(user){
            const validPasword = bcrypt.compareSync(password, user.hashPassword)
            if (validPasword) {
                const token = generateAccssToken(user._id, name)
                return token
            }
        }
        else{
            return false
        }
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
