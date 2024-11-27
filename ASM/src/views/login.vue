<template>
    <div>
      <Header></Header>
  
      <main
        class="content-background d-flex justify-content-center align-items-center"
        style="min-height: 80vh;"
      >
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
  
                  <!-- Form đăng nhập nếu chưa đăng nhập -->
                  <div v-else>
                    <h3 class="text-center mb-4">Đăng Nhập</h3>
                    <form @submit.prevent="login">
                      <div class="mb-3">
                        <label for="email" class="form-label">Email:</label>
                        <input
                          type="email"
                          v-model="UserActivation.email"
                          class="form-control"
                          id="email"
                          placeholder="Nhập email của bạn"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="password" class="form-label">Mật khẩu:</label>
                        <input
                          type="password"
                          v-model="UserActivation.password"
                          class="form-control"
                          id="password"
                          placeholder="Nhập mật khẩu"
                        />
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3">
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="rememberMe"
                          />
                          <label class="form-check-label" for="rememberMe">Nhớ tôi</label>
                        </div>
                        <a href="#" class="text-decoration-none">Quên mật khẩu?</a>
                      </div>
                      <button type="submit" class="btn btn-primary w-100">Đăng Nhập</button>
                    </form>
                    <hr class="my-4" />
                    <p class="text-center">
                      Chưa có tài khoản? <a href="#" class="text-decoration-none">Đăng ký ngay</a>
                    </p>
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
  
  <script setup>
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap/dist/js/bootstrap.bundle';
  import { useRouter } from 'vue-router';
  
  import Header from '../components/header.vue';
  import Footer from '../components/footer.vue';
  import { ref, reactive, inject } from 'vue';
  
  const isLoggedIn = inject('isLoggedIn');  // Kiểm tra trạng thái đăng nhập
  const emit = defineEmits(['user-login']);
  const router = useRouter();
  
  // Thông tin người dùng
  const UserActivation = reactive({
    email: '',
    fullName: '',
    password: '',
  });
  
  // Đăng nhập
  function login() {
    if (!UserActivation.email || !UserActivation.password) {
      alert('Thông tin đăng nhập thiếu');
      return;
    }
  
    emit('user-login', { ...UserActivation });
    router.push('/index');
  }
  
  // Chuyển hướng về trang chủ nếu người dùng đã đăng nhập
  function goToHome() {
    router.push('/index');
  }
  </script>
  
  <style scoped>
  </style>
  