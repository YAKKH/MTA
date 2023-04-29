import { configureStore } from '@reduxjs/toolkit'
import usernameReducer from "./features/username/usernameSlice";
import isSentReducer from "./features/isSent/isSentSlice"
export const store = configureStore({
    reducer: {
        username: usernameReducer,
        isSent: isSentReducer,
    },
})