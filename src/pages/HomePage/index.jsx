import React from "react";
import { fetchProduct } from '../../store/products/product.slice';
import styles from '../HomePage/card-list/CardList.module.css';
import CardItem from '../HomePage/card-item/CardItem';
import CardSkeleton from '../HomePage/card-skeleton/CardSkeleton';
import cartSlice from '../../store/cart/cart.slice';



const HomePage = () => {
    return (
        <div className = 'page'>
            <div className = 'container'>
            <h1>Products</h1>
            <FiltersCategory />
            <CountProducts />
            <CardList />
            <CardSkeleton />
        </div>
    </div>
    )
};

export default HomePage;
export { CardList, CardSkeleton };