<script setup>
import { reactive, ref } from 'vue';

// Danh sách học sinh
const students = reactive([]);

// Dữ liệu người dùng (cho form)
const users = reactive({
  name: '',
  score: null,
  birthday: ''
});

// Trạng thái chỉnh sửa
const isEditing = ref(false);
const editIndex = ref(null); // Lưu chỉ số học sinh đang chỉnh sửa

const emit = defineEmits(["user-added"]);

// Hàm thêm hoặc cập nhật học sinh
const addUser = () => {
  if (users.name && users.score && users.birthday) {
    if (isEditing.value) {
      // Cập nhật học sinh hiện tại
      students[editIndex.value] = { ...users };
      isEditing.value = false; // Đặt lại trạng thái chỉnh sửa
      editIndex.value = null;  // Đặt lại chỉ số học sinh chỉnh sửa
    } else {
      // Thêm học sinh mới
      students.push({ ...users });
    }
    // Reset form
    users.name = '';
    users.score = null;
    users.birthday = '';
  } else {
    alert("Vui lòng điền đầy đủ thông tin!");
  }
};

// Hàm chỉnh sửa học sinh
const editUser = (index) => {
  const student = students[index];
  users.name = student.name;
  users.score = student.score;
  users.birthday = student.birthday;
  isEditing.value = true;  // Đặt trạng thái chỉnh sửa
  editIndex.value = index; // Lưu chỉ số học sinh cần chỉnh sửa
};

// Hàm xóa học sinh
const deleteUser = (index) => {
  students.splice(index, 1); // Xóa học sinh khỏi danh sách
};
</script>

<template>
  <div class="container">
    <div class="row">
      <!-- Form Thêm / Cập nhật học sinh -->
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

      <!-- Danh sách học sinh -->
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
