exports.login = (req,res,next)=>{
    return res.send('franchise login hit')
}

exports.logout = (req,res,next)=>{
    return res.send('franchise logout hit')
}

exports.forgotPassword = (req,res,next)=>{
    return res.send('franchise forgotPassword hit')
}

exports.getAllCardsForFranchise = (req,res,next)=>{
    return res.send('getAllCardsForFranchise route is hit')
}

exports.searchCard = (res,req,next) => {
    return res.send('searchCard route is hit')
}