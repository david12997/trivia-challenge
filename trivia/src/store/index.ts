import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

//slice reducers import
import triviaGameReducer from './trivia.game';

import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux"; 

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['trivia'], // Add the slices you want to persist here
};

const rootReducer = combineReducers({
    // Add your slices here
    trivia: triviaGameReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;