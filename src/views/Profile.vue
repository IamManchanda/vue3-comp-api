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
import ProfileCardMain from "@/components/profile-card/main";
import ProfileCardSkeleton from "@/components/profile-card/skeleton";

export default {
  components: {
    ProfileCardMain,
    ProfileCardSkeleton,
  },
};
</script>

<style lang="scss" scoped></style>
