<template>
  <footer class="py-8 bg-white">
    <div class="px-4 m-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex mt-4 space-x-6">
          <a href="#" class="text-gray-500 hover:text-gray-900">
            <i class="pi pi-facebook"></i>
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-900">
            <i class="pi pi-instagram"></i>
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-900">
            <i class="pi pi-twitter"></i>
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-900">
            <i class="pi pi-github"></i>
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-900">
            <i class="pi pi-youtube"></i>
          </a>
        </div>
        <p class="mt-4 text-sm text-gray-500">© 2024 Your Company, Inc. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
html, body {
  height: 10%;
  margin: 0;
  display: flex;
  flex-direction: column;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footer {
  background-color: #1a202c; /* Tailwind bg-gray-900 */
  position:relative;
  left: 0;
  bottom: 0;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 6px;
  /* Add any other required Tailwind or custom classes here */
}

.max-w-screen-xl {
  max-width: 1280px; /* Adjust according to your needs */
  margin: auto;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.pt-16 {
  padding-top: 4rem;
}

.pb-6 {
  padding-bottom: 1.5rem;
}

.sm\\:px-6 {
  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

.lg\\:px-8 {
  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.lg\\:pt-24 {
  @media (min-width: 1024px) {
    padding-top: 6rem;
  }
}

.grid {
  display: grid;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.gap-8 {
  gap: 2rem;
}

.lg\\:grid-cols-3 {
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}


</style>