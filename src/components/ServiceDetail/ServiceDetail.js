import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = () => {
    let { serviceId } = useParams()
    const [serviceDetails, setServiceDetails] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/isratbiswas/json-file/main/_redirects')
            .then(res => res.json())
            .then(data => setServiceDetails(data))

    }, [])

    const newUser = serviceDetails.find(service => service.id === parseInt(serviceId));
    console.log(newUser)



    return (
        <div className='container'>
            <div className="details">
                <img src={newUser?.img} alt="" />
                <h5>{newUser?.name}</h5>
                <p>{newUser?.description}</p>
                <Link to='/home'>
                    <button className="btn">Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;