import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { cryptoApi } from "../../services/cryptoApi";
import { cryptoNewsApi } from "../../services/cryptoNewsApi";

export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
        
    },
    //add the API in the middleware
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApi.middleware, cryptoNewsApi.middleware),
        
        
})