import axios from 'axios';
import React, {Component,Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import SliderHome from "./SliderHome";
import ApiURL from "../../api/ApiURL";

class HomeTopMobile extends Component {
    constructor(){
        super();
        this.state = {
            MenuData:[],
            SliderData:[]
        }
    }
    componentDidMount(){
         // Slider Info
         axios.get(ApiURL.SendSliderInfo).then(response=> {
            this.setState({SliderData:response.data,isLoading:"d-none",MainDiv:" "})
        }).catch(error=> {

        });
    }
    render() {
        return (
            <Fragment>
                <Container className="p-0 TopSection overflow-hidden" fluid={true}>
                    <Row className="p-0 m-0 overflow-hidden">
                        <Col className="p-0 m-0 overflow-hidden" lg={12} md={12} sm={12}>
                            <SliderHome data={this.state.SliderData}/>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default HomeTopMobile;