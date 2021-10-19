import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img src='https://img.freepik.com/free-vector/error-404-page-found-website-404-web-failure-oops-trouble-internet-warning-design_41737-576.jpg?size=626&ext=jpg' alt="" />
            <NavLink className='nav-link' to="/home">
                <button className="bg-dark text-light p-2 mt-3">Back To Home</button>
            </NavLink>
        </div>
    );
};

export default NotFound;