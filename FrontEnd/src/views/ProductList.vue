<script setup>
import { ref, onMounted } from 'vue';

const products = ref([]);
const error = ref(null);

// Función para obtener productos
const fetchProducts = async () => {
  try {
    const response = await fetch(`http://localhost:5000/api/products`);
    if (!response.ok) throw new Error('Error al obtener productos');
    products.value = await response.json();
  } catch (err) {
    error.value = err.message;
  }
};

// Función para eliminar un producto
const deleteProduct = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/api/products/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Error al eliminar producto');
    // Volver a cargar la lista de productos
    fetchProducts();
  } catch (err) {
    error.value = err.message;
  }
};

// Función para editar un producto
const editProduct = (id) => {
  // Redirigir al formulario de edición o abrir un modal, dependiendo de tu flujo
  alert(`Editar producto con ID: ${id}`);
};

onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <div class="product-list-container">
    <h1>Lista de Productos</h1>
    <div v-if="error" class="error-message">{{ error }}</div>
    <ul v-else class="product-list">
      <li v-for="product in products" :key="product.id" class="product-item">
        <div class="product-info">
          <strong class="product-name">{{ product.name }}</strong>
          <p class="product-details">
            Categoría: {{ product.category }}<br>
            Cantidad: {{ product.quantity }}<br>
            Precio: ${{ product.price }}
          </p>
        </div>
        <div class="button-group">
          <button @click="editProduct(product.id)" class="edit-button">Editar</button>
          <button @click="deleteProduct(product.id)" class="delete-button">Eliminar</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Estilo general */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
}

/* Contenedor de la lista de productos */
.product-list-container {
  max-width: 800px;
  margin: 30px auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

/* Estilo del mensaje de error */
.error-message {
  color: red;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

/* Estilo de los elementos de la lista */
.product-list {
  list-style-type: none;
  padding: 0;
}

.product-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 15px;
  border-bottom: 1px solid #ddd;
}

.product-item:last-child {
  border-bottom: none;
}

.product-info {
  max-width: 70%;
}

.product-name {
  font-size: 1.2rem;
  color: #007bff;
}

.product-details {
  color: #555;
  font-size: 1rem;
}

.button-group {
  display: flex;
  gap: 10px;
  align-items: center;
}

/* Botones */
button {
  padding: 10px 15px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
}

.edit-button {
  background-color: #28a745;
  color: white;
}

.edit-button:hover {
  background-color: #218838;
}

.delete-button {
  background-color: #dc3545;
  color: white;
}

.delete-button:hover {
  background-color: #c82333;
}
</style>