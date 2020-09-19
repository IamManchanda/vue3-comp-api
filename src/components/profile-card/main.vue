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

<style lang="scss">
.profile-card {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: #fff;
  overflow: hidden;
  position: relative;
  min-height: 150px;

  .profile-image__img {
    width: 10%;
    height: auto;
    border-radius: 50%;
    position: absolute;
    top: 30px;
    left: 30px;
  }

  .profile-image__border {
    width: calc(10% + 20px);
    height: auto;
    position: absolute;
    top: 20px;
    left: 20px;
  }
}

.profile-info {
  width: 85%;
  float: right;
  padding-left: 10px;
  box-sizing: border-box;

  span {
    text-transform: uppercase;
    color: #666;
    letter-spacing: 3px;
  }

  h3 {
    margin: 10px 0;
    font-weight: 700;
    font-size: 1.5em;
    color: #222;
  }

  p {
    line-height: 140%;
    color: #666;
  }
}
</style>
