import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { fetchProducts } from '../../../store/productsSlice'; 
import CardSkeleton from '../CardSkeleton'; 
import CardItem from '../CardItem'; 
import styles from './CardList.module.css';


const CardList = () => {
    const dispatch = useDispatch();
    const { products, isLoading, category } = useSelector((state) => state.productsSlice);

    useEffect(() => {
        if (category) {
            dispatch(fetchProducts(category.toLowerCase())); 
        }
    }, [category, dispatch]); 
    if (isLoading) {
        return <CardSkeleton />; 
    }

    return (
        <ul className={styles.card_list}>
            {products.map((item) => (
                <CardItem key={item.id} item={item} /> 
            ))}
        </ul>
    );
}

export default CardList;