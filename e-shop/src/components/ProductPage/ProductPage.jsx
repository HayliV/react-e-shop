import React from "react";
import { useEffect, useState } from "react";
import { getProductById, favouriteProduct } from "../../services/products";
import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.scss";

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        getProductById(id).then((data) => setProduct(data));
    }, []);

    function addQuantity(event) {
        event.preventDefault();
        setQuantity(quantity + 1);
    }

    const removeQuantity = (event) => {
        event.preventDefault();
        setQuantity(quantity - 1);
    };

    const updateFavourite = async () => {
        await favouriteProduct(id);
    };

    return (
        <>
            {product && (
                <div className={styles.product}>
                    <div className={styles.product__left}>
                        <img
                            className={styles.product__img}
                            src={product.imageUrl}
                            alt={product.name}></img>
                    </div>
                    <div className={styles.product__right}>
                        <h2 className={styles.product__name}>{product.name}</h2>
                        <h3 className={styles.product__price}>
                            ${product.price}
                        </h3>
                        <p className={styles.product__description}>
                            {product.description}
                        </p>
                        <h2 className={styles.product__text}>
                            Quantity: {quantity}
                        </h2>
                    </div>
                    <div>
                        <button
                            className={styles.product__quantity}
                            onClick={removeQuantity}>
                            -
                        </button>
                        <button
                            className={styles.product__quantity}
                            onClick={addQuantity}>
                            +
                        </button>
                    </div>
                    <div className={styles.product__colour}>
                        <select className={styles.product__select}>
                            <option className={styles.product__option}>
                                {product.colour1}
                            </option>
                            <option className={styles.product__option}>
                                {product.colour2}
                            </option>
                            <option className={styles.product__option}>
                                {product.colour3}
                            </option>
                        </select>
                    </div>
                    {/* // add feedback for user */}
                    <button
                        className={styles.product__favourite}
                        onClick={updateFavourite}>
                        Favourite
                    </button>
                </div>
            )}
        </>
    );
};

export default ProductPage;
