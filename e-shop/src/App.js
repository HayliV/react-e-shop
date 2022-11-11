import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Carousel, { CarouselItem } from "./components/Carousel/Carousel";
import { useEffect, useState } from "react";
import { getFeatured, getProducts } from "./services/products";
import ProductList from "./containers/ProductList/ProductList";
import ProductPage from "./components/ProductPage/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    const [featured, setFeatured] = useState([]);

    useEffect(() => {
        getFeatured().then((featured) => setFeatured(featured));
    }, []);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <Intro />
                                <Carousel>
                                    {featured.map((featuredData) => (
                                        <CarouselItem>
                                            {
                                                <div className={styles.Card}>
                                                    <img
                                                        className={styles.img}
                                                        src={
                                                            featuredData.imageUrl
                                                        }
                                                        alt={
                                                            featuredData.name
                                                        }></img>
                                                </div>
                                            }
                                        </CarouselItem>
                                    ))}
                                </Carousel>
                                <ProductList />
                            </>
                        }
                    />
                    <Route
                        path="/product/:id"
                        element={
                            <>
                                <Header />
                                <ProductPage />
                            </>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
