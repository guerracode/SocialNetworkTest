<template>
  <section class="post">
    <post-card
      :id="postData?.id"
      :text="postData?.text"
      :date="postData?.date"
      :postImageUrl="postData?.postImageUrl"
      :userName="postData?.userName"
      :userImageUrl="postData?.userImageUrl"
      :post="true"
    />
    <comments-box :comments="postData?.comments" :newComment="newComment" />
  </section>
</template>

<script>
import PostCard from '../molecules/PostCard.vue';
import CommentsBox from '../organisms/CommentsBox.vue';

// import data from '../../../util/data';

export default {
  mounted() {
    this.urlData = this.$route.params.id;
    this.localData = JSON.parse(localStorage.getItem('data'));
    this.postData = this.getPostData();
  },
  data() {
    return {
      urlData: '',
      postData: {},
      localData: [],
    };
  },
  methods: {
    getPostData() {
      return this.localData.filter((item) => item.id === this.urlData)[0];
    },
    newComment(message) {
      this.localData = this.localData.map((item) => {
        if (item.id === this.postData.id) {
          return {
            ...item,
            comments: [
              ...item.comments,
              {
                id: item.comments.length + 1,
                text: message,
              },
            ],
          };
        }
        return item;
      });
      this.postData = this.getPostData();
      localStorage.setItem('data', JSON.stringify(this.localData));
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

