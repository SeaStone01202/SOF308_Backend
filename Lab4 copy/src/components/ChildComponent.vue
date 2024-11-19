<template>
    <div>
      <h1>Xin chào, {{ name }}!</h1>
      <p>Tuổi của bạn là: {{ age }}</p>
      <p v-if="isAdmin">Bạn là admin.</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    props: {
      name: {
        type: String,       // Yêu cầu kiểu String
        required: true      // Bắt buộc phải truyền từ cha
      },
      age: {
        type: Number,       // Yêu cầu kiểu Number
        default: 18         // Giá trị mặc định nếu không được truyền
      },
      isAdmin: {
        type: Boolean,      // Yêu cầu kiểu Boolean
        default: false      // Giá trị mặc định là false
      }
    }
  });
  </script>
  