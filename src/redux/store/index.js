import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../reducer/productSlice';
import userReducer from '../reducer/userSlice';

export default configureStore({
  reducer: {
    products: productReducer,
    user: userReducer,
  },
});
