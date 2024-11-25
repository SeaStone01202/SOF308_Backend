<template>
  <div class="post-list">
    <h2>Danh sách bài viết</h2>
    <div v-for="(post, index) in posts" :key="index" class="post-card" :style="post.style">
      <h3 :class="post.classes">{{ post.title }}</h3>
      <p><strong>Tác giả:</strong> {{ post.author }}</p>
      <p>{{ post.content }}</p>
      <button @click="changeStyle(index)" class="btn btn-secondary">Thay đổi kiểu</button>
    </div>
  </div>
</template>

<script setup>
// Nhận danh sách bài viết từ component cha qua props
const props = defineProps({
  posts: {
    type: Array,
    required: true,
  },
});

// Hàm thay đổi kiểu bài viết
const changeStyle = (index) => {
  props.posts[index].style = {
    color: props.posts[index].style.color === "blue" ? "green" : "blue",
    fontStyle: props.posts[index].style.fontStyle === "italic" ? "normal" : "italic",
  };
};
</script>

<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.post-card {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
