exports.login = (req,res,next)=>{
    return res.send('login route hit');
}

exports.logout = (req,res,next) => {
    return res.send('logout route hit')
}

exports.forgotPassword = (req,res,next) => {
    return res.send('forgotPassword route hit')
}



