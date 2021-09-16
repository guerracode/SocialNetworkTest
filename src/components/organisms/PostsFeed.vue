<template>
  <div>
    <post-card></post-card>
    <post-card></post-card>
    <post-card></post-card>
  </div>
</template>

<script>
import PostCard from '../molecules/PostCard.vue';

export default {
  components: {
    PostCard,
  },
};
</script>

<style scoped>
div {
  display: grid;
}
</style>
