import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: "Charlotte",
}
export const usernameSlice = createSlice({
    name: 'username',
    initialState,
    reducers: {
        updateName: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.username = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { updateName } = usernameSlice.actions

export default usernameSlice.reducer