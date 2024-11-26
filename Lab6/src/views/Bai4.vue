<script setup>
import { reactive, ref } from 'vue';

const students = reactive([]);

const users = reactive({
  name: '',
  score: null,
  birthday: ''
});

const isEditing = ref(false);
const editIndex = ref(null); 

const emit = defineEmits(["user-added"]);

const addUser = () => {
  if (users.name && users.score && users.birthday) {
    if (isEditing.value) {
      students[editIndex.value] = { ...users };
      isEditing.value = false; 
      editIndex.value = null;  
    } else {
      students.push({ ...users });
    }
    users.name = '';
    users.score = null;
    users.birthday = '';
  } else {
    alert("Vui lòng điền đầy đủ thông tin!");
  }
};

const editUser = (index) => {
  const student = students[index];
  users.name = student.name;
  users.score = student.score;
  users.birthday = student.birthday;
  isEditing.value = true;
  editIndex.value = index;
};

const deleteUser = (index) => {
  students.splice(index, 1);
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-5">
        <h1>{{ isEditing ? 'Cập nhật học sinh' : 'Thêm học sinh' }}</h1>
        <form @submit.prevent="addUser">
          <div class="m-3">
            <label>Họ Tên:</label>
            <input v-model="users.name" type="text" class="form-control" />
          </div>
          <div class="m-3">
            <label>Điểm</label>
            <input v-model="users.score" type="number" class="form-control" />
          </div>
          <div class="m-3">
            <label>Ngày sinh</label>
            <input v-model="users.birthday" type="date" class="form-control" />
          </div>
          <button class="btn btn-success">{{ isEditing ? 'Cập nhật' : 'Thêm' }}</button>
        </form>
      </div>

      <div class="col-7">
        <h1>Danh sách học sinh</h1>
        <table class="border">
          <thead>
            <tr class="m-3">
              <td>Họ và Tên</td>
              <td>Điểm</td>
              <td>Ngày sinh</td>
              <td>Action 1</td>
              <td>Action 2</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(student, index) in students" :key="index">
              <td>{{ student.name }}</td>
              <td>{{ student.score }}</td>
              <td>{{ student.birthday }}</td>
              <td><button @click="editUser(index)" class="btn btn-warning">Sửa</button></td>
              <td><button @click="deleteUser(index)" class="btn btn-danger">Xóa</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
