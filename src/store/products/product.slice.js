const initialState = {
    products: {},
    isLoading: false,
    error: "",
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.product = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.isLoading = false;
                state.error = action.payload
    })
},
})

export { fetchProduct };