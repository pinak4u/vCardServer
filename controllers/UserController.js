 exports.getCurrentUser = (req,res,next)=>{
    return res.send('getCurrentUser route hit');
}

 exports.getProfile = (req,res,next)=>{
     return res.send('getProfile route hit');
 }

 exports.updateProfile = (req,res,next)=>{
     return res.send('updateProfile route hit');
 }
