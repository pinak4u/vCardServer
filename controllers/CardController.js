exports.createCard = (req,res,next)=>{
    return res.send('createCard route is hit')
}

exports.editCard = (req,res,next)=>{
    return res.send('edit route is hit')
}

exports.viewCard = (req,res,next)=>{
    return res.send('view route is hit')
}

exports.deleteCard = (req,res,next)=>{
    return res.send('delete route is hit')
}

exports.getAllCardsForUser = (req,res,next)=>{
    return res.send('getAllCardsForUser route is hit')
}

exports.searchCard = (res,req,next) => {
    return res.send('searchCard route is hit')
}