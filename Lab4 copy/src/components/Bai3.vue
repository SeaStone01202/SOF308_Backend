<script setup>
import { ref } from 'vue';

const greeting = ref('Xin chào bạn');
const buttonTitle = ref('Nhấn để thay đổi lời chào');

const changeGreeting = () => {
    buttonTitle.value = 'Lời chào mới đã được cập nhật';
    greeting.value = 'Hello, World!';
};
</script>


<template>
    <div>
    <h1>{{ greeting }}</h1>
    <button @click="changeGreeting">Click để thay đổi nội dung: {{ buttonTitle }}</button>
    </div>
</template>


