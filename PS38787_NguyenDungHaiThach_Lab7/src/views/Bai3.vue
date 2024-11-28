<template>
    <div class="container">
        <div class="row">
            <div  class="col-sm-6 p-5">
                <!-- Form đăng ký -->
                <h3>Form Đăng ký</h3> 
                <p v-if="dangKyLoi" style="color: red;">{{ dangKyLoi }}</p>
                <form @submit.prevent="dangKy">
                    <div class="mb-3">
                        <label>Họ và tên:</label>
                        <input type="text" class="form-control" v-model="hoTenDangKy" placeholder="Nhập họ và tên">
                        <p v-if="hoTenDangKyLoi" style="color: red;">{{ hoTenDangKyLoi }}</p>
                    </div>
                    <div class="mb-3">
                        <label>Email:</label>
                        <input type="email" class="form-control" v-model="emailDangKy" placeholder="Nhập email đăng ký">
                        <p v-if="emailDangKyLoi" style="color: red;">{{ emailDangKyLoi }}</p>
                    </div>
                    <div class="mb-3">
                        <label>Mật khẩu:</label>
                        <input type="password" class="form-control" v-model="matKhauDangKy" placeholder="Nhập mật khẩu">
                        <p v-if="matKhauDangKyLoi" style="color: red;">{{ matKhauDangKyLoi }}</p>
                    </div>
                    <div class="mb-3">
                        <label>Ngày sinh:</label>
                        <input type="date" class="form-control" v-model="ngaySinhDangKy">
                        <p v-if="ngaySinhDangKyLoi" style="color: red;">{{ ngaySinhDangKyLoi }}</p>
                    </div>
                    <div class="mb-3">
                        <label>Giới tính:</label><br>
                        <input type="radio" id="nam" value="Nam" v-model="gioiTinhDangKy">
                        <label for="nam">Nam</label>
                        <input type="radio" id="nu" value="Nữ" v-model="gioiTinhDangKy">
                        <label for="nu">Nữ</label>
                        <input type="radio" id="khac" value="Khác" v-model="gioiTinhDangKy">
                        <label for="khac">Khác</label>
                        <p v-if="gioiTinhDangKyLoi" style="color: red;">{{ gioiTinhDangKyLoi }}</p>
                    </div>
                    <div class="mb-3">
                        <label>Ngôn ngữ:</label><br>
                        <input type="checkbox" id="tieng-viet" value="Tiếng Việt" v-model="ngonNguDangKy">
                        <label for="tieng-viet">Tiếng Việt</label>
                        <input type="checkbox" id="tieng-anh" value="Tiếng Anh" v-model="ngonNguDangKy">
                        <label for="tieng-anh">Tiếng Anh</label>
                        <input type="checkbox" id="tieng-nhat" value="Tiếng Nhật" v-model="ngonNguDangKy">
                        <label for="tieng-nhat">Tiếng Nhật</label>
                        <p v-if="ngonNguDangKyLoi" style="color: red;">{{ ngonNguDangKyLoi }}</p>
                    </div>
                    <button type="submit" class="btn btn-success">Đăng ký</button>
                </form>
            </div>

            <div v-if="dangKyThanhCong" class="col-sm-6 p-5">
                <h3>Thông tin đã đăng ký</h3>
                <p><strong>Họ và tên:</strong> {{ hoTenDangKy }}</p>
                <p><strong>Email:</strong> {{ emailDangKy }}</p>
                <p><strong>Ngày sinh:</strong> {{ ngaySinhDangKy }}</p>
                <p><strong>Giới tính:</strong> {{ gioiTinhDangKy }}</p>
                <p><strong>Ngôn ngữ:</strong> {{ ngonNguDangKy.join(', ') }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const dangKyThanhCong = ref(false);
const hoTenDangKy = ref('');
const emailDangKy = ref('');
const matKhauDangKy = ref('');
const ngaySinhDangKy = ref('');
const gioiTinhDangKy = ref('');
const ngonNguDangKy = ref([]);
const hoTenDangKyLoi = ref('');
const emailDangKyLoi = ref('');
const matKhauDangKyLoi = ref('');
const matKhauXacNhanLoi = ref('');
const ngaySinhDangKyLoi = ref('');
const gioiTinhDangKyLoi = ref('');
const ngonNguDangKyLoi = ref('');
const dangKyLoi = ref('');

const dangKy = () => {
    // Reset lỗi
    hoTenDangKyLoi.value = '';
    emailDangKyLoi.value = '';
    matKhauDangKyLoi.value = '';
    matKhauXacNhanLoi.value = '';
    ngaySinhDangKyLoi.value = '';
    gioiTinhDangKyLoi.value = '';
    ngonNguDangKyLoi.value = '';
    dangKyLoi.value = '';

    if (!hoTenDangKy.value) {
        hoTenDangKyLoi.value = 'Họ và tên là bắt buộc.';
    }

    if (!emailDangKy.value) {
        emailDangKyLoi.value = 'Email là bắt buộc.';
    }

    if (!matKhauDangKy.value) {
        matKhauDangKyLoi.value = 'Mật khẩu là bắt buộc.';
    }

    if (!ngaySinhDangKy.value) {
        ngaySinhDangKyLoi.value = 'Ngày sinh là bắt buộc.';
    }

    if (!gioiTinhDangKy.value) {
        gioiTinhDangKyLoi.value = 'Giới tính là bắt buộc.';
    }

    if (ngonNguDangKy.value.length === 0) {
        ngonNguDangKyLoi.value = 'Ngôn ngữ là bắt buộc.';
    }

    if (!hoTenDangKyLoi.value && !emailDangKyLoi.value && !matKhauDangKyLoi.value && !matKhauXacNhanLoi.value && !ngaySinhDangKyLoi.value && !gioiTinhDangKyLoi.value && !ngonNguDangKyLoi.value) {
        dangKyThanhCong.value = true;
    } else {
        dangKyLoi.value = 'Vui lòng kiểm tra lại thông tin đăng ký.';
    }
}
</script>

<style scoped>
</style>
