import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    climate: {}
}

export const climateSlice = createSlice({
    name: 'climate',
    initialState,
    reducers: {
        setClimate: (state, action) => {
            state.climate = action.payload
        }
    }
})

export const { setClimate } = climateSlice.actions;
export default climateSlice.reducer;