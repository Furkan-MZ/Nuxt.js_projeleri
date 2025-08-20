<template>
  <div class="isolate bg-gradient-to-r from-gray-400 via-gray-300 to-gray-300 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 px-6 py-24 sm:py-32 lg:px-8">
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div
        class="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-288.75"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      />
    </div>
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Contact With Us</h2>
      <p class="mt-2 text-lg text-white pt-2">We will respond as soon as possible</p>

      <div class="flex gap-2 mx-auto">
        <img class="mx-auto" src="https://mobilestrike.help/img/country/flags/iso/shiny/64/TR.png" />
        <img class="mx-auto" src="https://mobilestrike.help/img/country/flags/iso/shiny/64/GB.png" />
        <img class="mx-auto" src="https://mobilestrike.help/img/country/flags/iso/shiny/64/FR.png" />
        <img class="mx-auto" src="https://mobilestrike.help/img/country/flags/iso/shiny/64/RU.png" />
      </div>
    </div>

    <form @submit.prevent="submitForm" class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <!-- First Name -->
        <div>
          <label for="first-name" class="block text-sm font-semibold text-white">First name</label>
          <div class="mt-2.5">
            <input
              v-model="formData.firstName"
              type="text"
              id="first-name"
              autocomplete="given-name"
              class="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 border-2 border-white placeholder:text-gray-500 focus:outline-indigo-500"
            />
          </div>
        </div>

        <!-- Last Name -->
        <div>
          <label for="last-name" class="block text-sm font-semibold text-white">Last name</label>
          <div class="mt-2.5">
            <input
              v-model="formData.lastName"
              type="text"
              id="last-name"
              autocomplete="family-name"
              class="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 border-2 border-white placeholder:text-gray-500 focus:outline-indigo-500"
            />
          </div>
        </div>

        <!-- Company -->
        <div class="sm:col-span-2">
          <label for="company" class="block text-sm font-semibold text-white">Company</label>
          <div class="mt-2.5">
            <input
              v-model="formData.company"
              type="text"
              id="company"
              autocomplete="organization"
              class="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 border-2 border-white placeholder:text-gray-500 focus:outline-indigo-500"
            />
          </div>
        </div>

        <!-- Email -->
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold text-white">Email</label>
          <div class="mt-2.5">
            <input
              v-model="formData.email"
              type="email"
              id="email"
              autocomplete="email"
              class="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 border-2 border-white placeholder:text-gray-500 focus:outline-indigo-500"
            />
          </div>
        </div>

        <!-- Phone -->
        <div class="sm:col-span-2">
          <label for="phone-number" class="block text-sm font-semibold text-white">Phone number</label>
          <div class="mt-2.5">
            <input
              v-model="formData.phoneNumber"
              type="text"
              id="phone-number"
              placeholder="123-456-7890"
              class="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 border-2 border-white placeholder:text-gray-500 focus:outline-indigo-500"
            />
          </div>
        </div>

        <!-- Message -->
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold text-white">Message</label>
          <div class="mt-2.5">
            <textarea
              v-model="formData.message"
              id="message"
              rows="4"
              class="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 border-2 border-white placeholder:text-gray-500 focus:outline-indigo-500"
            ></textarea>
          </div>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="mt-10">
        <button
          type="submit"
          class="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-indigo-500"
        >
          Let's talk
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>

definePageMeta({
  layout: 'custom'
})

import { reactive } from "vue";

// Reaktif bir form nesnesi
const formData = reactive({
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phoneNumber: "",
  message: "",
});

// Form submit fonksiyonu
function submitForm() {
  console.log("Form submitted with data:", formData);
}
</script>