import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    forecast: []
}

export const forecastSlice = createSlice({
    name: 'forecast',
    initialState,
    reducers: {
        setForecast: (state, action) => {
            state.forecast = action.payload
        }
    }
})

export const { setForecast } = forecastSlice.actions;
export default forecastSlice.reducer;