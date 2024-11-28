<script setup>
    import { reactive, ref } from 'vue';

    const actionAX = ref("");

    const actionList = ref([]);

    function addAction() {
    if (actionAX.value.trim().length <= 0) {
        alert('Chưa nhập gì cả mà!');
        return;
    } else {
        actionList.value.push(actionAX.value.trim());
        actionAX.value = ""; 
    }
}


    function remoteAction(index) {
        actionList.value.splice(index,1);
    }
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <h1 class="text-center">Quản lý công việc</h1>
                <label>Tên công việc: </label>
                <form @submit.prevent="addAction">
                    <input v-model="actionAX" type="text" class="form-control" placeholder="Nhập tên công việc">
                    <button class="btn btn-primary mt-2" type="submit">Thêm công việc</button>
                </form>

                <br>

                <div
                    v-for="(action, index) in actionList"
                    :key="index"
                    class="d-flex justify-content-between align-items-center border rounded p-2 mt-2">
                    <label>{{ action }}</label>
                    <button class="btn btn-danger" @click="remoteAction(index)">Xóa</button>
                </div>
            </div>
            <div class="col-8"></div>
        </div>
    </div>
</template>
