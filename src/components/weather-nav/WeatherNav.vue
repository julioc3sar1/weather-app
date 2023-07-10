<script setup lang="ts">
import {ref} from 'vue'
import {usePositionStore} from '@/stores/position'
import { useWeatherStore } from '@/stores/weather';
import type { Location } from '@/models/location'

const props = defineProps({
    isActive:{type:Boolean, required:true}
})

const weatherStore = useWeatherStore()
const positionStore = usePositionStore()
const search = ref('')

const emit = defineEmits(['closeNav'])

function showWeatherLocation(location:Location){
    // weatherStore.getCurrentWeather(location.lat, location.lon)
    positionStore.setCurrentCoords(location.lat, location.lon)
    emit('closeNav')
    
}

function findLocations(){
    if(search.value.length>0) positionStore.getGeoLocations(search.value)
}
</script>

<template>
    <div 
    class="weather_nav bg-secondary min-h-[100vh] fixed left-[-100%] min-w-full md:h-full md:min-w-[33%] md:w-[33%] md:left-[-100%] transition-all px-4 py-6 lg:pb-0 md:p-10 z-20"
    :class="{'!left-0':isActive}"
    >
        <div class="text-right">
            <button type="button" @click="$emit('closeNav')">
                <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff"><path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>                
            </button>
        </div>
        <div class="flex py-8">
            <input id="search" v-model="search" autocomplete="off" placeholder="Search location" type="text" class="flex-1 bg-transparent border border-white h-12 mr-2 px-3" @keyup.enter="findLocations()">
            <button type="button" class="bg-blue-600 px-4" @click="findLocations()">Search</button>
        </div>
        <ul v-if="positionStore.locations.length>0">
            <li 
            v-for="location in positionStore.locations" 
            class="py-4 cursor-pointer hover:text-yellow-500 font-medium"
            @click="showWeatherLocation(location)"
            >
                {{`${location.name} - ${location.state || null} - ${location.country}`}}
            </li>
        </ul>
        <p v-else class="text-center">You have no recent searches</p>
    </div>
</template>