import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CourcesMain = () => {
    const cource = useLoaderData();
    //console.log(cource);
    const {details, title, thumbnail_url, _id, price} = cource;
    

    return (
        <div>
            <Container>
                <Row>
                    <Col lg="4" className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="8">
                        <div className='d-flex justify-content-center mt-5'>
                        <Card>
                            <Card.Header as="h5">
                                <Card.Img style={{ width: '250px' }} variant="top" src={thumbnail_url} />
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    {
                                        details.length > 250 ? 
                                        <>{details.slice(0, 250) + '...'} </>
                                        :
                                        details
                                    
                                    }
                                    
                                </Card.Text>
                                <Card.Text>
                                   <h4 className='text-primary'>Price: {price}</h4>
                                </Card.Text>
                                {/* <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text> */}
                                <Link to={`/cources/${_id}`}><Button variant="outline-primary">Get premium access</Button></Link>
                            </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default CourcesMain;