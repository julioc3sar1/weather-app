<script setup lang="ts">
const props = defineProps({
    title: {type: String, required: true},
    humidity:{type:Number},
    windStatus:{type: Boolean}
})
</script>

<template>
    <div class="todays_highlight px-3 py-5 text-center bg-secondary">
        <span class="text-xl">Wind status</span>
        <div class="my-5">
            <span class="text-6xl">7</span>
            <span class="text-xl">mph</span>
        </div>
        <div class="humidity" v-if="props.humidity">
            <div class="flex justify-between">
                <span>0</span>
                <span>50</span>
                <span>100</span>
            </div>
            <div class="humidity_bar rounded bg-slate-400 h-2 after:rounded after:bg-yellow-300 after:w-6 after:h-2 after:block">
                
            </div>
            <div class="text-right">
                <span>%</span>
            </div>
        </div>
        <div class="wind_status" v-if="props.windStatus">
            <span></span>
            <span>WSW</span>
        </div>
        
    </div>
</template>

<style></style>