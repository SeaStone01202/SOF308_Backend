<script setup>
import { computed, reactive, inject } from 'vue';
import { useRoute } from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
const emit = defineEmits(["comment-added"]);
const currentUser = inject('currentUser');  
const globalState = inject('globalState'); // Nhận global state

const props = defineProps({
    listPost: {
        type: Array,
        required: true,
    },
    listComment: {
        type: Array,
        required: true,
    },
});

const route = useRoute();
const postId = route.params.id; 

const selectedPost = computed(() => {
    return props.listPost.find(post => post.id === parseInt(postId));
});

const selectedComments = computed(() => {
    return props.listComment.filter(comment => comment.id === parseInt(postId));
});

const comment = reactive({
    id: '',
    name: '',
    text: '',
});

function submitComment() {
    if (comment.text) {
        comment.id = parseInt(postId);
        comment.name = currentUser.value.fullname;
        emit("comment-added", comment);
        alert('Thêm bình luận thành công !')
    } else {
        alert('Chưa nhập nội dung !');
        return;
    }
    console.log(comment)
}

</script>

<template>
    <div>
        <main class="content-background">
            <div class="container">
                <div v-if="selectedPost" class="row g-5 mt-3 bg-body-tertiary">
                    <div class="col-md-8">
                        <h3 class="pb-4 mb-4 fst-italic border-bottom">Bài viết chi tiết</h3>
                        <article class="blog-post">
                            <h2 class="display-5 link-body-emphasis mb-1">{{ selectedPost.title }}</h2>
                            <p class="blog-post-meta">{{ selectedPost.date }} by <a href="#">{{ selectedPost.author }}</a></p>
                            <p>{{ selectedPost.content }}</p>
                        </article>
                    </div>

                    <div class="col-md-4">
                        <!-- Sidebar -->
                        <div v-if="globalState.isLoggedIn" class="position-sticky" style="top: 2rem;">
                            <div class="p-4 mb-3 bg-body-tertiary rounded">
                                <form @submit.prevent="submitComment">
                                    <h4 class="">Bình luận</h4>
                                    <textarea v-model="comment.text" placeholder="Nhập bình luận của bạn" class="w-100"></textarea>
                                    <button class="btn btn-success mt-2">Gửi bình luận</button>
                                </form>
                                <h5 class="mt-2">Danh sách bình luận:</h5>
                                <ul>
                                    <li v-for="(comment, index) in selectedComments" :key="index">
                                        <b>{{ comment.name }}</b> 
                                        {{ comment.text }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div v-else><h3>Đăng nhập để xem bình luận</h3></div>
                    </div>
                </div>
                <div v-else>
                    <p>Bài viết không tồn tại!</p>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </div>
</template>
