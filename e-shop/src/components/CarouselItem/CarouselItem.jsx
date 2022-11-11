import styles from "./CarouselItem.module.scss";
import { getFeatured, getProducts } from "../../services/products";
import { useEffect, useState } from "react";

const CarouselItem = ({ width }) => {
    const [featured, setFeatured] = useState([]);

    useEffect(() => {
        getFeatured().then((featured) => setFeatured(featured));
    }, []);

    return (
        <div className={styles.carousel__item} style={{ width: width }}>
            {featured.map((featuredData) => (
                <img src={featuredData.imageUrl} alt={featuredData.name}></img>
            ))}
        </div>
    );
};

export default CarouselItem;
