<script setup>
  import {ref}from 'vue'

  const object = ref({
    count: 2,
    user: {
      name: 'nguyen van a',
      age: 18
    },
    array: [1,2,3]
  })

  const change = () => {
    object.value.count++
    object.value.array.push(4)
  }
</script>

<template>
    <div>
      <p>Count: {{ object.count }}</p>
      <p>Array: {{ object.array }}</p>
      <button @click="change">Increase</button>

      <hr>
      <p>Tôi tên là: {{ object.user.name }}</p>
      <p>Tuổi của tôi là: {{ object.user.age }}</p>
    </div>
</template>