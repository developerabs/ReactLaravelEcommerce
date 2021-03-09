import React, { Component, Fragment } from 'react';
import {Route, Switch } from 'react-router';
import Homepage from '../Pages/Homepage';
import UserOnboardPage from "../Pages/UserOnboardPage";
import ContactPage from "../Pages/ContactPage";
import PurchasePage from "../Pages/PurchasePage";
import PolicyPage from "../Pages/PolicyPage";
import RefundPage from "../Pages/RefundPage";
import AboutPage from "../Pages/AboutPage";
import ProductDetailsPage from "../Pages/ProductDetailsPage";
import NotificationPage from "../Pages/NotificationPage";
import FavouritePage from "../Pages/FavouritePage";
import ProductListByCategory from "../Pages/ProductListByCategory";
import ProductListBySubCategory from "../Pages/ProductListBySubCategory";

class AppRoute extends Component {
    render() {
        return (
           <Fragment>
               <Switch>
                   <Route exact path="/" component={Homepage} />
                    <Route exact path="/onboard" component={UserOnboardPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/purchase" component={PurchasePage}/>
                    <Route exact path="/policy" component={PolicyPage}/>
                    <Route exact path="/refund" component={RefundPage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/productDetails" component={ProductDetailsPage}/>
                    <Route exact path="/notification" component={NotificationPage}/>
                    <Route exact path="/favourite" component={FavouritePage}/>
                    <Route exact path="/ProductListByCategory/:Category" render={(props) => <ProductListByCategory {...props} key={Date.now()}/>}/>
                    <Route exact path="/ProductListBySubCategory/:Category/:SubCategory" render={(props) => <ProductListBySubCategory {...props} key={Date.now()}/>}/>
               </Switch>
           </Fragment>
        );
    }
}

export default AppRoute;