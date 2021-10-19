import React from 'react';

const Footer = () => {
    return (
        <div className="footer bg-dark py-3 mt-5">
            <footer>
                <div className="d-flex h3 mx-5 justify-content-center pt-3 pt-md-5 text-primary fw-bold fs-1">

                    <a href="https://facebook.com">
                        <i class="fab fa-facebook-f"></i>
                    </a>


                    <a className="mx-5" href="https://twitter.com">
                        <i class="fab fa-twitter"></i>
                    </a>


                    <a href="https://instagram.com">
                        <i className="fab fa-instagram px-3"></i>
                    </a>

                </div>
                <p className="m-3 text-light text-center"> City Hospital Limited ©  2021 || All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default Footer;