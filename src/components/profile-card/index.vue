<template>
  <Suspense>
    <template #default>
      <profile-card-main />
    </template>
    <template #fallback>
      <profile-card-skeleton />
    </template>
  </Suspense>
</template>

<script>
import ProfileCardMain from "./main";
import ProfileCardSkeleton from "./skeleton";

export default {
  components: {
    ProfileCardMain,
    ProfileCardSkeleton,
  },
};
</script>

<style lang="scss" scoped></style>
