<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form">
        <label for="nombre">Nombre:</label>
        <Field v-model="nombre" type="text" name="nombre" id="nombre" placeholder="Nombre" />
        <ErrorMessage name="nombre"></ErrorMessage>
      </div>
      <div class="form">
        <label for="correo">Correo:</label>
        <Field v-model="email" type="email" name="email" id="correo" placeholder="Email" />
        <ErrorMessage name="email"></ErrorMessage>
      </div>
      <div class="form">
        <button type="submit">Registrar</button>
      </div>
    </Form>
  </div>
</template>
<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import { schema } from "../schemas/validationSchema";
import useRegisterStore from "../stores/registerStore";
import { ref } from "vue";

//se importa la función useRegisterStore que es la tienda que cree y luego se llama creando una constante
const registerStore = useRegisterStore();
const nombre = ref("");
const email = ref("");
const onSubmit = () => {
  registerStore.saveRegister(nombre.value, email.value);
  console.log("Formulario enviado");
};
</script>
<style scoped>
.form {
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  max-width: 250px;
  width: 100%;
  gap: 4px;
}
</style>
