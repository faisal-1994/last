const {FeaturesListService,LegalDetailsService} = require("../services/FeaturesServices");

const FeaturesList=async(req,res)=>{
    let result=await FeaturesListService(req);
    return res.status(200).json(result)
}

const LegalDetails=async(req,res)=>{
    let result=await LegalDetailsService(req);
    return res.status(200).json(result)
}

module.exports = {FeaturesList, LegalDetails}
