const {ListByFilterService,CreateReviewService,BrandListService,CategoryListService,SliderListService,ListByCategoryService,ListByBrandService,ListByRemarkService,ListBySmilierService,ListByKeywordService,DetailsService,ReviewListService}=require('../services/ProductServices')

const ProductBrandList=async(req,res)=>{
    let result=await BrandListService();
    return res.status(200).json(result)
}

const ProductCategoryList=async(req,res)=>{
    let result=await CategoryListService();
    return res.status(200).json(result)
}

const ProductSliderList=async(req,res)=>{
    let result=await SliderListService();
    return res.status(200).json(result)
}

const ProductListByBrand=async(req,res)=>{
    let result=await ListByBrandService(req);
    return res.status(200).json(result)
}


const ProductListByCategory=async(req,res)=>{
    let result=await ListByCategoryService(req);
    return res.status(200).json(result)
}

const ProductListBySmilier=async(req,res)=>{
    let result=await ListBySmilierService(req);
    return res.status(200).json(result)
}

const ProductListByKeyword=async(req,res)=>{
    let result=await ListByKeywordService(req);
    return res.status(200).json(result)
}

const ProductListByRemark=async(req,res)=>{
    let result=await ListByRemarkService(req);
    return res.status(200).json(result)
}



const ProductListByFilter=async(req,res)=>{
    let result=await ListByFilterService(req);
    return res.status(200).json(result)
}




const ProductDetails=async(req,res)=>{
    let result=await DetailsService(req);
    return res.status(200).json(result)
}

const ProductReviewList=async(req,res)=>{
    let result=await ReviewListService(req);
    return res.status(200).json(result)
}



const CreateReview=async(req,res)=>{
    let result=await CreateReviewService(req);
    return res.status(200).json(result)
}


module.exports = {ProductBrandList, ProductCategoryList, ProductDetails, ProductListByBrand, ProductListByCategory, ProductListByFilter, ProductListByKeyword, ProductListByRemark, ProductListBySmilier, ProductReviewList, ProductSliderList, CreateReview}