export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (thunkAPI) => {
    try {
       const response = await axios.get(
            'https://fakestoreapi.com/products/${id}'
        );
    
    return response.data;
} catch (e) {
    return thunkAPI.rejectWithValue('Error loading products');
    }
}
);

export { fetchProduct };