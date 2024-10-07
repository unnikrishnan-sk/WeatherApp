import { APIkey } from "../constants/apikey"

export const baseUrl = 'https://api.weatherapi.com/v1'

export const endpoints = {
    forecast: '/forecast.json',
    key: APIkey,
    place: 'Trivandrum',
    forecastDays: 5,
    airQuality: 'yes',
    alerts: 'no'
}