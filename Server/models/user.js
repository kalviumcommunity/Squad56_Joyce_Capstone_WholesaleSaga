const mongoose = require('mongoose');
const HomeSchema = new mongoose.Schema({
    img:String,
    category:String
})
const HomeModel =mongoose.model("whole_sagas",HomeSchema)
module.exports = HomeModel