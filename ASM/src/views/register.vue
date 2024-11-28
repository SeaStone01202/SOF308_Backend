<script setup>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
import { reactive, inject, onMounted } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoggedIn = inject('isLoggedIn'); // Nhận trạng thái đăng nhập từ parent component

const emit = defineEmits(["user-registered"]);

const newUser = reactive({
  email: '',
  fullname: '',
  password: '',
});
function goToHome() {
    router.push('/index');
  }

function register() {
  if (!newUser.email || !newUser.password || !newUser.fullname) {
    alert('Vui lòng điền đầy đủ thông tin!');
    return;
  }
  
  emit("user-registered", { ...newUser });
  router.push('/login');

}
</script>

<template>
  <div>
    <Header></Header>

    <main class="content-background d-flex justify-content-center align-items-center" style="min-height: 80vh;">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-5">
            <div class="card shadow-lg">
              <div class="card-body p-5">
                                  <!-- Kiểm tra nếu người dùng đã đăng nhập -->
                                  <div v-if="isLoggedIn">
                    <h3 class="text-center mb-4">Bạn đã đăng nhập rồi!</h3>
                    <p class="text-center">
                      Bạn đã đăng nhập thành công và không cần phải đăng nhập lại.
                    </p>
                    <div class="d-flex justify-content-center">
                      <button class="btn btn-secondary" @click="goToHome">Về trang chủ</button>
                    </div>
                  </div>
                  <div v-else>

                <h3 class="text-center mb-4">Đăng Ký</h3>
                
                <form @submit.prevent="register">
                  <div class="mb-3">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" v-model="newUser.email" class="form-control" id="email" placeholder="Nhập email của bạn" required>
                  </div>
                  <div class="mb-3">
                    <label for="fullname" class="form-label">Họ và Tên:</label>
                    <input type="text" v-model="newUser.fullname" class="form-control" id="fullname" placeholder="Nhập họ và tên" required>
                  </div>
                  <div class="mb-3">
                    <label for="password" class="form-label">Mật khẩu:</label>
                    <input type="password" v-model="newUser.password" class="form-control" id="password" placeholder="Nhập mật khẩu" required>
                  </div>
                  <button type="submit" class="btn btn-primary w-100">Đăng Ký</button>
                </form>
                <hr class="my-4">
                <p class="text-center">Đã có tài khoản? <a href="/login" class="text-decoration-none">Đăng nhập ngay</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer></Footer>
  </div>
</template>
