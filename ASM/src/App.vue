<template>
  <div id="app">
    <router-view @user-login="handleLogin" 
                  @user-registered="addUser" 
                  @post-added="addPost" 
                  :listPost="listPost" 
                  @user-logout="handleLogout" 
                  @comment-added="addComment" 
                  :listComment="listComment"
                  @post-deleted="removePost"/>
  </div>
</template>

<script setup>
import { reactive, ref, provide } from "vue";

const listUser = reactive([]);

const isLoggedIn = ref(false);
provide('isLoggedIn', isLoggedIn);

const listPost = reactive([]);

const listComment = reactive([]);

const userAdmin = ref({
  email: "admin@gmail.com",
  fullname: "admin",
  password: "123",
});

const currentUser = ref({
  email: "",
  fullname: "",
  password: "",
});
provide('currentUser', currentUser);

function addUser(user) {
  if (listUser.some(existingUser => existingUser.email === user.email && existingUser.fullname === user.fullname)) {
    alert('User đã tồn tại');
    return;
  }
  
  listUser.push(user); 
  console.log('Đăng ký thành công!');
}

function addComment(comment) {
  console.log('Nạp comment vào danh sách thành công !');
  listComment.push(comment);
}

function removePost(postId) {
    const index = listPost.findIndex(post => post.id === postId);
    if (index !== -1) {
        listPost.splice(index, 1);
        console.log(`Đã xóa bài viết với ID: ${postId}`);
    } else {
        console.log(`Không tìm thấy bài viết với ID: ${postId}`);
    }
}


function handleLogin(user) {
  const foundUser = listUser.find(existingUser => existingUser.email === user.email && existingUser.password === user.password);

  if (foundUser) {
    isLoggedIn.value = true;
    currentUser.value = { 
      email: foundUser.email,
      fullname: foundUser.fullname,
      password: foundUser.password,
    };
    console.log('Đăng nhập thành công!');
  } else {
    isLoggedIn.value = false;
    console.log('Thông tin đăng nhập không chính xác');
  }
}

function handleLogout(check) {
  console.log('Đăng xuất');
  isLoggedIn.value = check;
}

function addPost(post) {
  console.log('Post added: ', post);
  listPost.push({
    ...post,
  });
  console.log('Bài viết đã được thêm: ', post);
}
</script>

<style>
</style>
