<template>
  <div class="container">
    <figure><img :src="imgUrl" alt="User" /></figure>
    <div>
      <h5>{{ name }}</h5>
      <p>{{ date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    date: String,
    imgUrl: String,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 70px;
}

.container figure {
  height: 55px;
  width: 55px;
  margin: 5px 0;
  border-radius: 50%;
  overflow: hidden;
}
.container figure img {
  height: 100%;
}

.container div {
  margin: 5px 20px;
}
.container div h5 {
  font-weight: bold;
  font-size: 1.7rem;
}
.container div p {
  color: grey;
  font-size: 1.2rem;
}
</style>