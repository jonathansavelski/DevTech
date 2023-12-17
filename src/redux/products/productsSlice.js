import { createSlice } from "@reduxjs/toolkit";
import { Products, TotalProducts } from "../../data";

const INITIAL_STATE = {
    products: Products,
    totalProducts: TotalProducts,
    selectedProduct: null,
}

// export const productsSlice = createSlice({
//     name: 'products',
//     initialState: INITIAL_STATE,
//     reducers: {
//         getProducts: state => {
//             return state
//         }
//     }
// });

export const productsSlice = createSlice({
    name: 'products',
    initialState: INITIAL_STATE,
    reducers: {
        selectProduct: (state, action) => {
            return {
                ...state,
                selectedProduct:
                    action.payload !== state.selectedProduct ? action.payload : null,
            };
        },
        products: state => {
            return state;
        },
    },
});

// export const { getProducts } = productsSlice.actions;
export const { products, selectProduct } = productsSlice.actions;

export default productsSlice.reducer;