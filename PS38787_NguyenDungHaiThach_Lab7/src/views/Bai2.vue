<template>
    <div v-if="!dangNhapThanhCong" class="p-5 col-sm-4">  
        <h3>Form Đăng nhập</h3> 
        <p v-if="taikhoanloi" style="color: red;">{{ taikhoanloi }}</p>
        <form @submit.prevent="dangNhap"> 
            <div class="mb-3 mt-3">
                <label>Email:</label>
                <input type="email" class="form-control" v-model="email" placeholder="Nhập email">
                <p v-if="emailLoi" style="color: red;">{{ emailLoi }}</p>
            </div>
            <div class="mb-3">
                <label>Mật khẩu:</label>
                <input type="password" class="form-control" v-model="matKhau" placeholder="Nhập mật khẩu">
                <p v-if="matKhauLoi" style="color: red;">{{ matKhauLoi }}</p>
            </div>
            <button type="submit" class="btn btn-primary">Đăng nhập</button>
        </form>
    </div>

    <div v-else class="p-5 col-sm-5">
        <h3>Chào mừng, {{ email }}!</h3>
        <button @click="dangXuat" class="btn btn-primary">Đăng xuất</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const dangNhapThanhCong = ref(false);
const email = ref('');
const matKhau = ref('');
const emailLoi = ref('');
const matKhauLoi = ref('');
const taikhoanloi = ref('');

const taiKhoanMau = [
  { email: 'test1@gmail.com', matKhau: '123' },
  { email: 'test2@gmail.com', matKhau: '123' },
  { email: 'test3@gmail.com', matKhau: '123' }
];

const dangNhap = () => {
    emailLoi.value = '';
    matKhauLoi.value = '';
    taikhoanloi.value = '';

    if (!matKhau.value) {
        matKhauLoi.value = 'Mật khẩu là bắt buộc.';
    }
    if (!email.value) {
        emailLoi.value = 'Email là bắt buộc.';
        return;
    } 

    const taiKhoan = taiKhoanMau.find(tk => tk.email === email.value && tk.matKhau === matKhau.value);
    if (!taiKhoan) {
        taikhoanloi.value = 'Email hoặc mật khẩu không chính xác.';
    }

    if (!emailLoi.value && !matKhauLoi.value && taiKhoan) {
        dangNhapThanhCong.value = true;
    }
}

const dangXuat = () => {
    dangNhapThanhCong.value = false;
    email.value = '';
    matKhau.value = '';
    emailLoi.value = '';
    matKhauLoi.value = '';
}
</script>

<style scoped>

</style>
