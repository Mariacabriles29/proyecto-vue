<template>
  <h3>Propiedades computadas</h3>
  <input type="text" v-model="valor" />
  {{ valueCalculated }}
  <ResultSection v-if="showElement" :result="valueCalculated"></ResultSection>
  <div v-else-if="isNaN(valor)">Debe ser un numero para calcular</div>
  <div v-else>Aqui no se muestra nada</div>
</template>
<script setup>
import { ref, computed } from "vue";
import ResultSection from "./components/ResultSection.vue";
const valor = ref("");
const valueCalculated = computed(() => {
  return valor.value * 3;
});
// con esta funcion solo se muestra ResultSection si el valor es mayor a 10 con v-show y si es menor que 10 no se muestra
//y con v-if funciona casi igual
const showElement = computed(() => {
  return valor.value > 10;
});
</script>
<style scoped></style>
