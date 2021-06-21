const mongoose = require('mongoose');

module.exports = ()=>{
    mongoose.connect('mongodb+srv://yusufefe:1234@cluster0.yda9r.mongodb.net/Cluster0?retryWrites=true&w=majority')
    mongoose.connection.on('open',()=>{
        console.log('MongoDB: Connected');
    })
    mongoose.connection.on('error',(err)=>{
        console.log('MongoDB: Error',err);
    })
}