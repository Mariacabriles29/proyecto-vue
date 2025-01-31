import { defineStore } from "pinia";
import { ref } from "vue";
export const useRegisterStore = defineStore("register", () => {
  const nombre = ref("");
  const email = ref("");
  const saveRegister = (nombreFormulario, emailFormulario) => {
    nombre.value = nombreFormulario;
    email.value = emailFormulario;
  };
  return { nombre, email, saveRegister };
});
export default useRegisterStore;
