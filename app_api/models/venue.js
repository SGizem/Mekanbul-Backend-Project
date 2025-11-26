var mongoose = require('mongoose');
var hour=new mongoose.Schema(
    {

        day:{type:String,required:true},
        open:{type:String,required:true},
        close:{type:String,required:true},
        isclosed:{type:Boolean,required:true}
    }
)
var comment=new mongoose.Schema({
    author:{type:String,required:true},
    rating:{type:Number,min:0,max:5,required:true},
    Date:{type:Date,default:Date.now},
    text:{type:String,required:true}
});
var venue = new mongoose.Schema({
    name: { type: String, required: true },
    adress: String,
    rating: { type: Number, min: 0, max: 5, default: 0 },
    foodandrink:[String],
    hours:[hour],
    comments:[comment],
    coordinates:{type:[Number],index:'2dsphere'},
});

mongoose.model('venue',venue, "venues");