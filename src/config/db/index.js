const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
async function connect(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connect successfully!');
    }catch(err){
        console.log(err);
        console.log('Connect failed!');
    }
}

module.exports = {
    connect,
}