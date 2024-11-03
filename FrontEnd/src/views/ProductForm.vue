<template>
  <div class="container">
    <h1>{{ isEditing ? "Editar" : "Agregar" }} Producto</h1>
    <form @submit.prevent="addProduct" class="product-form">
      <input v-model="newProduct.name" placeholder="Nombre del Producto" required class="form-input" />
      <input v-model="newProduct.category" placeholder="Categoría" required class="form-input" />
      <input v-model="newProduct.stock" type="number" placeholder="Stock" required class="form-input" />
      <button type="submit" class="submit-button">{{ isEditing ? "Actualizar Producto" : "Agregar Producto" }}</button>
    </form>
  </div>
</template>

<script>
import { products } from '../components/ProductList.js';
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      newProduct: { name: '', category: '', stock: 0 },
      isEditing: false,
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    addProduct() {
      const newProduct = { ...this.newProduct, id: this.generateId() };
      products.push(newProduct); // Agrega el nuevo producto al array importado
      this.newProduct = { name: '', category: '', stock: 0 }; // Resetea el formulario
      console.log('Redirecting to ProductList');
      this.router.push('/product-list'); // Redirige a la lista de productos
    },
    generateId() {
      return products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
  text-align: center;
}

.product-form {
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
