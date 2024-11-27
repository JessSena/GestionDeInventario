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
    const response = await fetch(`${import.meta.env.VITE_APP_URL}/products`);
    if (!response.ok) throw new Error('Error al obtener el producto');
    product.value = await response.json();
  } catch (err) {
    error.value = err.message;
  }
};

const saveProduct = async () => {
  const method = isEditing.value ? 'PUT' : 'POST';
  const url = isEditing.value 
    ? `${import.meta.env.VITE_APP_URL}/products/${product.value.id}`
    : `${import.meta.env.VITE_APP_URL}/products`;
    
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
  <div>
    <h1>{{ isEditing ? 'Editar Producto' : 'Crear Producto' }}</h1>
    <div v-if="error" class="error">{{ error }}</div>

    <form @submit.prevent="saveProduct">
      <div>
        <label for="name">Nombre</label>
        <input v-model="product.name" id="name" type="text" required />
      </div>
      <div>
        <label for="category">Categoría</label>
        <input v-model="product.category" id="category" type="text" required />
      </div>
      <div>
        <label for="quantity">Cantidad</label>
        <input v-model="product.quantity" id="quantity" type="number" required />
      </div>
      <div>
        <label for="price">Precio</label>
        <input v-model="product.price" id="price" type="number" required />
      </div>
      <button type="submit">{{ isEditing ? 'Actualizar Producto' : 'Crear Producto' }}</button>
    </form>
  </div>
</template>

<style scoped>
.error {
  color: red;
  font-weight: bold;
}
form {
  max-width: 400px;
  margin: 0 auto;
}
input {
  width: 100%;
  margin: 10px 0;
  padding: 8px;
}
button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>