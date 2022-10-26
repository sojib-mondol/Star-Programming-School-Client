import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Cources = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="4" className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="8">
                        {/* <CourcesMain></CourcesMain> */}
                        {/* <h2>This is main cources ils section</h2>
                        <h2>Name: {cource?.author?.name}</h2> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Cources;