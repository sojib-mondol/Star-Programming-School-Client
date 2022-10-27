import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const cources = useLoaderData();
    console.log(cources);
    const {title, details, image_url, category_id} = cources;

    return (
        <div>
            <h2> This is our check out section</h2>
            <Card >
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <Link >
            <Button variant="primary">Continue Course</Button>
          </Link>
        </Card.Body>
      </Card>
        </div>
    );
};

export default Checkout;