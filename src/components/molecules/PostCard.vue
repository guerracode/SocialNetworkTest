<template>
  <article class="container">
    <base-card>
      <user-post-header
        :id="id"
        :name="userName"
        :date="date"
        :imgUrl="userImageUrl"
      />

      <figure>
        <img :src="postImageUrl" alt="post" />
      </figure>
      <div class="text-container">
        <p>
          {{ text }}
        </p>
      </div>

      <base-button v-if="!post" @click="handleClick()"
        >Comment ({{ commentsNumber }})</base-button
      >
    </base-card>
  </article>
</template>

<script>
import UserPostHeader from '../atoms/UserPostHeader.vue';

export default {
  props: {
    id: String,
    text: String,
    date: String,
    userName: String,
    postImageUrl: String,
    userImageUrl: String,
    commentsNumber: Number,
    post: Boolean,
  },
  components: {
    UserPostHeader,
  },
  methods: {
    handleClick() {
      this.$router.push(`/posts/${this.id}`);
    },
  },
};
</script>

<style scoped>
.container {
  margin-bottom: 20px;
}

figure {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  margin: 20px 0;
}

figure img {
  position: absolute;
  top: -100%;
  right: -100%;
  bottom: -100%;
  left: -100%;
  margin: auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.text-container {
  margin: 20px 0;
}
.text-container p {
  font-size: 1.5rem;
}
</style>