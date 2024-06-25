const mongoose = require('mongoose');
const HomeSchema = new mongoose.Schema({
    img:String,
    category:String
})
const HomeModel =mongoose.model("whole_sagas",HomeSchema)
module.exports = HomeModel
// I am raising a pr for my "Database schema created" which is a redo assingment as The added lines in the code did not include the implementation of creating Mongoose models along with schema.