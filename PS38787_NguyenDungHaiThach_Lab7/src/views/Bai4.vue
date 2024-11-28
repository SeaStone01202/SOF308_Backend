<script setup>
import { ref, reactive } from "vue";

const isLoggedIn = ref(false); 
const currentUser = reactive({
  name: "",
});

const binhLuan = ref("");
const listComment = reactive([]);

const loginForm = reactive({
  username: "",
  password: "",
});

function login() {
  if (loginForm.username === "admin" && loginForm.password === "123456") {
    isLoggedIn.value = true; 
    currentUser.name = loginForm.username;
    loginForm.username = "";
    loginForm.password = "";
  } else {
    alert("Thông tin đăng nhập không hợp lệ!");
  }
}

function addComment() {
  if (binhLuan.value.trim()) {
    listComment.push({
      name: currentUser.name,
      text: binhLuan.value,
    });
    binhLuan.value = ""; 
  } else {
    alert("Vui lòng nhập nội dung bình luận!");
  }
}
</script>

<template>
  <div class="container mt-5">
    <!-- Form đăng nhập -->
    <div v-if="!isLoggedIn" class="login-form">
      <h3>Đăng nhập</h3>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label for="username" class="form-label">Tên đăng nhập:</label>
          <input
            v-model="loginForm.username"
            type="text"
            id="username"
            class="form-control"
            placeholder="Nhập tên đăng nhập"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Mật khẩu:</label>
          <input
            v-model="loginForm.password"
            type="password"
            id="password"
            class="form-control"
            placeholder="Nhập mật khẩu"
          />
        </div>
        <button type="submit" class="btn btn-primary">Đăng nhập</button>
      </form>
    </div>

    <!-- Hiển thị nội dung bài viết và bình luận -->
    <div v-else>
      <h3 class="mt-3">Bình luận bài viết</h3>
      <div class="card">
        <img class="card-img" src="../assets/images/eat-clean.png" alt="" />
        <h3 class="mt-2 ms-3 me-3">8 loại rau củ quả giàu canxi</h3>
        <p class="mt-2 ms-3 me-3">
          Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ
          sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất. Có 8 loại rau củ giàu canxi, ...
        </p>
      </div>
      <br />
      <form @submit.prevent="addComment">
        <h4 class="mb-3">Bình luận bài viết tại đây</h4>
        <textarea
          v-model="binhLuan"
          class="border border-1 rounded-2 w-100"
          placeholder="Nhập bình luận..."
        ></textarea>
        <button
          type="submit"
          class="bg-success p-2 rounded-2 text-light border-0"
        >
          Gởi Bình luận
        </button>
      </form>
      <h5 class="mt-3">Danh sách các bình luận:</h5>
      <div>
        <ul class="mt-3">
          <li v-for="(comment, index) in listComment" :key="index">
            <b>{{ comment.name }}:</b> {{ comment.text }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
