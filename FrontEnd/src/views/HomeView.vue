<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <div class="box">
      <h1>Gestión de Inventario</h1>
      <h3>Alumnos: Jessica Sena y Federico Urich</h3>
      <h3>Materia: Arquitectura Web</h3>
      <h3>Profesor: Fernando Corinaldesi</h3>
    </div>
  </main>
</template>

<style scoped>
main {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  background: linear-gradient( 135deg, #ff9a8b, #ff6a88);
  padding: 30px;
  text-align: center;
  border-radius: 10px;
  width: 40%;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
}

h1, h3 {
  margin: 10px 0;
}

h1 {
  font-size: 2.5em;
  font-family: 'Roboto', sans-serif;
}

h3 {
  font-size: 1.2em;
}
</style>
