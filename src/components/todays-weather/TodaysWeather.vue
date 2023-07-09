<script setup lang="ts">
import moment from 'moment'
import IconWeather from '../icons/IconWeather.vue';
import { usePositionStore } from '@/stores/position';

const positionStore = usePositionStore()
const weatherImages = {
    "Sunny" : "sunny.png"
}

const props = defineProps({
    weather:{type: Object, required: true}
})
</script>

<template>
    <div class="todays_weather text-center bg-secondary pb-20 min-h-[100vh] lg:fixed lg:pb-0 lg:h-full lg:min-w-[33%]">
        <div class="p-10 flex justify-between [&>button]:bg-slate-500">
            <button class="px-3 py-2 hover:bg-slate-600" @click="$emit('openNav')">Search for places</button>
            <button class="rounded-full p-3 hover:bg-slate-600" @click="positionStore.setCurrentCoords()">
                <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M12 19a7 7 0 100-14 7 7 0 000 14zM12 19v2M5 12H3M12 5V3M19 12h2" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button>
        </div>
    
        <div class="todays_weather_images relative overflow-x-hidden bg-opacity-30">
            <img src="@/assets/img/cloud-background.png" alt="" class="max-h-full max-w-[120%] absolute opacity-10 -z-10 left-10 right-10">
            <IconWeather :weather="weather?.weather[0].main"/>
            <!-- <img :src="`@/assets/img/${weatherImages[weather?.current?.condition.text]}`" alt="" class="m-auto z-10"> -->
        </div>

        <div class="todays_weather_temp my-4 lg:my-auto">
            <span class="degrees_number text-7xl md:text-8xl">{{weather?.main?.temp||'-'}}</span>
            <span class="degrees_unit text-4xl">°C</span>
        </div>

        <div class="text-3xl my-10 lg:my-10">{{weather?.weather[0]?.main }}</div>

        <div class="mb-7">
            <span>Today </span>
            <span>{{moment().format("MMM Do YY")}}</span>
        </div>

        <div class="flex items-center justify-center">
            <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff"><path d="M20 10c0 4.418-8 12-8 12s-8-7.582-8-12a8 8 0 1116 0z" stroke="#fff" stroke-width="1.5"></path><path d="M12 11a1 1 0 100-2 1 1 0 000 2z" fill="#fff" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <span>{{weather?.name}} - {{ weather?.sys?.country }}</span>
        </div>
    </div>
</template>

<style>
    /* .todays_weather_images{
        content: '';
        background-image: url('@/assets/img/cloud-background.png');
        background-position: center;
        background-repeat: no-repeat;
    } */
</style>