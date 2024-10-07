import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    forecastGraph: []
}

export const forecastGraphSlice = createSlice({
    name: 'forecastgraph',
    initialState,
    reducers: {
        setForecastgraph: (state, action) => {
            state.forecastGraph = action.payload
        }
    }
})

export const { setForecastgraph } = forecastGraphSlice.actions;
export default forecastGraphSlice.reducer;