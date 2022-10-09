const mongoose = require('mongoose');

var DataSchema = new mongoose.Schema({
        
        email:{type:String,required:true},

        password:{type:String,required:true},

        emailValidated:{type:Boolean,required:true},

        uid:{type:Number,required:true},

        dob:{type:String},

        age:{type:String},

        country:{type:String},

        StopWatchLogs:[{
            date:{type:String},
            logs:[]
        }],

        TimerLogs:[{
            date:{type:String},
            logs:[]
        }],

        alltodos:[{
            date:'',
            logs:{}
        }],

        allgoals:{years:[],months:[],weeks:[]},

        alldeadlines:[
            {id:{type:Number,required:true},name:String,reminder:{utcTime:Number,localTime:Number}}
        ],

        allletters:[
            {id:{type:Number,required:true},subject:String,body:String,reminder:{utcTime:Number,localTime:Number}}
        ],

        allnotes:[
            {id:{type:Number},dateCreated:{type:String},data:{heading:{type:String},content:{type:String}}}
        ]

})


const USER = mongoose.model('USER',DataSchema)

module.exports = USER