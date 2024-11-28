<script setup>
import { reactive, inject, defineEmits, defineProps } from "vue";
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';

const emit = defineEmits(["post-added","post-deleted"]);
const globalState = inject('globalState'); // Nhận global state
const currentUser = inject('currentUser'); 
    const newPost = reactive({
        id : null,
        title: "",
        author: "", 
        content: "",
    });

function addPost() {
    if (newPost.title && newPost.content) {
        newPost.author = currentUser.value.fullname;
        newPost.id = Math.floor(Math.random() * 100);
        console.log('Tác giả: ' + currentUser.value.fullname)
        emit("post-added", newPost);
        newPost.title = "";
        newPost.content = "";
        console.log('Đã vòa được đây')
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

function editPost(postId) {

}

</script>

<template>
    <div>
        
        <main v-if="globalState.isLoggedIn" class="content-background">
            <div class="container">
                <h2 class="text-center mb-5 text-light">Quản Lý Bài Blog</h2>
                
                <!-- Form đăng bài viết mới -->
                <div class="card mb-5">
                    <div class="card-body">
                        <h4 class="card-title">Đăng Bài Viết Mới</h4>
                        <form @submit.prevent="addPost">
                            <div class="mb-3">
                                <label for="title" class="form-label">Tiêu Đề:</label>
                                <input v-model="newPost.title" type="text" class="form-control" id="title" placeholder="Nhập tiêu đề bài viết" required>
                            </div>
                            <div class="mb-3">
                                <label for="content" class="form-label">Nội Dung:</label>
                                <textarea v-model="newPost.content" class="form-control" id="content" rows="5" placeholder="Nhập nội dung bài viết" required></textarea>
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
