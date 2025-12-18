import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../features/reducers/counterReducer';
import { useDispatch, useSelector } from 'react-redux';
import {galleryApi} from "../features/galleryApi"
import {uiSlice} from "../features/uiSlice"


const store = configureStore({
    reducer: {
        [galleryApi.reducerPath]: galleryApi.reducer,
        counter: counterSlice.reducer,
        ui: uiSlice.reducer
    },
    middleware: (getDeaultMiddleware) =>
        getDeaultMiddleware().concat(galleryApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export default store;