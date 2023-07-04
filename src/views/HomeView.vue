<script setup lang="ts">
import { onMounted } from 'vue';

import TodaysWeather from '@/components/todays-weather/TodaysWeather.vue';
import WeatherForecast from '@/components/weather-forecast/WeatherForecast.vue';
import TodaysHighlight from '@/components/todays-highlight/TodaysHighlight.vue'

</script>

<template>
  <main class="lg:grid lg:grid-cols-3">
    <TodaysWeather/>
    <section class="col-span-2 col-start-2 py-14 px-6 lg:px-28">
      <div class="grid grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-9">
        <WeatherForecast v-for="n in 5"/>

      </div>

      <h3 class="text-3xl my-10">Todays Highlight</h3>

      <div class="grid gap-7 lg:grid-cols-2">
        <TodaysHighlight v-for="n in 4"/>        
      </div>
    </section>
  </main>
</template>
