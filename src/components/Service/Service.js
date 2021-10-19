import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Service = (props) => {
    const { id, name, img, description } = props.service;
    const url = `/service/${id}`
    return (
        <div className="row-cols-3 cols-md-2 col-12  g-4 d-flex mt-10 service-container ">
            <Card style={{ width: '18rem', height: '38rem' }}>
                <Card.Img style={{ height: '26rem' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link to={url}>
                        <Button variant="primary">Learn more</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;