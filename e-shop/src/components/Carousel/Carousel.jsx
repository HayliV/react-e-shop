import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./Carousel.module.scss";

export const CarouselItem = ({ children, width }) => {
    return (
        <div className={styles.carousel__item} style={{ width: width }}>
            {children}
        </div>
    );
};

const Carousel = ({ children }) => {
    const [activeSlide, setActiveSlide] = useState(0);

    const updateSlide = (newSlide) => {
        if (newSlide < 0) {
            newSlide = React.Children.count(children) - 1;
        } else if (newSlide >= React.Children.count(children)) {
            newSlide = 0;
        }

        setActiveSlide(newSlide);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            updateSlide(activeSlide + 1);
        }, 4000);
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });

    return (
        // carousel implementation
        // add firebase data to 5kl
        <div className={styles.carousel}>
            <div
                className={styles.carousel__inner}
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>
            <div className={styles.indicators}>
                <button
                    className={styles.indicators__button}
                    onClick={() => {
                        updateSlide(activeSlide - 1);
                    }}>
                    Previous
                </button>

                <button
                    className={styles.indicators__button}
                    onClick={() => {
                        updateSlide(activeSlide + 1);
                    }}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Carousel;
