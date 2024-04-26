const mongoose = require('mongoose');
const HomeSchema = new mongoose.Schema({
    img:String,
    category:String
})
const HomeModel =mongoose.model("whole_saga",HomeSchema)
module.exports = HomeModel