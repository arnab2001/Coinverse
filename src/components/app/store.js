import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { cryptoApi } from "../../services/cryptoApi";

export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        
    },
    //add the API in the middleware
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApi.middleware),
})