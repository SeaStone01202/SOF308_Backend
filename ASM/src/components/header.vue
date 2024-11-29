<script setup>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { inject } from 'vue';

const emit = defineEmits(["user-logout"]);
const globalState = inject('globalState');
const currentUser = inject('currentUser');

function logout() {
    if (globalState.isLoggedIn) {
        alert('Đăng xuất thành công !');
        emit('user-logout', false);
        console.log(globalState.isLoggedIn);
    } else {
        alert('Đã đăng nhập đâu mà đăng xuất !');
    }
}
</script>

<template>
  <header class="p-3 border-bottom">
    <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
                <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
            </a>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><router-link to="/index" class="nav-link px-2 link-secondary hover-link">Trang chủ</router-link></li>
                <li><a href="#" class="nav-link px-2 link-body-emphasis hover-link">Thể loại</a></li>
                <li><a href="#" class="nav-link px-2 link-body-emphasis hover-link">Về tôi</a></li>
                <li><a href="#" class="nav-link px-2 link-body-emphasis hover-link">Liên hệ</a></li>
            </ul>

            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                <input type="search" class="form-control" placeholder="Tìm kiếm thứ gì đó..." aria-label="Search">
            </form>

            <div class="dropdown text-end">
              <label v-if="currentUser">Xin chào {{ currentUser.fullname }}</label>
              <label v-else></label>
                <a href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
                </a>
                
                <ul class="dropdown-menu text-small">
                    <li><router-link to="/login" class="dropdown-item">Đăng nhập</router-link></li>
                    <li><router-link to="/register" class="dropdown-item">Đăng ký</router-link></li>
                    <li><router-link to="/manager-blog" class="dropdown-item">Trang quản lý</router-link></li>
                    <li><router-link to="/profile" class="dropdown-item">Trang cá nhân</router-link></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a @click="logout" class="dropdown-item" href="#">Đăng xuất</a></li>
                </ul>
            </div>
        </div>
    </div>
  </header>
</template>

<style>
  .content-background {
    background-image: url('../assets/image/04.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 40px;
  }

  header {
    background-color: whitesmoke;
  }

  .nav-link {
    transition: color 0.3s, background-color 0.3s;
  }

  .nav-link:hover {
    color: #ff6347;
    background-color: rgba(255, 99, 71, 0.1);
  }

  .nav-link.active {
    color: #ffffff;
    background-color: #ff6347;
  }

  .dropdown-item:hover {
    background-color: rgba(255, 99, 71, 0.1);
  }
</style>
