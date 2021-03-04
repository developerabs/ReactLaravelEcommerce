class ApiURL{
    
    static BaseURL="http://127.0.0.1:8000/api/";
    static  VisitorDetails=this.BaseURL+"SendVisitorDetails";
    static  SendContactDetails=this.BaseURL+"SendContactDetails";
    static  SendSiteInfo=this.BaseURL+"SendSiteInfo";
    static  SendCategoryDetails=this.BaseURL+"SendCategoryDetails";



    static  ProductListByRemark(Remark){
        return this.BaseURL+"ProductListByRemark/"+Remark;
    };

    static  ProductListByCategory(Category){
        return this.BaseURL+"ProductListByCategory/"+Category;
    };

    static  ProductListBySubCategory(Category,SubCategory){
        return this.BaseURL+"ProductListBySubCategory/"+Category+"/"+SubCategory;
    };


    static  SendSliderInfo=this.BaseURL+"SendSliderInfo";


    static  ProductDetails(ProductCode){
        return this.BaseURL+"ProductDetails/"+ProductCode;
    }


    static  NotificationHistory=this.BaseURL+"NotificationHistory";


    static  ProductListBySearch(SearchKey){
        return this.BaseURL+"ProductBySearch/"+SearchKey;
    }


    static  CreateOtp(Mobile){
        return this.BaseURL+"CreateOTP/"+Mobile;
    }

}
export default ApiURL;
