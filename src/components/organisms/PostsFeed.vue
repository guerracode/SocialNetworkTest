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
import dataExample from '../../../util/data';

export default {
  data() {
    return {
      data: [],
    };
  },
  components: {
    PostCard,
  },
  methods: {
    fillData() {
      const localData = localStorage.getItem('data');
      if (!localData) {
        const filledData = Array(10)
          .fill(dataExample)
          .map((item, index) => ({
            ...item,
            id: index.toString(),
          }));

        localStorage.setItem('data', JSON.stringify(filledData));
        this.data = filledData;
      } else {
        this.data = JSON.parse(localData);
      }
    },
  },
  mounted() {
    this.fillData();
  },
};
</script>

<style scoped>
</style>
