<script setup>
    import 'bootstrap/dist/css/bootstrap.css';
    import 'bootstrap/dist/js/bootstrap.bundle';


    import Header from '../components/header.vue';
    import Footer from '../components/footer.vue';

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
                            <h3 class="text-center mb-4">Đăng Nhập</h3>
                            <form>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email:</label>
                                    <input type="email" class="form-control" id="email" placeholder="Nhập email của bạn">
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Mật khẩu:</label>
                                    <input type="password" class="form-control" id="password" placeholder="Nhập mật khẩu">
                                </div>
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="rememberMe">
                                        <label class="form-check-label" for="rememberMe">Nhớ tôi</label>
                                    </div>
                                    <a href="#" class="text-decoration-none">Quên mật khẩu?</a>
                                </div>
                                <button type="submit" class="btn btn-primary w-100">Đăng Nhập</button>
                            </form>
                            <hr class="my-4">
                            <p class="text-center">Chưa có tài khoản? <a href="#" class="text-decoration-none">Đăng ký ngay</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <Footer></Footer>
    </div>
</template>