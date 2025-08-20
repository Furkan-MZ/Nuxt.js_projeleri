<template>


<div class="h-screen flex flex-col justify-center items-center justify-center items-center bg-gray-100 dark:bg-gray-900 p-4">
 <div :class="{ dark: isDark }">

    <button
      @click="toggleDark()"
      class="px-4 py-2 text-white bg-green-500 rounded"
    >
      Toggle Dark Mode
    </button>


 
</div>



  <p class="text-white text-3xl font-semibold mx-autop-2">Welcome Back</p>
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h1 class="text-2xl font-bold mb-4 text-center dark:text-white">Admin Login</h1>
      <input 
        v-model="password"
        type="password" 
        placeholder="Enter password"
        class="w-full p-2 border rounded mb-4 dark:bg-gray-700 dark:text-white"
      />
      <button 
        @click="login"
        class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Login
      </button>
     <p class="p-2 text-white">Please enter your password to log in </p>
      <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
    </div>
  </div>


</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const password = ref('')
const error = ref('')

function login() {
  if (password.value === 'admin123') {
    localStorage.setItem('isAdmin', 'true'); // Admin girişini kaydet
    navigateTo('/admin/dashboard'); // Admin dashboard'a yönlendir
  } else {
    error.value = 'Incorrect password';
  }
}


import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>