import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://star-programmers-server.vercel.app/couces-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h2>Our Cources</h2>
            <div className='mt-4'>
                {
                    categories.map(category => 
                    <p  className='border p-2 rounded shadow ' key={category.id}>
                        <Link style={{textDecoration: 'none', color:'blue'}} to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;