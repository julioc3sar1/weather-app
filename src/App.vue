<script setup lang="ts">
import { onMounted, onBeforeMount } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import {usePositionStore} from '@/stores/position'
const store = usePositionStore()

onBeforeMount(() => {
  store.setCurrentCoords()
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>