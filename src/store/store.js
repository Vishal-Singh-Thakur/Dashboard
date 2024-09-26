// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sidebarSlice';

const Store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});

export default Store;
