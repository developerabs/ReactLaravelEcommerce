import axios from 'axios';
import React, {Component,Fragment} from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';
import {Link} from "react-router-dom";
import ApiURL from '../../api/ApiURL';
import FeaturedProductLoader from '../placeholder/FeaturedProductLoader';

class FeaturedProducts extends Component {
    constructor(){
        super();
        this.state={
            ProductData:[],
            isLoading:"TopSection",
            MainDiv:"d-none"
        }
    }
    componentDidMount(){
        axios.get(ApiURL.ProductListByRemark('FEATURED')).then(response=>{
           this.setState({ProductData:response.data,isLoading:"d-none",MainDiv:" "});
        }).catch()
    }
    render() {
        const MyList = this.state.ProductData;
        const MyView = MyList.map((ProductData,i)=>{
            return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >

            <Link to="/productDetails">
            <Card className="card w-100 image-box ">
                <img src={ProductData.image}/>
                <Card.Body>
                    <h5 className="product-name-on-card">{ProductData.title}</h5>
                    <p className="product-price-on-card">{ProductData.price} TK</p>
                </Card.Body>
            </Card>
            </Link>

        </Col>
        })
        return (
            <Fragment>
                <FeaturedProductLoader isLoading={this.state.isLoading} />
                <div className={this.state.MainDiv}>
                    <Container className="text-center BetweenTwoSection" fluid={true}>
                        <h4 className="section-title">FEATURED PRODUCTS</h4>
                        <h6 className="section-sub-title pb-3">Some Of Our Exclusive Collection, You May Like</h6>
                        <Row>
                            {MyView}
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default FeaturedProducts;