import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    place: []
}

export const placeSlice = createSlice({
    name: 'place',
    initialState,
    reducers: {
        place: (state, action) => {
            state.place = action.payload
        }
    }
})

export const { place } = placeSlice.actions;
export default placeSlice.reducer;