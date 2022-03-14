var mongoose = require('mongoose');

var mongoDB = 'mongodb://localhost:27017/usersdb'

mongoose.connect(mongoDB)


var userSchema = mongoose.Schema({
    name: mongoose.Schema.Types.Mixed,
    password: mongoose.Schema.Types.Mixed,
    posts: {title: mongoose.Schema.Types.Mixed, text: mongoose.Schema.Types.Mixed}
});

const User = mongoose.model('userSchema', userSchema)

const user = new User({name: '12362652', password: '3261', posts: {title:'236326',text: 'fdhtew236236wag'}})
user.save(function(err){
    mongoose.disconnect();
     
    if(err) return console.log(err);
     
    console.log("Сохранен объект user", user);
});


