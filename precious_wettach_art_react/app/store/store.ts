import {legacy_createStore } from '@reduxjs/toolkit'
import counterReducer from '../features/reducers/counterReducer';



const configureTheStore = () => {
    return legacy_createStore(counterReducer)
}


export default configureTheStore;