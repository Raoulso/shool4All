import { configureStore } from '@reduxjs/toolkit';
//import counterSlice from './counterSlice';
import counterReducer  from "./counterSlice";

export default configureStore({
  reducer: {
      counter: counterReducer
  }
})