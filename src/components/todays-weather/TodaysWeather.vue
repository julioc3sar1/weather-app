<script setup lang="ts">
import moment from 'moment'
import IconWeather from '../icons/IconWeather.vue';
import { usePositionStore } from '@/stores/position';
import IconLocation from '@/components/icons/IconLocation.vue'
import IconPosition from '@/components/icons/IconPosition.vue'
const positionStore = usePositionStore()

const props = defineProps({
    weather:{type: Object, required: true}
})

</script>

<template>
    <div class="todays_weather text-center bg-secondary pb-20 min-h-[100vh] w-full md:w-[33%] md:fixed md:pb-0 md:h-full">
        <div class="p-10 flex justify-between [&>button]:bg-slate-500">
            <button class="px-3 py-2 hover:bg-slate-600" @click="$emit('openNav')">Search for places</button>
            <button class="rounded-full p-3 hover:bg-slate-600" @click="positionStore.setCurrentCoords()">
                <IconPosition/>
            </button>
        </div>
    
        <div class="todays_weather_images relative min-h-[250px] bg-opacity-30 overflow-hidden">
            <img src="@/assets/img/clouds.png" alt="" class="w-[40%] absolute opacity-10 z-10 top-0 left-[-18%]">
            <img src="@/assets/img/clouds.png" alt="" class="w-[50%] absolute opacity-10 z-10 bottom-0 left-[-22%]">
            <img src="@/assets/img/clouds.png" alt="" class="w-[33%] absolute opacity-10 z-10 top-[10%] right-[-12%]">
            <img src="@/assets/img/clouds.png" alt="" class="w-[33%] absolute opacity-10 z-10 bottom-[0%] right-[-3%]">
            <IconWeather :weather="weather?.weather[0].main"/>
        </div>

        <div class="todays_weather_temp my-4 lg:my-auto">
            <span class="degrees_number text-7xl md:text-6xl lg:text-7xl">{{weather?.main?.temp||'-'}}</span>
            <span class="degrees_unit text-4xl">°C</span>
        </div>

        <div class="text-3xl my-10 lg:my-10">{{weather?.weather[0]?.main }}</div>

        <div class="mb-7">
            <span>Today </span>
            <span>{{moment().format("MMM Do YY")}}</span>
        </div>

        <div class="flex items-center justify-center">
            <IconLocation class="mr-2"/>
            <span>{{weather?.name}} - {{ weather?.sys?.country }}</span>
        </div>
    </div>
</template>

<style>

</style>