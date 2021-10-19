import React from 'react';
import { Carousel } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://image.shutterstock.com/image-photo/modern-hospital-sign-clear-blue-260nw-139886506.jpg"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSezS8qSszXmrL8ZsW162CiwwN0vgzgDCvMGg&usqp=CAU"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTVSb84c0VsYokdmOJQGqOnJINRpZ11clVtg&usqp=CAU"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Header;