const User = require ('../models/user.model');
exports.login = (req,res,next)=>{
    return res.send('login route hit');
}

exports.logout = (req,res,next) => {
    return res.send('logout route hit')
}

exports.forgotPassword = (req,res,next) => {
    return res.send('forgotPassword route hit')
}

exports.registerUser = async (req,res,next) => {
    let userObj = {
        firstName:"Pinak",
        lastName:"Patel",
        email:"pinak@gmail.com",
        password:"password",
        dob:new Date("1980-03-04"),
    }
    return res.send(await User.create(userObj)) ;


}



