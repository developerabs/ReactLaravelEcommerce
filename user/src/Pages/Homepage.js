import React, { Component, Fragment } from 'react';
import FeaturedProduct from "./../Components/home/FeaturedProducts";
import Categories from "../Components/home/Categories";
import Collection from "../Components/home/Collection";
import NewArrival from "../Components/home/NewArrival";
import HomeTop from "../Components/home/HomeTop";
import NavMenuDesktop from "../Components/common/NavMenuDesktop";
import NavMenuMobile from "../Components/common/NavMenuMobile";
import HomeTopMobile from "../Components/home/HomeTopMobile";
import FooterDesktop from "../Components/common/FooterDesktop";
import FooterMobile from "../Components/common/FooterMobile";

class Homepage extends Component {
    render() {
        return (
            <Fragment>
                <div className="Desktop">
                    <NavMenuDesktop/>
                    <HomeTop/>
                </div>
                <div className="Mobile">
                    <NavMenuMobile/>
                    <HomeTopMobile/>
                </div>

                <FeaturedProduct/>
                <NewArrival/>
                <Collection/>
                <Categories/>
                
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

export default Homepage;