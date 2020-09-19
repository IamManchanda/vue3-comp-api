<template>
  <div>
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
import useEventSpace from "@/use/event-space";
export const {
  capacity,
  attending,
  spacesLeft,
  increaseCapacity,
} = useEventSpace();
</script>

<style lang="scss"></style>
