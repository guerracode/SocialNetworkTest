<template>
  <div>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: ['text', 'commentColor'],
};
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  min-height: 50px;
  margin-bottom: 7px;
  padding: 10px;
  background: v-bind(commentColor);
  color: black;
  border-radius: 12px;
  font-size: 1.5rem;
}
</style>
