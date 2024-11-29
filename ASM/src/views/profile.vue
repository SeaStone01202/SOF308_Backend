cd ASM<script setup>
    import 'bootstrap/dist/css/bootstrap.css';
    import 'bootstrap/dist/js/bootstrap.bundle';
    import { defineProps, reactive } from "vue";
    import { inject } from "vue";


    import Header from '../components/header.vue';
    import Footer from '../components/footer.vue';

    const globalState = inject('globalState'); // Nhận global state
    const currentUser = inject('currentUser');
    const editedUser = reactive({
        email: '',
    fullname: '',
    password: '',
    });
    const emit = defineEmits(['user-edit']);

    function editProfile() {
    if (!editedUser.password.trim()) {
        alert('Vui lòng nhập mật khẩu mới.');
        return;
    }
    currentUser.fullname = editedUser.fullname;
    currentUser.email = editedUser.email;
    currentUser.password = editedUser.password;
    emit('user-edit', { ...currentUser });

    alert('Cập nhật thông tin thành công!');
}

</script>

<template>
    <div>

        <main v-if="globalState.isLoggedIn"  class="content-background d-flex justify-content-center align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6">
                    <div class="card shadow-lg">
                        <div class="card-body p-5">
                            <h3 class="text-center mb-4">Chỉnh Sửa Thông Tin</h3>
                            <form @submit.prevent="editProfile">
                                <!-- Fullname -->
                                <div class="mb-3">
                                    <label for="fullname" class="form-label">Họ và Tên:</label>
                                    <input type="text" class="form-control" id="fullname" v-model="editedUser.fullname" required>
                                </div>
                                <!-- Email -->
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email:</label>
                                    <input type="email" class="form-control" id="email" v-model="editedUser.email" required>
                                </div>
                                <!-- Password -->
                                <div class="mb-3">
                                    <label for="password" class="form-label">Mật khẩu:</label>
                                    <input type="password" class="form-control" id="password" v-model="editedUser.password" placeholder="Nhập mật khẩu mới" required>
                                </div>
                                <!-- Nút cập nhật -->
                                <button type="submit" class="btn btn-primary w-100">Cập Nhật</button>
                            </form>
                            <hr class="my-4">
                            <p class="text-center"><a href="profile.html" class="text-decoration-none">Quay lại trang cá nhân</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <main v-else class="d-flex justify-content-center align-items-center" style="height: 80vh;">
      <div class="text-center">
        <h3>Bạn chưa đăng nhập!</h3>
        <p>Vui lòng đăng nhập để tiếp tục.</p>
        <router-link to="/login" class="btn btn-primary mt-3">Đăng nhập</router-link>
      </div>
    </main>

    <Footer></Footer>
    </div>
</template>