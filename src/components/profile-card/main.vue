<template>
  <div class="profile-card">
    <div class="profile-image">
      <img class="profile-image__border" src="@/assets/img-border.png" />
      <img class="profile-image__img" :src="userData.pic" />
    </div>
    <div class="profile-info">
      <span> Written By </span>
      <h3>{{ userData.name }}</h3>
      <p>{{ userData.bio }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

const loadUserData = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: "Harry Manchanda",
        pic:
          "https://pbs.twimg.com/profile_images/1304626535161192448/v2KU2WTu_400x400.jpg",
        bio: "Software Engineer / Full-stack Web Developer.",
      });
    }, 1000);
  });
};

export default {
  async setup() {
    const userData = ref(await loadUserData());
    return { userData };
  },
};
</script>
