import React, { Component, Fragment } from 'react';
import HomeTop from "../Components/home/HomeTop";
import NavMenuDesktop from "../Components/common/NavMenuDesktop";
import NavMenuMobile from "../Components/common/NavMenuMobile";
import HomeTopMobile from "../Components/home/HomeTopMobile";
import FooterDesktop from "../Components/common/FooterDesktop";
import FooterMobile from "../Components/common/FooterMobile";
import axios from 'axios';
import ApiURL from '../api/ApiURL';
import ListByCategory from '../Components/ProductDetails/ListByCategory';

class ProductListByCategory extends Component {
    constructor({match}) {
        super();
        this.state={
            Category:match.params.Category,
            ProductData:[],
            isLoading:"",
            MainDiv:"d-none"
        }

    }
    componentDidMount() {
        window.scroll(0,0)
        axios.get(ApiURL.ProductListByCategory(this.state.Category)).then(response=> {
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

                <ListByCategory Category={this.state.Category} ProductData={this.state.ProductData}/>
                
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

export default ProductListByCategory;