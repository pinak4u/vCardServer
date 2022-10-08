const Card = require('../models/card.model');
const User = require('../models/user.model');
exports.createCard = async (req,res,next)=>{
    let user = await User.findOne({"email":"pinak@gmail.com"});
    if (user){
        let card = {
            name: "Pinak Patel",
            company: "Elaunch Infotech",
            email: "pinak@gmail.com",
            phone: 9825191564,
            countryCode: 91,
            address: "Test Address",
            city: "Surat",
            state: "Gujarat",
            facebookUrl: "https://facebook.com/test",
            twitterUrl: "https://twitter.com/test",
            user: user._id,
        };
        let newCard = await Card.create(card);
        newCard = await newCard.save();
        return res.send(newCard);
    }
    return res.send('Something went wrong.')
}

exports.editCard = async (req,res,next)=>{
    let id = req.params.id
    let card = await Card.findOne({'_id':id});
    let updatedCard = await card.update({'company':'ELaunch Info'});
    return res.send(updatedCard);
}

exports.viewCard = async (req,res,next)=>{
    let id = req.params.id
    let card = await Card.findOne({'_id':id});
    return res.send(card);
}

exports.deleteCard = async (req,res,next)=>{
    let id = req.params.id
    let deletedCard = Card.deleteOne({'_id':id});
    return res.send(deletedCard);
}

exports.getAllCardsForUser = async (req,res,next)=>{
    let allCards = await Card.find();
    return res.send(allCards);
}

exports.searchCard = async (res,req,next) => {
    console.log(req.params);
    let card = await Card.findOne({'_id':req.params.id});
    return res.send(card);
}