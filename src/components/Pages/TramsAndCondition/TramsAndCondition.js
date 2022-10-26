import React from 'react';
import { Link } from 'react-router-dom';

const TramsAndCondition = () => {
    return (
        <div>
            <h3>Here is our Trams And Condition.</h3>
            <p>Please go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TramsAndCondition;