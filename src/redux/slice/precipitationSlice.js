import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    precipitation: []
}

export const precipitationSlice = createSlice({
    name: 'precipitation',
    initialState,
    reducers: {
        setPrecipitation: (state, action) => {
            state.precipitation = action.payload
        }
    }
})

export const { setPrecipitation } = precipitationSlice.actions;
export default precipitationSlice.reducer;