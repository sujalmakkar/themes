const mongoose = require('mongoose');

var DataSchema = new mongoose.Schema({
        
        username:{type:String,required:true},

        password:{type:String,required:true},

        uid:{type:Number,required:true},

        country:{type:String},

        all_todos:[{
            date:String,
            todos:[{text:String,done:Boolean,reminder:String}]
        }]
})


const DATA = mongoose.model('DATA',DataSchema)

module.exports = DATA