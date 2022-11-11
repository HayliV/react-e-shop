import React from "react";
import styles from "./ProductCard.module.scss";
import { NavLink } from "react-router-dom";
const ProductCard = ({ productData }) => {
    return (
        <div className={styles.Card}>
            <div>
                <div>
                    <img
                        className={styles.Card__img}
                        src={productData.imageUrl}
                        alt={productData.name}></img>
                    <div>
                        <div className={styles.Card__centred}>
                            <h2 className={styles.Card__title}>
                                {productData.name} ${productData.price}
                            </h2>
                        </div>
                        <div className={styles.Card__centred}>
                            <NavLink
                                className={styles.Card__link}
                                to={`product/${productData.id}`}>
                                See More
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
