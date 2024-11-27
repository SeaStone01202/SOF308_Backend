<template>
  <div id="app">
    <router-view @user-login="handleLogin" @user-registered="addUser" @post-added="addPost" :listPost="listPost" @user-logout="handleLogout"/>
    <!-- <Header  /> -->
  </div>
</template>

<script setup>
import { reactive, ref, provide } from "vue";
import managerBlog from "./views/managerBlog.vue";
import Header from "./components/header.vue";

// Danh sách người dùng
const listUser = reactive([]);

// Trạng thái đăng nhập
const isLoggedIn = ref(false);
provide('isLoggedIn', isLoggedIn);

const listPost = reactive([]);

// Người dùng admin mặc định để kiểm tra đăng nhập
const userAdmin = ref({
  email: "admin@gmail.com",
  fullname: "admin",
  password: "123",
});

// Thông tin người dùng hiện tại
const currentUser = ref({
  email: "",
  fullname: "",
  password: "",
});
provide('currentUser', currentUser);  // Cung cấp currentUser cho các component con

// Thêm người dùng vào danh sách khi đăng ký
function addUser(user) {
  // Kiểm tra nếu email đã tồn tại
  if (listUser.some(existingUser => existingUser.email === user.email && existingUser.fullname === user.fullname)) {
    alert('User đã tồn tại');
    return;
  }
  
  listUser.push(user); // Thêm người dùng vào danh sách
  console.log('Đăng ký thành công!');
}

// Hàm xử lý đăng nhập
function handleLogin(user) {
  // Kiểm tra xem người dùng có trong danh sách người dùng hay không
  const foundUser = listUser.find(existingUser => existingUser.email === user.email && existingUser.password === user.password);

  if (foundUser) {
    isLoggedIn.value = true;
    currentUser.value = {  // Gán thông tin người dùng vào currentUser
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


// Hàm xử lý đăng xuất
function handleLogout(check) {
  console.log('Đăng xuất');
  isLoggedIn.value = check;
}

// Hàm thêm bài viết
function addPost(post) {
  console.log('Post added: ', post);
  listPost.push({
    ...post,  // Thêm bài viết vào danh sách
  });
  console.log('Bài viết đã được thêm: ', post);
}
</script>

<style>
</style>
