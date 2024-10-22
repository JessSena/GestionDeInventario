<template>
  <div class="container">
    <h1>Gestión de Inventario</h1>

    <h2><br>Busqueda de Productos</h2>
    <input v-model="searchQuery" placeholder="Buscar productos..." class="search-input" />

    <!-- Formulario para agregar o editar productos -->
    <h2><br>Crear Producto</h2>
    <form @submit.prevent="saveProduct" class="product-form">
      <input v-model="editableProduct.name" placeholder="Nombre del Producto" required />
      <input v-model="editableProduct.category" placeholder="Categoría" required />
      <input v-model="editableProduct.stock" type="number" placeholder="Stock" required />
      <button type="submit" class="submit-button">{{ editableProduct.id ? 'Guardar Cambios' : 'Agregar Producto' }}</button>
    </form>

    <!-- Tabla de productos existentes -->
    <h2><br>Listado de Productos</h2>
    <table class="product-table">
      <thead>
        <tr>
          <th>Nombre del Producto</th>
          <th>Categoría</th>
          <th>Stock</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in filteredProducts" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.stock }}</td>
          <td>
            <button @click="startEditing(product)" class="edit-button">Editar</button>
            <button @click="deleteProduct(product.id)" class="delete-button">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { products } from '../components/ProductList.js'; // Importa los productos

export default {
  data() {
    return {
      searchQuery: '',
      products, // Asigna la lista de productos importada
      editableProduct: { name: '', category: '', stock: 0 }, // Producto editable o nuevo
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    addProduct() {
      const newProduct = { ...this.editableProduct, id: this.products.length + 1 }; // Crea nuevo producto
      this.products.push(newProduct); // Agrega el nuevo producto a la lista
      this.clearForm(); // Limpia el formulario
    },
    startEditing(product) {
      this.editableProduct = { ...product }; // Cargar el producto seleccionado para edición
    },
    saveProduct() {
      if (this.editableProduct.id) {
        // Si el producto tiene ID, es una edición
        const index = this.products.findIndex(p => p.id === this.editableProduct.id);
        if (index !== -1) {
          this.products.splice(index, 1, this.editableProduct); // Actualiza producto
        }
      } else {
        // Si no tiene ID, es un producto nuevo
        this.addProduct();
      }
      this.clearForm(); // Limpia el formulario
    },
    deleteProduct(productId) {
      this.products = this.products.filter(product => product.id !== productId); // Elimina producto
    },
    clearForm() {
      this.editableProduct = { name: '', category: '', stock: 0 }; // Limpia el formulario
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1, h2 {
  color: #333;
}

.search-input, 
.product-form input {
  width: 100%;
  padding: 10px;
  margin: 5px 0 20px 0;
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

.product-table {
  width: 100%;
  border-collapse: collapse;
}

.product-table th, .product-table td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

.edit-button, .delete-button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.edit-button {
  background-color: #ffc107;
  color: white;
}

.delete-button {
  background-color: #dc3545;
  color: white;
}

.edit-button:hover {
  background-color: #e0a800;
}

.delete-button:hover {
  background-color: #c82333;
}
</style>
