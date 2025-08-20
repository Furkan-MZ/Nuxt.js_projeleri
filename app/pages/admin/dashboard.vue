<template>


  <div class="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
    <h1 class="text-2xl font-bold mb-4 dark:text-white">Admin Dashboard</h1>
    
    <!-- Yeni Özellik Ekle -->
    <div class="mb-6 p-4 bg-white dark:bg-gray-800 rounded shadow-lg">
      <h2 class="text-lg font-bold mb-2 dark:text-white">Add New Feature</h2>
      <input 
        v-model="newFeature.title"
        type="text" 
        placeholder="Feature Title"
        class="w-full p-2 border rounded mb-4 dark:bg-gray-700 dark:text-white"
      />
      <textarea 
        v-model="newFeature.description"
        placeholder="Feature Description"
        class="w-full p-2 border rounded mb-4 dark:bg-gray-700 dark:text-white"
      ></textarea>
      <button 
        @click="addFeature"
        class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Add Feature
      </button>
    </div>

    <!-- Özellik Listesi -->
    <div v-if="features.length" class="p-4 bg-white dark:bg-gray-800 rounded shadow-lg">
      <h2 class="text-lg font-bold mb-2 dark:text-white">Feature List</h2>
      <ul>
        <li v-for="(feature, index) in features" :key="index" class="mb-2 dark:text-white">
          <strong>{{ feature.title }}</strong>: {{ feature.description }}
        </li>
      </ul>
    </div>
  </div>




</template>

<script setup>








import { useState } from '#app'

const features = useState('features', () => []) // Global state
const newFeature = reactive({
  title: '',
  description: ''
})
function addFeature() {
  if (newFeature.title && newFeature.description) {
    features.value.push({ ...newFeature }); // Yeni özelliği ekle
    localStorage.setItem('features', JSON.stringify(features.value)); // LocalStorage'a kaydet
    newFeature.title = '';
    newFeature.description = '';
  }
}

definePageMeta({
  middleware: 'auth',
});



import { onMounted } from 'vue';

onMounted(() => {
  const savedFeatures = localStorage.getItem('features');
  if (savedFeatures) {
    features.value = JSON.parse(savedFeatures);
  }
});










</script>