import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./redux/counter/userslice"

export default configureStore({
    reducer: {
        user: userReducer
      }
})