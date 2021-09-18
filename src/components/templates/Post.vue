<template>
  <section class="post">
    <post-card
      :text="postData?.text"
      :date="postData?.date"
      :postImageUrl="postData?.postImageUrl"
      :userName="postData?.userName"
      :userImageUrl="postData?.userImageUrl"
      :post="true"
    />
    <comments-box :comments="postData?.comments" />
  </section>
</template>

<script>
import PostCard from '../molecules/PostCard.vue';
import CommentsBox from '../organisms/CommentsBox.vue';

import data from '../../../util/data';

export default {
  mounted() {
    this.urlData = this.$route.params.id;
    this.postData = this.getPostData();
  },
  data() {
    return {
      urlData: '',
      postData: {},
    };
  },
  methods: {
    getPostData() {
      return data.filter((item) => item.id === this.urlData)[0];
    },
  },
  components: {
    PostCard,
    CommentsBox,
  },
  name: 'Post',
};
</script>

<style scoped>
.post {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  gap: 30px;
  justify-content: center;
  align-items: center;
}
</style>

