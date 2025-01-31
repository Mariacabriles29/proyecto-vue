<template>
  <div class="header">{{ messageRecieved }} <Weather /></div>
</template>
<script setup>
import Weather from "./Weather.vue";
import { defineProps, ref, watch } from "vue";
const props = defineProps(["message"]);
const messageRecieved = ref(props.message);
watch(
  () => props.message,
  (newVal) => {
    messageRecieved.value = newVal;
    messageRecieved.value = props.message;
  }
);
watch;
</script>
<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 10px 20px;
  /* position: fixed;
  top: 0;
  right: 0; */
  background-color: #333;
  color: white;
  width: 100%;
  gap: 4px;
}
.title {
  margin: 0;
}
</style>
