<script setup lang="ts">
const weatherImages :any= {
    // "Sunny" : "sunny.png",
    "Clouds": "clouds.png",
    "Rain": "rain.png",
    "Clear": "sunny.png"
}
const props = defineProps({
    weather:{
        type:String,
        required: true
    }
})
</script>
<template>
    <div class="my-5">
        <img :src="`./src/assets/img/${weatherImages[weather]}`" alt="" class="mx-auto max-w-[50%]">
    </div>
</template>