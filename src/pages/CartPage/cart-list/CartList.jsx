import React from 'react'
import { useAppSelector } from '../../../hooks/redux';
import CartItem from './cart-item/CartItem'
import styles from './CartList.module.scss';

const CartList = () => {
    const { products } = useAppSelector((state) => state.cartSlice)
    return (
        <div className={styles.cart_list}>
            {products.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
        </div>
    )
}

export default CartList;