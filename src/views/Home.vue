<template>
  <div class="home">
    <p>Capacity: {{ capacity }}</p>
    <button @click="increaseCapacity">Increase Capacity</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
export const capacity = ref(0);
export const increaseCapacity = () => (capacity.value += 1);
</script>
