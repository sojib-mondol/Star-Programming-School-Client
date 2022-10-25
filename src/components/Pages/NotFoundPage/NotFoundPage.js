import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <h2>404 Page not found. Please go back <Link to='/'>Home</Link></h2>
        </div>
    );
};

export default NotFoundPage;