<template>
  <div class="sidebar">
    <h2>Bienvenidos</h2>
    <h3>Nombre:{{ nombre }}</h3>
    <h3>Email: {{ email }}</h3>
    <ul>
      <li><router-link to="/contador">Contador</router-link></li>
      <li><router-link to="/list-tasks">Lista de tareas</router-link></li>
      <li><router-link to="/register">Registrar</router-link></li>
    </ul>
  </div>
</template>
<script setup>
import { useRegisterStore } from "../modules/register/stores/registerStore";

import { ref, watch } from "vue";
const registerStore = useRegisterStore();
const nombre = ref(registerStore.nombre.value);
const email = ref(registerStore.email.value);
//esccuha los cambios del store
watch(
  () => registerStore.nombre,
  (newValue) => {
    nombre.value = newValue;
  }
);
watch(
  () => registerStore.email,
  (newValue) => {
    email.value = newValue;
  }
);
</script>
<style scoped>
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>
