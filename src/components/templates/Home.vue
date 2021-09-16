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
  background: rgb(233, 233, 233);
  min-height: 100vh;
  padding: 20px;
}
</style>
