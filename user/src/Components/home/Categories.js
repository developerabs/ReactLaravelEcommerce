import React, {Component,Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import axios from 'axios';
import ApiURL from "../../api/ApiURL";

class Categories extends Component {
    constructor(){
        super();
        this.state = {
            MenuData:[],
        }
    }
    componentDidMount(){
        axios.get(ApiURL.SendCategoryDetails).then(response=>{
            this.setState({MenuData:response.data});
        }).catch(error=>{

        })
    }
    render() {
        const MyList = this.state.MenuData;
        const MyView = MyList.map((ParentList,i)=>{
            return  <Col className="p-0" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
            <Card className="h-100 w-100 text-center">
                <Card.Body>
                    <img className="w-75"src={ParentList.ParentCategoryImg}/>
                    <h5 className="category-name">{ParentList.ParentCategoryName}</h5>
                </Card.Body>
            </Card>
        </Col>
        })
        return (
            <Fragment>
                <Container className="text-center pt-3  BetweenTwoSection" fluid={true}>
                    <h4 className="section-title">CATEGORIES</h4>
                    <h6 className="section-sub-title pb-3">Some Of Our Exclusive Collection, You May Like</h6>
                    <Row>
                            
                        {MyView}
                         
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default Categories;