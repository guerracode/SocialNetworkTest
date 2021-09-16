<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['mode'],
};
</script>

<style scoped>
button {
  display: block;
  width: 100%;
  padding: 0.75rem 1.5rem;
  margin: 10px auto;
  font-family: inherit;
  background-color: #e1e1e1;
  border: 1px solid #e1e1e1;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  color: black;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #575757;
  color: white;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>