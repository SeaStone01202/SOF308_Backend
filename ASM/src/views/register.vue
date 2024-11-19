<script setup>
    import 'bootstrap/dist/css/bootstrap.css';
    import 'bootstrap/dist/js/bootstrap.bundle';


    import Header from '../components/header.vue';
    import Footer from '../components/footer.vue';

</script>

<template>
    <div>
        <Header></Header>

        <main class="content-background d-flex justify-content-center align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6 col-lg-5">
                    <div class="card shadow-lg">
                        <div class="card-body p-5">
                            <h3 class="text-center mb-4">Đăng Ký</h3>
                            <form>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email:</label>
                                    <input type="email" class="form-control" id="email" placeholder="Nhập email của bạn" required>
                                </div>
                                <div class="mb-3">
                                    <label for="fullname" class="form-label">Họ và Tên:</label>
                                    <input type="text" class="form-control" id="fullname" placeholder="Nhập họ và tên" required>
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Mật khẩu:</label>
                                    <input type="password" class="form-control" id="password" placeholder="Nhập mật khẩu" required>
                                </div>
                                <button type="submit" class="btn btn-primary w-100">Đăng Ký</button>
                            </form>
                            <hr class="my-4">
                            <p class="text-center">Đã có tài khoản? <a href="login.html" class="text-decoration-none">Đăng nhập ngay</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <Footer></Footer>
    </div>
</template>