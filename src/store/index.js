import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user/user.slice';
import cartSlice from './cart/cart.slice';

export const store = configureStore({
    reducer: {
        orderSlice,
        cartSlice,
        productSlice,
        productSlice,
        categoriesSlice,
        userSlice,
    }
});

export default store;