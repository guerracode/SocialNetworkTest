<template>
  <div>
    <post-card
      v-for="res in data"
      :key="res?.id"
      :id="res?.id"
      :text="res?.text"
      :date="res?.date"
      :postImageUrl="res?.postImageUrl"
      :userName="res?.userName"
      :userImageUrl="res?.userImageUrl"
    ></post-card>
  </div>
</template>

<script>
import PostCard from '../molecules/PostCard.vue';
import data from '../../../util/data';

export default {
  data() {
    return {
      data,
    };
  },
  components: {
    PostCard,
  },
};
</script>

<style scoped>
</style>
