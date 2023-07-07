<script setup lang="ts">
import IconWeather from '@/components/icons/IconWeather.vue'
import moment from 'moment';
const props = defineProps({
    tomorrow:{
        type:Boolean
    },
    forecast:{
        type:Object,
        required:true
    }
})
</script>

<template>
    <div class="weather_forecast px-3 py-5 text-center bg-secondary flex flex-col">
        <div class="flex flex-col">
            <span class="text-lg">{{ tomorrow ? 'Tomorrow' :  moment(forecast.dt_txt).format('dddd Do MMM')}}</span>
            <span class="text-md text-yellow-500">{{ forecast.weather[0].main }}</span>
        </div>
        <IconWeather :weather="forecast.weather[0].main"/>
        <div class="flex justify-around mt-auto">
            <!-- max temp -->
            <span class="text-md lg:text-sm">{{ forecast.main.temp_max }} °C</span>
            <!-- min temp -->
            <span class="text-md lg:text-sm">{{forecast.main.temp_min}}°C</span>
        </div>
        
    </div>
</template>

<style></style>