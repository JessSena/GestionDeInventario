<script setup>
import { ref, onMounted } from 'vue';

const products = ref([]);
const error = ref(null);

// Función para obtener productos
const fetchProducts = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/productos`);
    if (!response.ok) throw new Error('Error al obtener productos');
    products.value = await response.json();
  } catch (err) {
    error.value = err.message;
  }
};

// Función para eliminar un producto
const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/productos/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Error al eliminar producto');
    // Volver a cargar la lista de productos
    fetchProducts();
  } catch (err) {
    error.value = err.message;
  }
};

// Función para editar un producto (por ejemplo, redirigir a un formulario de edición)
const editProduct = (id) => {
  // Redirigir al formulario de edición o abrir un modal, dependiendo de tu flujo
  alert(`Editar producto con ID: ${id}`);
};

onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <div>
    <h1>Lista de Productos</h1>
    <div v-if="error" class="error">{{ error }}</div>
    <ul v-else>
      <li v-for="product in products" :key="product.id">
        <strong>{{ product.name }}</strong><br>
        Categoría: {{ product.category }}<br>
        Cantidad: {{ product.quantity }}<br>
        Precio: {{ product.price }}<br>
        <button @click="editProduct(product.id)">Editar</button>
        <button @click="deleteProduct(product.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.error {
  color: red;
  font-weight: bold;
}
button {
  margin-left: 10px;
}
</style>
