<template>
    <div class="create-post">
      <h2>Tạo bài viết mới</h2>
      <form @submit.prevent="addPost">
        <div class="mb-3">
          <label for="title" class="form-label">Tiêu đề:</label>
          <input v-model="newPost.title" id="title" type="text" class="form-control" placeholder="Nhập tiêu đề" />
        </div>
        <div class="mb-3">
          <label for="author" class="form-label">Tác giả:</label>
          <input v-model="newPost.author" id="author" type="text" class="form-control" placeholder="Nhập tên tác giả" />
        </div>
        <div class="mb-3">
          <label for="content" class="form-label">Nội dung:</label>
          <textarea v-model="newPost.content" id="content" class="form-control" placeholder="Nhập nội dung"></textarea>
        </div>
        <button class="btn btn-primary" >Đăng bài</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from "vue";
  
  const emit = defineEmits(["post-added"]);
  
  const newPost = reactive({
    title: "",
    author: "",
    content: "",
    react: 0
  });

  function addPost() {
    if (newPost.title && newPost.author && newPost.content) {
      emit("post-added", newPost);
      newPost.title = "";
      newPost.author = "";
      newPost.content = "";
      newPost.react = 0;
    } else {
      alert("Vui lòng điền đầy đủ thông tin!");
    }
  }
  </script>  

  
  <style scoped>
  .create-post {
    margin-bottom: 2rem;
  }
  </style>
  