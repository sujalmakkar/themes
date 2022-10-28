const mongoose = require('mongoose');

var DataSchema = new mongoose.Schema({
        
        email:{type:String,required:true},

        password:{type:String,required:true},

        emailValidated:{type:Boolean,required:true},

        uid:{type:Number,required:true},

        dob:{type:String},

        age:{type:String},

        country:{type:String},

        StopWatchLogs:[],

        TimerLogs:[],

        alltodos:[],

        allgoals:{years:[],months:[],weeks:[]},

        alldeadlines:[],

        allletters:[],

        allnotes:[],

        daysreport:[],

        weeksreport:[]

})


const USER = mongoose.model('USER',DataSchema)

module.exports = USER

//  date:'',todos:[]