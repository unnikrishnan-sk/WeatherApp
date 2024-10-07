import { humidity_homelogo, precipitation, wind_homelogo } from "../assets";

export const handleClimateImage = (climate) => {

    let image;

    if (climate <= 24.7) image = humidity_homelogo
    else if (climate >= 24.7 && climate < 28) image = precipitation
    else if (climate >= 28) image = wind_homelogo

    return image;
}

export const aqiIndex = (index) => {
    let remark = "";
    if (index <= 50) remark = "Good"
    else if (index > 51 && index <= 100) remark = "Moderate"
    else if (index > 101 && index <= 200) remark = "Unhealthy"
    else if (index > 201 && index <= 300) remark = "Very Unhealthy"
    else if (index > 300) remark = "Hazardous"

    return remark;
}

export const aqiIndexRemarks = (text) => {
    let remark = "";
    if (text === "Good") remark = "You have good air quality - enjoy your outdoor activities"
    else if (text === "Moderate") remark = "Your air quality is satisfactory - there may be risk for people sensitive to air pollution"
    else if (text === "Unhealthy") remark = "Your air quality is Unhealthy - there are risk for people sensitive to air pollution"
    else if (text === "Very Unhealthy") remark = "Your air quality is Very Unhealthy - try not to get affected with the contaminated air"
    else if (text === "Hazardous") remark = "Your air quality is Hazardous - try to be at your home with doors and windows closed"

    return remark;
}

export const calculateAverage = (data) => {
    const total = data.reduce((sum, item) => sum + item.low, 0);
    return (total / data.length).toFixed(1);
};
