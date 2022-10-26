import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CourcesMain from '../CourcesMain/CourcesMain';
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
                        <CourcesMain></CourcesMain>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Cources;