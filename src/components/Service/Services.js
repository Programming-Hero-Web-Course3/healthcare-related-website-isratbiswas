import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2 className="mt-5 mb-5 fw-bold">Welcome To City Hospital</h2>
            <p>City Hospital Limited is the newest hospital one of the largest Bangladeshi health care provider. The hospital is a 150 beds and tertiary care facility, delivering international standard health care at an affordable price to the peoples of Bangladesh.</p>
            <div className="container">
                <div className="row row-cols-3 row-cols-md-3  g-4 d-flex mt-10">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;