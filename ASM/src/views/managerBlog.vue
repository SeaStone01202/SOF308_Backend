<script setup>
    import 'bootstrap/dist/css/bootstrap.css';
    import 'bootstrap/dist/js/bootstrap.bundle';


    import Header from '../components/header.vue';
    import Footer from '../components/footer.vue';

</script>

<template>
    <div>
        <Header></Header>

        <main class="content-background">
        <div class="container">
            <h2 class="text-center mb-5 text-light ">Quản Lý Bài Blog</h2>

           <!-- Form đăng bài viết mới -->
        <div class="card mb-5">
            <div class="card-body">
                <h4 class="card-title">Đăng Bài Viết Mới</h4>
                <form id="postForm" enctype="multipart/form-data">
                    <div class="mb-3">
                        <label for="title" class="form-label">Tiêu Đề:</label>
                        <input type="text" class="form-control" id="title" placeholder="Nhập tiêu đề bài viết" required>
                    </div>
                    <div class="mb-3">
                        <label for="content" class="form-label">Nội Dung:</label>
                        <textarea class="form-control" id="content" rows="5" placeholder="Nhập nội dung bài viết" required></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="image" class="form-label">Hình Ảnh Minh Họa:</label>
                        <input type="file" class="form-control" id="image" accept="image/*" onchange="previewImage(event)">
                    </div>
                    <!-- Xem trước hình ảnh -->
                    <div class="mb-3">
                        <img id="preview" src="" alt="Xem trước hình ảnh" style="max-width: 150px; display: none; margin-top: 10px;">
                    </div>
                    <button type="submit" class="btn btn-primary">Đăng Bài Viết</button>
                </form>
            </div>
        </div>


            <!-- Bảng Danh Sách Bài Viết -->
        <h4 class="mb-3 text-light">Danh Sách Bài Viết</h4>
        <table class="table table-bordered">
            <thead class="table-dark">
                <tr>
                    <th>#</th>
                    <th>Tiêu Đề</th>
                    <th>Hình Ảnh</th>
                    <th>Hành Động</th>
                </tr>
            </thead>
            <tbody>
                <!-- Dữ liệu mẫu -->
                <tr>
                    <td>1</td>
                    <td>Bài Viết Mẫu 1</td>
                    <td><img src="https://via.placeholder.com/100" alt="Hình Ảnh" style="width: 100px;"></td>
                    <td>
                        <button class="btn btn-warning btn-sm">Chỉnh Sửa</button>
                        <button class="btn btn-danger btn-sm">Xóa</button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Bài Viết Mẫu 2</td>
                    <td><img src="https://via.placeholder.com/100" alt="Hình Ảnh" style="width: 100px;"></td>
                    <td>
                        <button class="btn btn-warning btn-sm">Chỉnh Sửa</button>
                        <button class="btn btn-danger btn-sm">Xóa</button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </main>

    <Footer></Footer>
    </div>
</template>