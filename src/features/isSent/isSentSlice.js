import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    isSent: false,
}

export const isSentSlice = createSlice({
    name: 'isSent',
    initialState,
    reducers: {
        updateSendStatus: (state) => {
            state.isSent = !state.isSent
        }
    }
})

export const { updateSendStatus } = isSentSlice.actions;
export default isSentSlice.reducer;
