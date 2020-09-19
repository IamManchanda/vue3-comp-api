<template>
  <div>
    <div v-if="error">There is an error: {{ error }}</div>
    <profile-card v-else />
  </div>
</template>

<script>
import { ref, onErrorCaptured } from "vue";
import ProfileCard from "@/components/profile-card";

export default {
  components: {
    ProfileCard,
  },
  setup() {
    const error = ref(null);
    onErrorCaptured(e => {
      error.value = e;
      return true;
    });
    return { error };
  },
};
</script>
