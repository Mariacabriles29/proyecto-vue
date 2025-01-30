<template>
  <div>
    <h2>Lista de tareas</h2>
    <input type="text" v-model="newTask" @keyup.enter="addTask" >
    <ul>
      <li v-for="(tasks,index) in tasks" :key="index">
        {{ tasks }}
        <button @click="deleteTask(index)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>
<script setup>
import {ref} from 'vue';
const tasks= ref([]);
const newTask= ref('');
const addTask = () => {
  tasks.value.push(newTask.value);
  newTask.value='';
}
//se crea una funcion para eliminar una tarea
const deleteTask = (index) => {
  tasks.value.splice(index,1);  }

 </script>
<style></style>
