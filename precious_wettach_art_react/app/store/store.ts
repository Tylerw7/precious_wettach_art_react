import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../features/reducers/counterReducer';
import { useDispatch, useSelector } from 'react-redux';
import {galleryApi} from "../features/galleryApi"
import {uiSlice} from "../features/uiSlice"
import {errorApi} from "../pages/about/errorApi"


const store = configureStore({
    reducer: {
        [galleryApi.reducerPath]: galleryApi.reducer,
        [errorApi.reducerPath]: errorApi.reducer,
        counter: counterSlice.reducer,
        ui: uiSlice.reducer
    },
    middleware: (getDeaultMiddleware) =>
        getDeaultMiddleware().concat(galleryApi.middleware, errorApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export default store;