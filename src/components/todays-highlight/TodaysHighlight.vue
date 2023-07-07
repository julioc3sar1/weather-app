<script setup lang="ts">
const props = defineProps({
    title: {type: String, required: true},
    value: {type:Number},
    humidity:{type:Number},
    windStatus:{type: Boolean}
})

const HighlightUnits:any = {
    "Humidity":"%",
    "Wind status": "mph",
    "Visibility": "miles",
    "Air pressure": "mb"
}
</script>

<template>
    <div class="todays_highlight px-3 py-5 text-center bg-secondary">
        <span class="text-xl">{{title}}</span>
        <div class="my-5">
            <span class="text-5xl mr-1">{{humidity||value||'N/A' }}</span>
            <span class="text-3xl">{{HighlightUnits[title]}}</span>
        </div>
        <div class="humidity px-[15%]" v-if="props.humidity">
            <div class="flex justify-between">
                <span>0</span>
                <span>50</span>
                <span>100</span>
            </div>
            <div class="humidity_bar rounded bg-slate-400 h-2 after:rounded after:bg-yellow-300 after:h-2 after:block" :class="`after:w-[${humidity}%]`">
                
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