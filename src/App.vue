<template>
  <main>
    <nav>
      <router-link to="/">Home</router-link>
    </nav>
    <router-view />
  </main>
</template>

<script>
import { grayLight } from '../util/colors';

export default {
  data() {
    return {
      grayLight,
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: 'Roboto', sans-serif;
  font-size: 62.5%;
}

body {
  background-color: #e1e1e1;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background: gray;
}

nav a {
  font-size: 2rem;
  color: white;
  text-decoration: none;
}
nav a:hover {
  color: rgb(225, 225, 225);
}

main {
  height: 100vh;
}
</style>
