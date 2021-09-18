<template>
  <div class="home">
    <posts-feed></posts-feed>
  </div>
</template>

<script>
import PostsFeed from '../organisms/PostsFeed.vue';
export default {
  components: {
    PostsFeed,
  },
  name: 'Home',
};
</script>

<style scoped>
.home {
  padding: 20px;
}
</style>
