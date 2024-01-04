import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/lib/persistStore"
import categoriesReducer from './categories/categoriesSlice';
import productsReducer from './products/productsSlice';
import recommendedReducer from './recommended/recommendedSlice';
import cartReducer from './cart/cartSlice';

//reducers

const reducers = combineReducers({
    recommended: recommendedReducer,
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store);