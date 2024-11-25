<script setup>
import { ref, watch } from 'vue';

const message = ref('');
const month = ref(0);

const checkScore = () => {
    if (month.value < 1 ||month.value > 12 ) {
        message.value = 'Tháng không hợp lệ';
    } else
    if ( month.value <= 3) {
        message.value = 'Mùa Xuân';
    } else
    if (month.value <= 6) {
        message.value = 'Mùa Hè';
    } else
    if (month.value <= 9) {
        message.value = 'Mùa Hạ';
    } else
    if (month.value <= 12) {
        message.value = 'Mùa Đông';
    } else {
        message.value = '';
    }
};

watch(month, checkScore);
</script>

<template>
    <div class="p-5">
        <h1>Nhập tháng của bạn</h1>
        <input v-model.number="month" type="number" placeholder="Nhập tháng vào đây" />
        <p>{{ message }}</p>
    </div>
</template>
