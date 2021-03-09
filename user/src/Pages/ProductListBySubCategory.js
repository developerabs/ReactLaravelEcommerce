import React, { Component, Fragment } from 'react';
import HomeTop from "../Components/home/HomeTop";
import NavMenuDesktop from "../Components/common/NavMenuDesktop";
import NavMenuMobile from "../Components/common/NavMenuMobile";
import HomeTopMobile from "../Components/home/HomeTopMobile";
import FooterDesktop from "../Components/common/FooterDesktop";
import FooterMobile from "../Components/common/FooterMobile";
import axios from 'axios';
import ApiURL from '../api/ApiURL';
import ListBySubCategory from "../Components/ProductDetails/ListBySubCategory";

class ProductListBySubCategory extends Component {
    constructor({match}) {
        super();
        this.state={
            Category:match.params.Category,
            SubCategory:match.params.SubCategory,
            ProductData:[],
            isLoading:"",
            MainDiv:"d-none"
        }

    }


    componentDidMount() {
        window.scroll(0,0)
        axios.get(ApiURL.ProductListBySubCategory(this.state.Category,this.state.SubCategory)).then(response=> {
            this.setState({ProductData:response.data,isLoading:"d-none",MainDiv:" "})
        }).catch(error=> {

        });
    }
    render() {
        return (
            <Fragment>
                <div className="Desktop">
                    <NavMenuDesktop/>
                </div>
                <div className="Mobile">
                    <NavMenuMobile/>
                </div>
                    <ListBySubCategory  Category={this.state.Category} SubCategory={this.state.SubCategory}  ProductData={this.state.ProductData} />
         
                <div className="Desktop">
                    <FooterDesktop/>
                </div>
                <div className="Mobile">
                    <FooterMobile/>
                </div>
            </Fragment>
        );
    }
}

export default ProductListBySubCategory;