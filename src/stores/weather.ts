import { defineStore } from "pinia";

export const useWeatherStore = defineStore('weather', () => {

    async function getCurrentWeather(lat: number, lon: number) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=fd2c23c730208645240acecf6a962629`);
            const result = await response.text();
            return JSON.parse(result)
        } catch (error) {
            // console.error(error);
            return error
        }
    }

    async function getWeatherForecast(lat: number, lon: number) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=fd2c23c730208645240acecf6a962629`);
            const result = await response.text();
            return JSON.parse(result)
        } catch (error) {
            // console.error(error);
            return error
        }
    }

    return { getCurrentWeather, getWeatherForecast }
})