<template>
  <div class="container">
    <div class="comments">
      <comment
        v-for="res in comments"
        :key="res?.id"
        :text="res?.text"
        :commentColor="grayLight"
      />
    </div>
    <div class="input">
      <base-input
        v-bind:value="message"
        v-on:input="message = $event.target.value"
        placeholder="Type your comment"
        :inputColor="grayLight"
      />
      <button
        @click="
          newComment(this.message);
          this.message = '';
        "
      >
        SEND
      </button>
    </div>
  </div>
</template>

<script>
import Comment from '../atoms/Comment.vue';
import BaseInput from '../atoms/BaseInput.vue';
import { grayLight } from '../../../util/colors';

export default {
  data() {
    return {
      message: '',
      grayLight,
    };
  },
  props: {
    comments: Array,
    newComment: Function,
  },
  components: {
    Comment,
    BaseInput,
  },
  methods: {},
};
</script>,
    BaseButton

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 40%;
  min-width: 300px;
  max-width: 400px;
  padding: 10px 15px;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.comments {
  flex: 1;
  padding: 5px;
  overflow: auto;
  border-radius: 12px;
  margin-bottom: 5px;
}

.input {
  display: flex;
  align-items: center;
  border-top: 1px solid gray;
  height: 90px;
}

.input button {
  padding: 10px;
  margin: 5px;
  background: v-bind(grayLight);
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  cursor: pointer;
}

.input button:hover {
  background-color: gray;
  color: white;
}
</style>
