import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './features/modal/modalSlice';
import competitorReducer from './features/competitors/competitorsSlice';

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        competitor: competitorReducer
    }
});