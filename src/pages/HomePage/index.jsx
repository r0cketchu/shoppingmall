import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/products/product.slice';
import CardSkeleton from '../HomePage/card-skeleton/CardSkeleton'; 
import FiltersCategory from '../HomePage/filters-category/FiltersCategory'; 
import CountProducts from '../HomePage/CountProducts'; 
import CardItem from '../HomePage/card-item/CardItem'; 
import { addToCart } from '../../store/cart/cart.slice'; 
import styles from '../HomePage/card-list/CardList.module.css'; 

const HomePage = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state: any) => state.products); 
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="page">
      <div className="container">
        <h1>Products</h1>

        <FiltersCategory />
        <CountProducts />
    
        <div className={styles.cardList}>
          {isLoading ? (
            Array(4)
              .fill(0)
              .map((_, index) => <CardSkeleton key={index} />)
          ) : (
            products.map((product: any) => (
              <CardItem 
                key={product.id}
                product={product}
                addToCart={() => dispatch(addToCart(product))}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
