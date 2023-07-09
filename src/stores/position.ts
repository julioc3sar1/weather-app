import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Location } from '@/models/location'

export const usePositionStore = defineStore('position', () => {
    const currentCoords = ref()
    const locations = ref<Location[]>([])

    function setCurrentCoords(lat?: number, lon?: number) {
        if (lat && lon) {
            currentCoords.value = { latitude: lat, longitude: lon }
        }
        else {
            navigator.geolocation.getCurrentPosition(
                function (pos) {
                    currentCoords.value = pos.coords
                }
            );
        }
    }

    async function getGeoLocations(query: string) {
        try {
            const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=fd2c23c730208645240acecf6a962629`);
            const result = await response.text();
            locations.value = JSON.parse(result)
            return JSON.parse(result)
        } catch (error) {
            return error
        }
    }

    return { currentCoords, locations, setCurrentCoords, getGeoLocations }
})