<template>
  <div class="home">
    <p>Spaces left: {{ spacesLeft }} out of {{ capacity }}</p>
    <button @click="increaseCapacity">Increase Capacity</button>
    <h2>Attending</h2>
    <ul>
      <li v-for="(name, nameIdx) in attending" :key="nameIdx">
        {{ name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
export const capacity = ref(3);
export const attending = ref(["Tim", "Bob", "Joe"]);
export const spacesLeft = computed(() => {
  return capacity.value - attending.value.length;
});
export const increaseCapacity = () => (capacity.value += 1);
</script>
