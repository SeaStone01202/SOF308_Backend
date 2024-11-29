<script setup>
import { reactive, inject, defineEmits, defineProps } from "vue";
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';

const emit = defineEmits(["post-added","post-deleted"]);
const globalState = inject('globalState'); // Nhận global state
const currentUser = inject('currentUser'); 

const newPost = reactive({
    id: null,  // Thêm id để phân biệt bài viết cũ và mới
    title: "",
    author: "",
    content: "",
});

function addPost() {
    if (newPost.title && newPost.content) {
        newPost.author = currentUser.fullname;
        
        // Kiểm tra nếu đang sửa bài viết
        if (newPost.id !== null) {
            // Tìm và cập nhật bài viết trong listPost
            const postIndex = props.listPost.findIndex(post => post.id === newPost.id);
            if (postIndex !== -1) {
                props.listPost[postIndex] = { ...newPost }; // Cập nhật bài viết
                console.log('Bài viết đã được sửa!');
            }
        } else {
            // Tạo bài viết mới nếu chưa có id
            newPost.id = Math.floor(Math.random() * 100);
            emit("post-added", { ...newPost });
            console.log('Bài viết đã được đăng!');
        }

        // Reset form sau khi thêm hoặc sửa
        newPost.title = "";
        newPost.content = "";
        newPost.id = null;  // Reset id
    } else {
        alert("Vui lòng điền đầy đủ thông tin!");
    }
}

const props = defineProps({
    listPost: {
        type: Array,
        required: true,
    },
});

function deletePost(postId) {
    emit("post-deleted", postId);
}

// Cập nhật bài viết khi người dùng bấm "Chỉnh sửa"
function editPost(postId) {
    const postToEdit = props.listPost.find(post => post.id === postId);
    if (postToEdit) {
        newPost.id = postToEdit.id;
        newPost.title = postToEdit.title;
        newPost.content = postToEdit.content;
    }
}
</script>

<template>
    <div>
        
        <main v-if="globalState.isLoggedIn" class="content-background">
            <div class="container">
                <h2 class="text-center mb-5 text-light">Quản Lý Bài Blog</h2>
                
                <!-- Form đăng hoặc sửa bài viết -->
                <div class="card mb-5">
                    <div class="card-body">
                        <h4 class="card-title">{{ newPost.id ? 'Sửa Bài Viết' : 'Đăng Bài Viết' }}</h4>
                        <form @submit.prevent="addPost">
                            <div class="mb-3">
                                <label for="title" class="form-label">Tiêu Đề:</label>
                                <input v-model="newPost.title" type="text" class="form-control" id="title" placeholder="Nhập tiêu đề bài viết" required>
                            </div>
                            <div class="mb-3">
                                <label for="content" class="form-label">Nội Dung:</label>
                                <textarea v-model="newPost.content" class="form-control" id="content" rows="5" placeholder="Nhập nội dung bài viết" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">
                                {{ newPost.id ? 'Cập Nhật Bài Viết' : 'Đăng Bài Viết' }}
                            </button>
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
                            <th>Tác giả</th>
                            <th>Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(post, index) in listPost" :key="index">
                            <td>{{ post.id }}</td>
                            <td>{{ post.title }}</td>
                            <td>Tác giả: {{ post.author }}</td>
                            <td>
                                <button class="btn btn-warning btn-sm" @click="editPost(post.id)">Chỉnh Sửa</button>
                                <button class="btn btn-danger btn-sm" @click="deletePost(post.id)">Xóa</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
