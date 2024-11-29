<template>
  <div id="app">
    <Header @user-logout="handleLogout" />

    <router-view @user-login="handleLogin" 
                  @user-registered="addUser" 
                  @post-added="addPost" 
                  :listPost="listPost" 
                  @comment-added="addComment" 
                  :listComment="listComment"
                  @post-deleted="removePost"/>
  </div>
</template>

<script setup>
import { reactive, ref, provide, onMounted, watch } from "vue";
import Header from './components/header.vue'; // Import Header

const listUser = reactive([]);

const globalState = reactive({
  isLoggedIn: false,
});

provide('globalState', globalState);

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

onMounted(() => {
  if (!listUser.some(user => user.email === userAdmin.value.email)) {
    listUser.push(userAdmin.value);
  }

  const savedUsers = localStorage.getItem('listUser');
  const savedPosts = localStorage.getItem('listPost');
  const savedComments = localStorage.getItem('listComment');
  const savedIsLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
  const savedCurrentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (savedUsers) listUser.push(...JSON.parse(savedUsers));
  if (savedPosts) listPost.push(...JSON.parse(savedPosts));
  if (savedComments) listComment.push(...JSON.parse(savedComments));
  if (savedIsLoggedIn !== null) globalState.isLoggedIn = savedIsLoggedIn;
  if (savedCurrentUser) {
    currentUser.value = {
      ...savedCurrentUser,
    };
  }
});

watch(
  () => listUser,
  (newVal) => localStorage.setItem('listUser', JSON.stringify(newVal)),
  { deep: true }
);

watch(
  () => listPost,
  (newVal) => localStorage.setItem('listPost', JSON.stringify(newVal)),
  { deep: true }
);

watch(
  () => listComment,
  (newVal) => localStorage.setItem('listComment', JSON.stringify(newVal)),
  { deep: true }
);

watch(
  function() {
    return globalState.isLoggedIn;
  },
  function (newVal) {
    localStorage.setItem('isLoggedIn', JSON.stringify(newVal));

  },
  {deep: true}
);

watch(
  function() {
    return currentUser.value;
  },
  function (newVal) {
    localStorage.setItem('currentUser', JSON.stringify(newVal));
  },
  {deep: true}
);

function addUser(user) {
  if (listUser.some(existingUser => existingUser.email === user.email && existingUser.fullname === user.fullname)) {
    alert('User đã tồn tại');
    return;
  }
  
  listUser.push(user);
  console.log('Đăng ký thành công!');
}

function addComment(comment) {
  console.log('Nạp comment vào danh sách thành công!');
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
    globalState.isLoggedIn = true;
    currentUser.value = { 
      email: foundUser.email,
      fullname: foundUser.fullname,
      password: foundUser.password,
    };
    console.log('Đăng nhập thành công!');
  } else {
    globalState.isLoggedIn = false;
    console.log('Thông tin đăng nhập không chính xác');
  }
}

function handleLogout(data) {
  globalState.isLoggedIn = data;
  currentUser.value = {
    email: "",
    fullname: "",
    password: "",
  };
  console.log('Đăng xuất thành công!');
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
