import React, {Component, Fragment} from 'react';
import {Breadcrumb, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class ListBySubCategory extends Component {
    render() {
        const MyList=this.props.ProductData;
        const Category=this.props.Category;
        const SubCategory=this.props.SubCategory;
        const MyView=MyList.map((ProductList,i)=>{
            return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
                    <Link to={"/productDetails/"+ProductList.product_code}>
                    <Card className="card h-100 w-100  image-box ">
                        <img src={ProductList.image}/>
                        <Card.Body>
                            <h5 className="product-name-on-card">{ProductList.title }</h5>
                            <p className="product-price-on-card">Price: { ProductList.price}TK</p>
                        </Card.Body>
                    </Card>
                    </Link>
                </Col>
        })
        return (
            <Fragment>
                <Container className="text-center TopSection" fluid={true}>
                    <Breadcrumb>
                        <Breadcrumb.Item> <Link to="/">Home</Link>    </Breadcrumb.Item>
                        <Breadcrumb.Item> <Link to={"/ProductListBySubCategory/"+Category+"/"+SubCategory}>{SubCategory}</Link>    </Breadcrumb.Item>
                    </Breadcrumb>
                    <h4 className="section-title">{SubCategory}</h4>
                    <Row>
                        {MyView}
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default ListBySubCategory;