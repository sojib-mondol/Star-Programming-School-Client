import React, { } from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import {  } from '../../contexts/AuthProvider/AuthProvider';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {

     
    return (
        <div>
            <Header></Header>
            <Container>
                <Outlet></Outlet>
            </Container>
            
        </div>
    );
};

export default Main;