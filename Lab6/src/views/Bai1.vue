<script setup>
import { ref, watch } from 'vue';

const message = ref('');
const score = ref(0);

const checkScore = () => {
    if (score.value >= 1 && score.value < 5) {
        message.value = 'Yếu';
    } else if (score.value >= 5 && score.value <= 6.5) {
        message.value = 'Trung bình';
    } else if (score.value >= 6.5 && score.value <= 8) {
        message.value = 'Khá';
    } else if (score.value >= 9 && score.value <= 10) {
        message.value = 'Giỏi';
    } else {
        message.value = 'Không hợp lệ'
    }
};

watch(score, checkScore);
</script>

<template>
    <div class="p-5">
        <h1>Nhập điểm của bạn</h1>
        <input v-model.number="score" type="number" placeholder="Nhập điểm vào đây" />
        <p>{{ message }}</p>
    </div>
</template>
