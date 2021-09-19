<template>
  <div ref="scrollComponent">
    <post-card
      v-for="res in data"
      :key="res?.id"
      :id="res?.id"
      :text="res?.text"
      :date="res?.date"
      :postImageUrl="res?.postImageUrl"
      :userName="res?.userName"
      :userImageUrl="res?.userImageUrl"
      :commentsNumber="res?.comments.length"
      ref="scrollComponent"
    ></post-card>
  </div>
</template>

<script>
import PostCard from '../molecules/PostCard.vue';
import dataExample from '../../../util/data';
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  components: {
    PostCard,
  },
  setup() {
    const getPosts = (page) => {
      const realPage = page - 1;
      return dataExample.slice(realPage * 10, realPage * 10 + 10);
    };

    const fillData = () => {
      const localData = localStorage.getItem('data');
      if (!localData) {
        localStorage.setItem('data', JSON.stringify(dataExample));
        const postData = getPosts(1);
        return postData;
      } else {
        return JSON.parse(localData);
      }
    };

    const data = ref(fillData(1));
    const scrollComponent = ref(null);

    const loadMorePosts = () => {
      const nextPage = data.value.length / 10 + 1;
      console.log('++Next Page', nextPage);
      const newPosts = getPosts(nextPage);
      data.value.push(...newPosts);
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    const handleScroll = () => {
      let element = scrollComponent.value;
      if (element.getBoundingClientRect().bottom < window.innerHeight) {
        loadMorePosts();
        console.log('--Load More');
      }
    };

    return {
      data,
      scrollComponent,
    };
  },
};
</script>

<style scoped>
.observe {
  height: 20px;
  background: red;
}
</style>
