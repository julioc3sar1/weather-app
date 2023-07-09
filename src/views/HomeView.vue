<script setup lang="ts">
import { ref, watch, computed } from 'vue';

import TodaysWeather from '@/components/todays-weather/TodaysWeather.vue';
import WeatherForecast from '@/components/weather-forecast/WeatherForecast.vue';
import TodaysHighlight from '@/components/todays-highlight/TodaysHighlight.vue'
import WeatherNav from '@/components/weather-nav/WeatherNav.vue'

import {useWeatherStore} from '@/stores/weather'
import { usePositionStore } from '@/stores/position';

import type {Forecast} from '@/models/forecast'

const  weatherStore = useWeatherStore()
const positionStore = usePositionStore()

const weather = ref()
const forecast = ref<Forecast>({} as Forecast)
const navIsActive = ref(false)
const coords = ref (positionStore.currentCoords)

watch(
  () => positionStore.currentCoords,
  (coords, prevCoords) => {
    weatherStore.getCurrentWeather(coords.latitude, coords.longitude).then(
      res => weather.value = res,
      )

    weatherStore.getWeatherForecast(coords.latitude, coords.longitude).then(
      res => {
        forecast.value = res
      }
    )
  }
)

const forecastDays = computed(() => forecast?.value?.list?.filter((el:any) => el.dt_txt.includes('06:00:00')))
</script>

<template>
  <WeatherNav :isActive="navIsActive" @closeNav="navIsActive = false"/>
  <main class="md:grid md:grid-cols-3">
    <TodaysWeather :weather="weather" @openNav="navIsActive=true"/>
    <section class="col-span-2 col-start-2 py-14 px-6 lg:px-28">
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-9">
        <WeatherForecast v-for="(forecast,index) in forecastDays" :forecast="forecast" :tomorrow="index == 0"/>
      </div>

      <h3 class="text-3xl my-10">Todays Highlight {{ coords }}</h3>

      <div class="grid gap-7 md:grid-cols-2">
        <TodaysHighlight title="Wind status" :value="weather?.wind?.speed"/>        
        <TodaysHighlight title="Humidity" :humidity="weather?.main?.humidity"/>        
        <TodaysHighlight title="Visibility" :value="weather?.visibility"/>        
        <TodaysHighlight title="Air pressure" :value="weather?.main?.pressure"/>
      </div>
    </section>
  </main>
</template>
