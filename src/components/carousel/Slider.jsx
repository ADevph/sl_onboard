import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';
import '../../css/Carousel.css';

const SliderSection = () => {
    const [AppProductList, setAppProductList] = useState([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Load products from JSON when the component mounts
    useEffect(() => {
        // Fetch the JSON file from the public folder using Axios
        axios.get('/Slider.json') // Directly using the path
            .then((response) => {
                setAppProductList(response.data);
            })
            .catch((error) => {
                console.error("Error fetching the slider data:", error);
            });
    }, []);

    // Update isMobile on screen resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Carousel
            style={{
                height: isMobile ? '170px' : '325px', 
                margin: 'auto', 
                background: 'white'
            }}
            className="container"
        >
            {AppProductList?.map((item, idx) => (
                <Carousel.Item style={{ height: isMobile ? '170px' : '250px' }} key={idx}>
                    <img
                        className="d-block object-fit-cover"
                        src={item?.ImageUrl}
                        alt={item?.Name}
                        width="100%"
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default SliderSection;
