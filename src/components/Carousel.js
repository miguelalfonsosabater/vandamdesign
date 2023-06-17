import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ items, handleItemClick }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    const visibleItems = () => {
        if (window.innerWidth <= 768) {
            // Mobile view: show one item at a time
            return items.slice(currentIndex, currentIndex + 1);
        }
        // Desktop view: show three items at a time
        if (currentIndex + 2 >= items.length) {
            return [
                items[items.length - 1],
                items[0],
                items[1],
            ];
        }
        return items.slice(currentIndex, currentIndex + 3);
    };

    return (
        <div className="carousel-container">
            <div className="carousel">
                {visibleItems().map((item, index) => (
                    <div key={index} className="carousel-item">
                        <img
                            alt=''
                            src={item.logo}
                            className='imageCarousel'
                            onClick={() => handleItemClick(item)}
                        />
                    </div>
                ))}
            </div>
            <button className="prev-button" 
            onClick={handlePrev}
            >
                ◀
            </button>
            <button className="next-button" 
            onClick={handleNext}
            >
                ▶
            </button>
        </div>
    );
};

export default Carousel;
