import React, {Component,Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from 'axios';
import ApiURL from '../../api/ApiURL';

class Collection extends Component {
    constructor(){
        super();
        this.state={
            ProductData:[]
        }
    }
    componentDidMount(){
        axios.get(ApiURL.ProductListByRemark('SPECIAL')).then(response=>{
           this.setState({ProductData:response.data});
        }).catch()
    }
    render() {
        const MyList = this.state.ProductData;
        const MyView = MyList.map((ProductData,i)=>{
            return  <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6} >

            <Link to="/productDetails">
            <Card className="card text-center w-100  image-box ">
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
                <Container  className="text-center bg-white card-body shadow-sm py-5 BetweenTwoSection" fluid={true}>
                    <h4 className="section-title ">SPECIAL COLLECTION</h4>
                    <h6 className="section-sub-title pb-3">Some Of Our Exclusive Collection, You May Like</h6>
                    <Row >
                        {MyView}

                    </Row>
                </Container>


            </Fragment>
        );
    }
}

export default Collection;