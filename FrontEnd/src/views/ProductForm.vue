<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const product = ref({
  name: '',
  category: '',
  quantity: '',
  price: ''
});
const error = ref(null);
const isEditing = ref(false);
const route = useRoute();
const router = useRouter();

const fetchProduct = async () => {
  try {
    const response = await fetch(`http://localhost:5000/api/products`);
    if (!response.ok) throw new Error('Error al obtener el producto');
    product.value = await response.json();
  } catch (err) {
    error.value = err.message;
  }
};

const saveProduct = async () => {
  const method = isEditing.value ? 'PUT' : 'POST';
  const url = isEditing.value 
    ? `http://localhost:5000/api/products/${product.value.id}`
    : `http://localhost:5000/api/products`;

  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product.value)
    });

    if (!response.ok) throw new Error('Error al guardar el producto');
    router.push('/product-list');
  } catch (err) {
    error.value = err.message;
  }
};

onMounted(() => {
  const id = route.params.id;
  if (id) {
    isEditing.value = true;
    fetchProduct(id);
  }
});
</script>

<template>
  <div class="form-container">
    <h1>{{ isEditing ? 'Editar Producto' : 'Crear Producto' }}</h1>
    <div v-if="error" class="error-message">{{ error }}</div>

    <form @submit.prevent="saveProduct">
      <div class="input-group">
        <label for="name">Nombre</label>
        <input v-model="product.name" id="name" type="text" required placeholder="Ejemplo: Laptop Acer" />
      </div>
      <div class="input-group">
        <label for="category">Categoría</label>
        <input v-model="product.category" id="category" type="text" required placeholder="Ejemplo: Electronics" />
      </div>
      <div class="input-group">
        <label for="quantity">Cantidad</label>
        <input v-model="product.quantity" id="quantity" type="number" />
      </div>
      <div class="input-group">
        <label for="price">Precio</label>
        <input v-model="product.price" id="price" type="number" />
      </div>
      <button type="submit" class="submit-button">
        {{ isEditing ? 'Actualizar Producto' : 'Crear Producto' }}
      </button>
    </form>
  </div>
</template>

<style scoped>
/* Estilo de los mensajes de error */
.error-message {
  color: red;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  font-size: 1.1rem;
}

/* Estilo del formulario */
.form-container {
  max-width: 500px;
  margin: 50px auto;
  padding: 30px;
  background: linear-gradient(135deg, #ff9a8b, #ff6a88);
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  animation: fadeIn 0.6s ease;
}

/* Animación de desvanecimiento */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Estilo de los campos de entrada */
.input-group {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #fff;
}

input:focus {
  border-color: #4e9af1;
  outline: none;
  background-color: #f1faff;
}

/* Estilo del botón */
.submit-button {
  padding: 15px 30px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.submit-button:hover {
  background-color: #2980b9;
  transform: scale(1.05);
}

/* Estilo del formulario en el contenedor */
.form-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 40px;
  background-color: #fefefe;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

input {
  border-radius: 10px;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
}

.submit-button {
  background-color: #28a745;
  font-weight: bold;
}
</style>