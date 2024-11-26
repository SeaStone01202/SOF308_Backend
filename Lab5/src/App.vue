<template>
  <div id="app">
    <CreatePost @post-added="addPost" />
    <PostList :posts="posts" />
  </div>
</template>

<script setup>
import { reactive } from "vue";
import CreatePost from "./views/CreatePost.vue";
import PostList from "./views/PostList.vue";

const posts = reactive([]);

function addPost(post) {
  console.log(post);
  posts.push({
    ...post,
    style: { color: "blue", fontStyle: "normal" },
    classes: "default-class",
  });
}
</script>

<style>
#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}
</style>
