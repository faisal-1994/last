const {UserOTPService,VerifyOTPService,SaveProfileService,ReadProfileService} = require("../services/UserServices");

const UserOTP=async (req,res)=>{
    let result=await UserOTPService(req)
    return res.status(200).json(result)
}


const VerifyLogin=async (req,res)=>{
    let result=await VerifyOTPService(req)

    if(result['status']==="success"){

        // Cookies Option
        let cookieOption={expires:new Date(Date.now()+24*6060*1000), httpOnly:false}

        // Set Cookies With Response
        res.cookie('token',result['token'],cookieOption)
        return res.status(200).json(result)

    }else {
        return res.status(200).json(result)
    }
}


const UserLogout=async (req,res)=>{
    let cookieOption={expires:new Date(Date.now()-24*6060*1000), httpOnly:false}
    res.cookie('token',"",cookieOption)
    return res.status(200).json({status:"success"})
}


const CreateProfile=async (req,res)=>{
    let result=await SaveProfileService(req)
    return res.status(200).json(result)
}


const UpdateProfile=async (req,res)=>{
    let result=await SaveProfileService(req)
    return res.status(200).json(result)
}


const ReadProfile=async (req,res)=>{
    let result=await ReadProfileService(req)
    return res.status(200).json(result)
}

module.exports = {
    UserOTP,
    VerifyLogin,
    UserLogout,
    CreateProfile,
    UpdateProfile,
    ReadProfile
}