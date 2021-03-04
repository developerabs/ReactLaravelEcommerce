import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../Components/common/NavMenuDesktop";
import NavMenuMobile from "../Components/common/NavMenuMobile";
import UserOnboard from "../Components/common/UserOnboard";
import FooterDesktop from "../Components/common/FooterDesktop";
import FooterMobile from "../Components/common/FooterMobile";
import Contact from "../Components/common/Contact";
import { ToastContainer, toast } from 'react-toastify';

class ContactPage extends Component {

    componentDidMount() {
        window.scroll(0,0)
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

                <Contact/>

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

export default ContactPage;