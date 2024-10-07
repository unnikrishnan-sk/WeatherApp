import { feedback_icon, humidity_homelogo, location_icon, notification_icon, precipitation, rate_icon, settings_icon, share_icon, splash_1, splash_2, splash_3, splash_4, sunset_homelogo, wind_homelogo } from "../assets";

export const splashData = [{ id: 0, image: splash_1, title: "Detailed Hourly Forecast", desc: "Get in - depth weather information." }, { id: 1, image: splash_2, title: "Real-Time Weather Map", desc: "Watch the progress of the precipitation to stay informed" }, { id: 2, image: splash_3, title: "Weather Around the World", desc: "Add any location you want and swipe easily to change" }, { id: 3, image: splash_4, title: "Detailed Hourly Forecast", desc: "Get in - depth weather information" }]

export const timewiseForcastData = [{ id: 0, time: '01:00', image: precipitation, climate: '29*' }, { id: 1, time: '02:00', image: wind_homelogo, climate: '26*' }, { id: 2, time: '04:00', image: humidity_homelogo, climate: '23*' }, { id: 3, time: '05:00', image: precipitation, climate: '28*' }, { id: 4, time: '06:00', image: precipitation, climate: '29*' }, { id: 5, time: '09:00', image: sunset_homelogo, climate: '29*' }]

export const daywiseForcastData = [{ id: 0, day: 'Today', image: precipitation, high: '86*', low: '67*' }, { id: 1, day: 'Thursday', image: wind_homelogo, high: '83*', low: '74*' }, { id: 2, day: 'Friday', image: wind_homelogo, high: '79*', low: '69*' }, { id: 3, day: 'Saturday', image: humidity_homelogo, high: '85*', low: '72*' }, { id: 4, day: 'Wednesday', image: wind_homelogo, high: '79*', low: '69*' }]

export const detailsForcastData = [{ id: 0, text: 'Feels like', value: '76' }, { id: 1, text: 'Humidity', value: '63%' }, { id: 2, text: 'Visibility', value: '10 mi' }, { id: 3, text: 'UV Index', value: 'Low 0' }, { id: 4, text: 'Dew point', value: '56*' }]

export const profileLocationData = [{ id: 0, image: location_icon, place: 'Chennai, TN', climate: '29C', text: 'Clear' }, { id: 1, image: location_icon, place: 'New Delhi, IND', climate: '39C', text: 'Partly cloudy' }]

export const toolsData = [{ id: 0, image: notification_icon, text: 'Notifications' }, { id: 1, image: settings_icon, text: 'Settings' }, { id: 2, image: feedback_icon, text: 'Send feedback' }, { id: 3, image: rate_icon, text: 'Rate this app' }, { id: 4, image: share_icon, text: 'Share your weather' }]

export const precipitationData = [{ id: 0, day: 'SUN', date: 'SEP 12', image: precipitation, text: 'Thunderstorms', wind: 'ssw 11 km/h', climate: '33C / 28C', precipitation: '30%' }, { id: 1, day: 'SUN', date: 'SEP 12', image: precipitation, text: 'Thunderstorms', wind: 'ssw 11 km/h', climate: '33C / 28C', precipitation: '30%' }]

export const weekData = [{ id: 0, name: 'SUN' }, { id: 1, name: 'MON' }, { id: 2, name: 'TUE' }, { id: 3, name: 'WED' }, { id: 4, name: 'THU' }, { id: 5, name: 'FRI' }, { id: 6, name: 'SAT' }]

export const precipData = [{ id: 0, name: '30%' }, { id: 1, name: '0%' }, { id: 2, name: '40%' }, { id: 3, name: '50%' }, { id: 4, name: '50%' }, { id: 5, name: '50%' }, { id: 6, name: '40%' }]

export const foreChartDetails = [{ id: 0, name: '12' }, { id: 1, name: '13' }, { id: 2, name: '14' }, { id: 3, name: '15' }, { id: 4, name: '16' }, { id: 5, name: '17' }, { id: 6, name: '18' }, { id: 6, name: '19' }]

export const chartData = [{ value: 20, frontColor: '#8A8C8F' }, { value: 40, frontColor: '#B4B5B9' }, { value: 30, frontColor: '#8A8C8F' }, { value: 50, frontColor: '#B4B5B9' }, { value: 38, frontColor: '#8A8C8F' }, { value: 30, frontColor: '#8A8C8F' }, { value: 15, frontColor: '#B4B5B9' }]

export const tabBarData = [{ id: 0, title: "Today", route: "today" }, { id: 1, title: "Forecast", route: "forecast" }, { id: 2, title: "Precipitation", route: "precipitation" },]

export const forecastData = [{ id: 0, image: precipitation, week: 'SUN', climate: '33C' }, { id: 1, image: precipitation, week: 'MON', climate: '33C' }, { id: 2, image: precipitation, week: 'TUE', climate: '34C' }, { id: 3, image: precipitation, week: 'WED', climate: '35C' }, { id: 4, image: precipitation, week: 'THU', climate: '32C' }, { id: 5, image: precipitation, week: 'FRI', climate: '32C' }, { id: 6, image: precipitation, week: 'SAT', climate: '33C' }]

export const forecastChartData = [{ value: 1, frontColor: '#60636D' }, { value: 1, frontColor: '#60636D' }, { value: 1, frontColor: '#60636D' }, { value: 1, frontColor: '#F1B188' }, { value: 1, frontColor: '#60636D' }, { value: 1, frontColor: '#60636D' }, { value: 1, frontColor: '#60636D' }, { value: 1, frontColor: '#60636D' }, { value: 1, frontColor: '#60636D' }, { value: 1, frontColor: '#F1B188' }, { value: 1, frontColor: '#60636D' }, { value: 1, frontColor: '#60636D' }, { value: 1, frontColor: '#60636D' }, { value: 1, frontColor: '#60636D' }, { value: 1, frontColor: '#60636D' }, { value: 1, frontColor: '#60636D' }]

export const dropDetails = [{ id: 0, image: precipitation, climate_c: '30C', climate_f: '68F', time: '1 AM' }, { id: 1, image: precipitation, climate_c: '31C', climate_f: '68F', time: '2 AM' }, { id: 2, image: precipitation, climate_c: '32C', climate_f: '69F', time: '3 AM' }, { id: 3, image: precipitation, climate_c: '32C', climate_f: '70F', time: '4 AM' }, { id: 4, image: precipitation, climate_c: '29C', climate_f: '71F', time: '5 AM' }, { id: 5, image: precipitation, climate_c: '31C', climate_f: '71F', time: '6 AM' }]