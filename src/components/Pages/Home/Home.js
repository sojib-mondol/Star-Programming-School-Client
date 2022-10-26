import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="6">
                        <h1 className='font-weight-bold mt-5 text-primary'>Learn to Code <br/> for Passion</h1>
                        <h6 className='mt-5 text-secondary p-2'>Learn to code with our beginner-friendly tutorials and examples. Read interactive tutorials, and write and test your code to learn programming.</h6>
                        <h4 className='mt-5 text-secondary'>Get the latest tutorials and updates</h4>
                        <h5 className='mt-3 border p-2 rounded border-primary shadow '><Link className='ps-3' style={{textDecoration: 'none', fontWeight: 'bold'}} to='/register'>Please Register</Link></h5>
                    </Col>
                    
                    <Col lg="6">
                        <Image fluid src='https://cdn-icons-png.flaticon.com/512/988/988053.png?w=740&t=st=1666811099~exp=1666811699~hmac=24af80f1b57811099ca44e45e047cb65e9c1c1cb15bc012be5240a7d3e515f53'></Image>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;