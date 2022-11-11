import React from "react";

import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { getProducts } from "../../services/products";
import styles from "./ProductList.module.scss";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((products) => setProducts(products));
    }, []);

    return (
        <section className={styles.List}>
            {products.map((productData) => (
                <ProductCard key={productData.id} productData={productData} />
            ))}
        </section>
    );
};

export default ProductList;
