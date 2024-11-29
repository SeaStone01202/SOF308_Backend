<template>
  <div id="app">
    <Header @user-logout="handleLogout" />

    <router-view @user-login="handleLogin" 
                  @user-registered="addUser" 
                  @post-added="addPost" 
                  :listPost="listPost" 
                  @comment-added="addComment" 
                  :listComment="listComment"
                  @post-deleted="removePost"
                  @user-edit="editUser"/>
  </div>
</template>

<script setup>
import { reactive, ref, provide, onMounted, watch } from "vue";
import Header from './components/header.vue'; // Import Header
import { useRouter } from 'vue-router';

const router = useRouter();

const listUser = reactive([]);

const globalState = reactive({
  isLoggedIn: false,
});

provide('globalState', globalState);

const listPost = reactive([]);
const listComment = reactive([]);

const userAdmin = reactive({
  email: "admin@gmail.com",
  fullname: "admin",
  password: "123",
});

const currentUser = reactive({
  email: "",
  fullname: "",
  password: "",
});

provide('currentUser', currentUser);

onMounted(() => {
  // Kiểm tra nếu userAdmin đã tồn tại trong danh sách trước khi thêm
  if (!listUser.some(user => user.email === userAdmin.email)) {
    listUser.push(userAdmin);
  }

  // Đồng bộ dữ liệu từ localStorage, tránh thêm user đã tồn tại
  const savedUsers = JSON.parse(localStorage.getItem('listUser')) || [];
  const uniqueUsers = savedUsers.filter(
    savedUser => !listUser.some(user => user.email === savedUser.email)
  );
  listUser.push(...uniqueUsers);

  const savedPosts = JSON.parse(localStorage.getItem('listPost')) || [];
  const savedComments = JSON.parse(localStorage.getItem('listComment')) || [];
  const savedIsLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
  const savedCurrentUser = JSON.parse(localStorage.getItem('currentUser'));

  listPost.push(...savedPosts);
  listComment.push(...savedComments);

  if (savedIsLoggedIn !== null) globalState.isLoggedIn = savedIsLoggedIn;

  if (savedCurrentUser) {
    Object.assign(currentUser, savedCurrentUser);
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
    return currentUser;
  },
  function (newVal) {
    localStorage.setItem('currentUser', JSON.stringify(newVal));
  },
  {deep: true}
);

function addUser(user) {
  if (listUser.some(existingUser => existingUser.email === user.email || existingUser.fullname === user.fullname)) {
    alert('User đã tồn tại');
    return;
  }
  
  listUser.push(user);
  console.log('Đăng ký thành công!');
  router.push('/login');

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
    currentUser.email = foundUser.email;
    currentUser.fullname = foundUser.fullname;
    currentUser.password = foundUser.password;
    console.log('Đăng nhập thành công!');
  } else {
    globalState.isLoggedIn = false;
    console.log('Thông tin đăng nhập không chính xác');
  }
}

function handleLogout(data) {
  globalState.isLoggedIn = false;

  currentUser.email = "";
  currentUser.fullname = "";
  currentUser.password = "";

  console.log('Đăng xuất thành công!');
}

function editUser(user) {
  // Tìm người dùng trong danh sách listUser
  const foundUser = listUser.find(existingUser => existingUser.email === user.email);

  if (foundUser) {
    // Cập nhật thông tin của người dùng
    foundUser.fullname = user.fullname;
    foundUser.password = user.password;

    // Đồng bộ với localStorage
    localStorage.setItem('listUser', JSON.stringify(listUser));
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    console.log('Thông tin người dùng đã được cập nhật');
  } else {
    console.log('Không tìm thấy người dùng để cập nhật');
  }
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
