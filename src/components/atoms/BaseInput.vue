<template>
  <input type="text" />
</template>

<script>
export default {
  props: ['inputColor'],
};
</script>

<style scoped>
input {
  width: 100%;
  height: 50px;
  padding: 10px;
  border-radius: 20px;
  font-size: 1.5rem;
  outline: none;
  border: 2px solid v-bind(inputColor);
}

input::placeholder {
  color: rgb(181, 180, 180);
  opacity: 1;
}

input:active,
input:hover,
input:focus {
  border-color: rgb(172, 172, 172);
}
</style>
