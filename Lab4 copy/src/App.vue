<template>
  <div>
    <!-- Truyền props cho component con -->
    <ChildComponent name="Ngọc" :age="25" :isAdmin="true" />
    <ChildComponent name="Hải" /> <!-- Không truyền age, dùng mặc định là 18 -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ChildComponent from './components/ChildComponent.vue';

export default defineComponent({
  components: {
    ChildComponent
  }
});
</script>
