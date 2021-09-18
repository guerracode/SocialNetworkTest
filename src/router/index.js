import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/templates/Home.vue';
// import Post from '../components/templates/Post.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/posts/:id',
  //   name: 'Post',
  //   component: Post
  // }
  {
    path: '/posts/:id',
    name: 'Post',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../components/templates/Post.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
