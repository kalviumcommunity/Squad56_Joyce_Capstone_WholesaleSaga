const mongoose = require('mongoose');
// const HomeSchema = new mongoose.Schema({
//     img:String,
//     category:String
// })
const bcrypt = require('bcryptjs');

const CatSchema = new mongoose.Schema({
    img:String,
    name:String,
    weight:String,
    serve:String,
    price:String
})

const MuttSchema = new mongoose.Schema({
    img:String,
    name:String,
    weight:String,
    serve:String,
    price:String
})

const PartySchema = new mongoose.Schema({
    img:String,
    name:String,
    weight:String,
    serve:String,
    price:String
})

const OfferSchema = new mongoose.Schema({
    img:String,
    name:String,
    weight:String,
    serve:String,
    price:String
})

const SeafoodSchema = new mongoose.Schema({
    img:String,
    name:String,
    weight:String,
    serve:String,
    price:String
})

const ReadySchema=new mongoose.Schema({
    img:String,
    name:String,
    weight:String,
    serve:String,
    price:String
})

const SnackSchema=new mongoose.Schema({
    img:String,
    name:String,
    weight:String,
    serve:String,
    price:String
})

const ColdcutSchema = new mongoose.Schema({
    img:String,
    name:String,
    weight:String,
    serve:String,
    price:String
})
const EggSchema = new mongoose.Schema({
    img:String,
    name:String,
    weight:String,
    serve:String,
    price:String
})
const PickelSchema= new mongoose.Schema({
    img:String,
    name:String,
    weight:String,
    serve:String,
    price:String
})
const SpiceSchema= new mongoose.Schema({
    img:String,
    name:String,
    weight:String,
    serve:String,
    price:String
})
const DryfishSchema= new mongoose.Schema({
    img:String,
    name:String,
    weight:String,
    serve:String,
    price:String
})
const SignUpSchema = new mongoose.Schema({
    username: String,
    password: String,
    mobileNo: String
});

SignUpSchema.pre('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});


// const HomeModel =mongoose.model("whole_sagas",HomeSchema)
const CatModel =mongoose.model("chickens",CatSchema)
const CatMutton =mongoose.model("muttons",MuttSchema)
const CatParty =mongoose.model("parties",PartySchema)
const CatOffer =mongoose.model("offers",OfferSchema)
const CatSeafood =mongoose.model("sea_foods",SeafoodSchema)
const CatReady = mongoose.model("ready_mades",ReadySchema)
const CatSnack = mongoose.model("snacks",SnackSchema)
const CatCold = mongoose.model("cold_cuts",ColdcutSchema)
const CatEgg = mongoose.model("eggs",EggSchema)
const CatPickel = mongoose.model("pickels",PickelSchema)
const CatSpice = mongoose.model("spices",SpiceSchema)
const CatDryfish = mongoose.model("dry_fishes",DryfishSchema)
const SignUpModel = mongoose.model("signups",SignUpSchema)
module.exports = {CatModel,CatMutton,CatParty,CatOffer,CatSeafood,CatReady,CatSnack,CatCold,CatEgg,CatPickel,CatSpice,CatDryfish,SignUpModel}


// module.exports= CatModel
// I am raising a pr for my "Database schema created" which is a redo assingment as The added lines in the code did not include the implementation of creating Mongoose models along with schema.


