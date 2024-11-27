<template>
  <div class="login-container">
    <h1>Iniciar Sesión</h1>
    <form @submit.prevent="login" class="login-form">
      <input v-model="username" placeholder="Usuario" required class="form-input" />
      <input type="password" v-model="password" placeholder="Contraseña" required class="form-input" />
      <button type="submit" class="submit-button">Iniciar Sesión</button>
    </form>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      username: 'admin',
      password: 'password',
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    login() {
      // Simulación de verificación
      if (this.username === 'admin' && this.password === 'password') {
        localStorage.setItem('authToken', 'your_token'); // Guarda el token
        this.router.push('/product-list'); // Redirige
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  color: #333;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-input {
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
