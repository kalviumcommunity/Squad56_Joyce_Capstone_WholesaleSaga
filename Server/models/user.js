const mongoose = require('mongoose');
// const HomeSchema = new mongoose.Schema({
//     img:String,
//     category:String
// })

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



// const HomeModel =mongoose.model("whole_sagas",HomeSchema)
const CatModel =mongoose.model("chickens",CatSchema)
const CatMutton =mongoose.model("muttons",MuttSchema)
const CatParty =mongoose.model("parties",PartySchema)
const CatOffer =mongoose.model("offers",OfferSchema)
const CatSeafood =mongoose.model("sea_foods",SeafoodSchema)
module.exports = {CatModel,CatMutton,CatParty,CatOffer,CatSeafood}

// module.exports= CatModel
// I am raising a pr for my "Database schema created" which is a redo assingment as The added lines in the code did not include the implementation of creating Mongoose models along with schema.