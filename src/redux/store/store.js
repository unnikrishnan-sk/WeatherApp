import { configureStore } from "@reduxjs/toolkit";
import placeReducer from '../slice/placeSlice'
import climateReducer from "../slice/currentClimateSlice";
import precipitationReducer from '../slice/precipitationSlice';
import forecastReducer from '../slice/forecastSlice';
import forecastGraphReducer from '../slice/forecastGraphSlice';

export const store = configureStore({
    reducer: {
        place: placeReducer,
        climate: climateReducer,
        precipitation: precipitationReducer,
        forecast: forecastReducer,
        forecastGraph: forecastGraphReducer
    }
})