import { configureStore } from '@reduxjs/toolkit'
import usernameReducer from "./features/username/usernameSlice";
import isSentReducer from "./features/isSent/isSentSlice"
import accountReducer from "./features/account/accountSlice";
export const store = configureStore({
    reducer: {
        username: usernameReducer,
        isSent: isSentReducer,
        account: accountReducer
    },
})