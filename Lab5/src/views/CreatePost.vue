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
        <button class="btn btn-primary">Đăng bài</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const emit = defineEmits(["post-added"]);
  
  const newPost = ref({
    title: "",
    author: "",
    content: "",
  });


  const addPost = () => {
    if (newPost.value.title && newPost.value.author && newPost.value.content) {
      emit("post-added", { ...newPost.value });
      newPost.value = { title: "", author: "", content: "" };
    } else {
      alert("Vui lòng điền đầy đủ thông tin!");
    }
  };
  </script>  

  
  <style scoped>
  .create-post {
    margin-bottom: 2rem;
  }
  </style>
  